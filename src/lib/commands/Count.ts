import { Command, Result, type OutputFunction } from '$lib/Command.js';
import type { CommandArgs } from '$lib/util.js';

export class CountCommand extends Command {
	constructor() {
		super('count', 'Counts up to a number, waiting between each.', 'count <number>');
	}

	init() {}

	async run(args: CommandArgs, output: OutputFunction) {
		const count = parseInt(args.args[0]);
		if (isNaN(count)) {
			output('Invalid number.');
			return Result.Failure;
		}

		for (let i = 1; i <= count; i++) {
			output(i.toString());
			await new Promise((resolve) => setTimeout(resolve, 1000));
		}

		return Result.Success;
	}

	async complete() {
		return [];
	}
}
