import { Command, Result, type OutputFunction } from '$lib/Command.js';
import type { CommandArgs } from '$lib/util.js';

export class HelpCommand extends Command {
	constructor() {
		super('help', 'Displays general help information.', 'help');
	}

	init() {}

	async run(args: CommandArgs, output: OutputFunction) {
		output('');
		output('Cypher-tui is a text-based user interface for the Cypher roleplaying system.');
		output('');
		output('Usage:');
		output("Type in an expression like '[[[2 + 2d6 + d20]]]' to get a roll result.");
		output("See the list of available commands by typing '[[[commands]]]'.");
		output("Get more information about a specific command by typing '<command> --help'.");
		output('');
		output('By thatchedroof :)');
		return Result.Success;
	}

	async complete() {
		return [];
	}
}
