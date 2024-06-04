import { Command, Result, type OutputFunction } from '$lib/Command.js';
import type { FileSystem } from '$lib/FileSystem.js';
import type { CommandArgs } from '$lib/util.js';
import type { TUI } from '$lib/TUI.js';
import { tick } from 'svelte';

export class TouchCommand extends Command {
	constructor() {
		super('touch', 'Creates a file.', 'touch <path>');
	}

	init() {}

	async run(args: CommandArgs, output: OutputFunction, tui: TUI) {
		const path = args.args[0];
		output('');

		if (await tui.fileSystem.exists(path)) {
			output(`File ${path} already exists.`);
			return Result.Failure;
		}

		try {
			await tui.fileSystem.createFile(path);
		} catch (e: any) {
			output(`${e}`);
			return Result.Failure;
		}

		output(`Created file ${path}.`);
		return Result.Success;
	}

	async complete(incompleteArgs: CommandArgs, fileSystem: FileSystem) {
		return [];
	}
}
