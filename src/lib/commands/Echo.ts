import { Command, Result, type OutputFunction } from '$lib/Command.js';
import type { CommandArgs } from '$lib/util.js';

export class EchoCommand extends Command {
	constructor() {
		super('echo', 'Outputs the provided text.', 'echo <text>');
	}

	async run(args: CommandArgs, output: OutputFunction) {
		args.args.forEach((arg) => output(arg));
	}
}
