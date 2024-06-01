import { Result, type Command, type OutputFunction } from './Command.js';
import { AbilityCommand } from './commands/Ability.js';
import { CountCommand } from './commands/Count.js';
import { EchoCommand } from './commands/Echo.js';
import { ErrorCommand } from './commands/Error.js';
import { HelpCommand } from './commands/Help.js';
import { RunCommand } from './commands/Run.js';
import { WaitCommand } from './commands/Wait.js';
import { DiceParser } from './DiceParser.js';
import { FileSystem } from './FileSystem.js';
import { CustomVisitor } from './TableParser.js';
import { parseCommand, type CommandArgs } from './util.js';

export class TUI {
	history: [string, string][];
	private commands: { [key: string]: Command } = {};
	diceParser: DiceParser;
	fileSystem: FileSystem;
	tableParser: CustomVisitor;

	constructor(history: [string, string][] = []) {
		this.history = history;
		this.diceParser = new DiceParser();
		this.tableParser = new CustomVisitor();
		this.fileSystem = new FileSystem();
		this.registerCommand(new EchoCommand());
		// this.registerCommand(new WaitCommand());
		// this.registerCommand(new CountCommand());
		// this.registerCommand(new ErrorCommand());
		this.registerCommand(new HelpCommand());
		this.registerCommand(new AbilityCommand());
		this.registerCommand(new RunCommand());
	}

	async init() {
		await this.fileSystem.init();
		Object.values(this.commands).forEach((command) => command.init(this.fileSystem));
	}

	registerCommand(command: Command): void {
		this.commands[command.command] = command;
	}

	async executeCommand(
		commandName: string,
		args: CommandArgs,
		output: OutputFunction
	): Promise<Result | void> {
		const command = this.commands[commandName];
		if (command) {
			try {
				return await command.run(args, output, this.diceParser, this.fileSystem, this.tableParser);
			} catch (e: any) {
				output(`${e}`);
				return Result.Failure;
			}
		} else {
			output(`Command "${commandName}" not found.`);
			return Result.Failure;
		}
	}

	searchCommands(search: string): Command[] {
		return Object.values(this.commands).filter((command) =>
			command.command.toLowerCase().includes(search.toLowerCase())
		);
	}

	addToHistory(input: string, output: string) {
		this.history.push([input, output]);
	}

	calc(input: string): string {
		let result = this.diceParser.parse(input);
		if (this.diceParser.recentRolls.length > 0) {
			if (
				!(this.diceParser.recentRolls.length === 1 && this.diceParser.recentRolls[0][1] === result)
			) {
				result += `\nRolls: ${this.diceParser.recentRolls.map((x) => x[1] + '/' + x[0]).join(', ')}`;
			}
		}
		return result;
	}

	async runCommand(input: string, output: OutputFunction): Promise<Result | void> {
		try {
			let result = this.calc(input);
			if (typeof result === 'function') {
				throw new Error('Invalid input.');
			}
			output(result.toString());
			this.addToHistory(input, result.toString() + '\n');
			return Promise.resolve();
		} catch (e: any) {}

		let command = parseCommand(input);

		let textOutput = '';

		let thisOutput = (text: string, newline: boolean = true) => {
			textOutput += text;
			if (newline) {
				textOutput += '\n';
			}
			output(text);
		};

		if (command.command.trim() === '') {
			this.addToHistory(input, '');
			return Promise.resolve();
		} else if (command.command.trim() === 'clear') {
			this.history = [];
			// this.addToHistory(input, '');
			return Promise.resolve();
		} else if (command.command.trim() === 'commands') {
			Object.values(this.commands).forEach((command) => thisOutput(command.command));
			this.addToHistory(input, textOutput);
			return Promise.resolve();
		}

		if (!(command.command in this.commands)) {
			const matches = this.searchCommands(command.command);
			if (matches.length === 0) {
				thisOutput(`Command "${command.command}" not found.`);
			} else if (matches.length === 1) {
				thisOutput(`Command "${command.command}" not found. Did you mean "${matches[0].command}"?`);
			} else {
				thisOutput(`Command "${command.command}" not found. Did you mean one of these?`);
				matches.forEach((match) => thisOutput(match.command));
			}
			this.addToHistory(input, textOutput);
			return Promise.resolve(Result.Failure);
		}

		if ('help' in command.flags) {
			thisOutput(this.commands[command.command].description);
			thisOutput(this.commands[command.command].usage);
			this.addToHistory(input, textOutput);
			return Promise.resolve();
		}

		let result = await this.executeCommand(command.command, command, thisOutput);

		this.addToHistory(input, textOutput);
		return Promise.resolve(result);
	}

	asText(prompt: string = '> '): string[] {
		// console.log(this.history.map(([input, output]) => `${prompt}${input}\n${output}`).join('\n'));
		let text = this.history.map(([input, output]) => `${prompt}${input}\n${output}\n`);
		return text;
	}

	async complete(input: string): Promise<string[]> {
		let command = parseCommand(input, false); // TODO: Should be true
		if (command.command.trim() === '') {
			return [];
		}
		if (command.command in this.commands) {
			if (command.args.length === 0) {
				return [];
			}
			try {
				return await this.commands[command.command].complete(command, this.fileSystem);
			} catch (e: any) {
				return [];
			}
		} else {
			return Object.keys(this.commands)
				.filter((c) => c.startsWith(command.command))
				.map((c) => c.slice(command.command.length) + ' ');
		}
	}
}
