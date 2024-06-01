import { Command, Result, type OutputFunction } from '$lib/Command.js';
import type { CommandArgs } from '$lib/util.js';
import { resolveResource } from '@tauri-apps/api/path';
import { readTextFile } from '@tauri-apps/api/fs';
import type { FileSystem } from '$lib/FileSystem.js';

export class DifficultyCommand extends Command {
	resourcePath = resolveResource('data/difficultys.json');
	difficultys: any = {};

	constructor() {
		super('difficulty', 'Returns a difficulty description.', 'difficulty <difficulty>');
	}

	async init() {
		if (Object.keys(this.difficultys).length === 0) {
			const contents = await readTextFile(await this.resourcePath);
			this.difficultys = JSON.parse(contents);
		}
	}

	async run(args: CommandArgs, output: OutputFunction) {
		if (args.args.length === 0) {
			output('No difficulty specified.');
			return Result.Failure;
		}

		let difficulty = args.args[0].trim();
		const tier = args.args[1] ? args.args[1].trim() : null;

		if (!this.difficultys[difficulty]) {
			// Find the closest match
			const difficultys = Object.keys(this.difficultys).map((a) => [a, a.toLowerCase()] as const);
			const matches = difficultys.filter(([k, a]) => a.includes(difficulty.toLowerCase()));
			if (matches.length === 0) {
				output('Difficulty not found.');
				return Result.Failure;
			} else if (matches.length === 1) {
				difficulty = matches[0][0];
			} else {
				output('');
				output(
					`Difficulty not found. Did you mean one of these?\n\n${matches.map(([k, a]) => `[[[${k}|difficulty {} ${tier ?? ''}]]]`).join('\n')}`
				);
				return Result.Failure;
			}
		}

		const difficultyData = this.difficultys[difficulty];

		if (!tier) {
			output('');
			output(Object.values(difficultyData).join('\n\n'));
			return Result.Success;
		}

		if (difficultyData[tier!]) {
			output('');
			output(difficultyData[tier!]);
			return Result.Success;
		}

		output(`Tier '${tier}' not found.`);
	}

	async complete(incompleteArgs: CommandArgs, fileSystem: FileSystem) {
		let difficulty = incompleteArgs.args[0];

		if (difficulty.endsWith('{incomplete}')) {
			difficulty = difficulty.slice(0, -11);
		}

		const difficultys = Object.keys(this.difficultys);

		const matches = difficultys.filter((a) => a.toLowerCase().startsWith(difficulty.toLowerCase()));

		return matches.map(
			(m) => [m.slice(0, difficulty.length), m.slice(difficulty.length)] as [string, string]
		);
	}
}
