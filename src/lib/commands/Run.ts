import { Command, Result, type OutputFunction } from '$lib/Command.js';
import type { DiceParser } from '$lib/DiceParser.js';
import type { FileSystem } from '$lib/FileSystem.js';
import RollTableLexer from '$lib/parser/RollTableLexer.js';
import { CustomVisitor, type RollTableAST } from '$lib/TableParser.js';
import { runAST } from '$lib/TableRunner.js';
import { CharStream, CommonTokenStream } from 'antlr4';
import type { CommandArgs } from '$lib/util.js';
import RollTableParser from '$lib/parser/RollTableParser.js';
import type { TUI } from '$lib/TUI.js';

export class RunCommand extends Command {
	constructor() {
		super('run', 'Runs a roll table.', 'run <path>');
	}

	init() {}

	async run(args: CommandArgs, output: OutputFunction, tui: TUI) {
		const path = args.args[0];
		if (!path) {
			output('No path provided.');
			return Result.Failure;
		}

		const table = await tui.fileSystem.read(path);
		if (!table) {
			output('Table not found.');
			return Result.Failure;
		}

		output('');

		try {
			const chars = new CharStream(table);
			const lexer = new RollTableLexer(chars);
			/// @ts-ignore
			const tokens = new CommonTokenStream(lexer);
			/// @ts-ignore
			const parser = new RollTableParser(tokens);
			const tree = parser.prog();

			const visitor = new CustomVisitor();
			const ast = visitor.visit(tree);

			output(runAST(ast as RollTableAST, tui.diceParser).trim());
		} catch (e) {
			output(`${e}`);
			return Result.Failure;
		}

		return Result.Success;
	}

	async complete(incompleteArgs: CommandArgs, fileSystem: FileSystem) {
		let path = incompleteArgs.args[0].trim();

		if (path.endsWith('{incomplete}')) {
			path = path.slice(0, -11);
		}

		let last = path.split('\\').pop() ?? '';

		path = path.split('\\').slice(0, -1).join('\\');

		let currentPathLength = fileSystem.currentPath.length;

		let files = (await fileSystem.listFiles(path)).map((file) => file.slice(currentPathLength));
		files = files.filter((file) => file.toLowerCase().startsWith(last.toLowerCase()));

		return files.map((file) => file.slice(last.length));
	}
}
