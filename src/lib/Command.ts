import type { DiceParser } from './DiceParser.js';
import type { CommandArgs } from './util.js';
import { FileSystem } from './FileSystem';
import type { CustomVisitor } from './TableParser.js';
import type { TUI } from './TUI.js';

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

	abstract init(fileSystem: FileSystem): void;

	abstract run(args: CommandArgs, output: OutputFunction, tui: TUI): Promise<Result | void>;

	abstract complete(
		incompleteArgs: CommandArgs,
		fileSystem: FileSystem
	): Promise<string[] | [string, string][]>;
}

export type OutputFunction = (output: string, newline?: boolean) => void;
