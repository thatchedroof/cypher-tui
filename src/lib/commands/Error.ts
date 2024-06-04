import { Command, Result, type OutputFunction } from '$lib/Command.js';
import type { CommandArgs } from '$lib/util.js';

export class ErrorCommand extends Command {
	constructor() {
		super('error', 'Throws a javascript error.', 'error <message>');
	}

	init() {}

	async run(args: CommandArgs, output: OutputFunction) {
		throw new Error(args.args.join(' '));
	}

	async complete() {
		return [];
	}
}
