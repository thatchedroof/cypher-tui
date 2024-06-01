import { Command, Result, type OutputFunction } from '$lib/Command.js';
import type { CommandArgs } from '$lib/util.js';
import { resolveResource } from '@tauri-apps/api/path';
import { readTextFile } from '@tauri-apps/api/fs';
import type { FileSystem } from '$lib/FileSystem.js';

export class TypeCommand extends Command {
	resourcePath = resolveResource('data/types.json');
	types: any = {};

	constructor() {
		super(
			'type',
			'Returns a type (warrior, adept, etc.) and its abilities.',
			'type <type> <tier?>'
		);
	}

	async init() {
		if (Object.keys(this.types).length === 0) {
			const contents = await readTextFile(await this.resourcePath);
			this.types = JSON.parse(contents);
		}
	}

	async run(args: CommandArgs, output: OutputFunction) {
		if (args.args.length === 0) {
			output('No type specified.');
			return Result.Failure;
		}

		let type = args.args[0].trim();
		const tier = args.args[1] ? args.args[1].trim() : null;

		if (!this.types[type]) {
			// Find the closest match
			const types = Object.keys(this.types).map((a) => [a, a.toLowerCase()] as const);
			const matches = types.filter(([k, a]) => a.includes(type.toLowerCase()));
			if (matches.length === 0) {
				output('Type not found.');
				return Result.Failure;
			} else if (matches.length === 1) {
				type = matches[0][0];
			} else {
				output('');
				output(
					`Type not found. Did you mean one of these?\n\n${matches.map(([k, a]) => `[[[${k}|type {} ${tier ?? ''}]]]`).join('\n')}`
				);
				return Result.Failure;
			}
		}

		const typeData = this.types[type];

		if (!tier) {
			output('');
			output(Object.values(typeData).join('\n\n'));
			return Result.Success;
		}

		if (typeData[tier!]) {
			output('');
			output(typeData[tier!]);
			return Result.Success;
		}

		output(`Tier '${tier}' not found.`);
	}

	async complete(incompleteArgs: CommandArgs, fileSystem: FileSystem) {
		let type = incompleteArgs.args[0];

		if (type.endsWith('{incomplete}')) {
			type = type.slice(0, -11);
		}

		const types = Object.keys(this.types);

		const matches = types.filter((a) => a.toLowerCase().startsWith(type.toLowerCase()));

		return matches.map((m) => [m.slice(0, type.length), m.slice(type.length)] as [string, string]);
	}
}
