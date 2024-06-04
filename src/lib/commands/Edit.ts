import { Command, Result, type OutputFunction } from '$lib/Command.js';
import type { FileSystem } from '$lib/FileSystem.js';
import type { CommandArgs } from '$lib/util.js';
import type { TUI } from '$lib/TUI.js';
import { tick } from 'svelte';
import { data } from '$lib/store';

export class EditCommand extends Command {
	constructor() {
		super('edit', 'Opens the text editor for a file.', 'edit <path>');
	}

	init() {}

	async run(args: CommandArgs, output: OutputFunction, tui: TUI) {
		const path = args.args[0];

		console.log('path', path);

		if (path == null) {
			output('No path provided.');
			return Result.Failure;
		}

		const text = await tui.fileSystem.read(path);

		console.log('text', text);

		if (text == null) {
			output('File not found.');
			return Result.Failure;
		}

		data.set({
			editMode: true,
			editFilePath: path,
			editContent: text
		});

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
