import type { CommandArgs } from './util.js';

export enum Result {
	Success,
	Failure
}

export abstract class Command {
	constructor(
		public command: string,
		public description: string,
		public usage: string
	) {}

	abstract run(args: CommandArgs, output: OutputFunction): Promise<Result | void>;
}

export type OutputFunction = (output: string, newline?: boolean) => void;
