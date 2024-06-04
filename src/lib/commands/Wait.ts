import { Command, Result, type OutputFunction } from '$lib/Command.js';
import type { CommandArgs } from '$lib/util.js';

export class WaitCommand extends Command {
	constructor() {
		super('wait', 'Waits for a specified amount of time.', 'wait <time>');
	}

	init() {}

	async run(args: CommandArgs, output: OutputFunction) {
		const time = parseInt(args.args[0]);
		if (isNaN(time)) {
			output('Invalid time.');
			return Result.Failure;
		}

		await new Promise((resolve) => setTimeout(resolve, time));
		return Result.Success;
	}

	async complete() {
		return [];
	}
}
