import { Command, Result, type OutputFunction } from '$lib/Command.js';
import type { CommandArgs } from '$lib/util.js';
import { resolveResource } from '@tauri-apps/api/path';
import { readTextFile } from '@tauri-apps/api/fs';
import type { FileSystem } from '$lib/FileSystem.js';

export class FlavorCommand extends Command {
	resourcePath = resolveResource('data/flavors.json');
	flavors: any = {};

	constructor() {
		super(
			'flavor',
			'Returns a flavor (stealth, magic, etc.) and its abilities.',
			'flavor <flavor> <tier?>'
		);
	}

	async init() {
		if (Object.keys(this.flavors).length === 0) {
			const contents = await readTextFile(await this.resourcePath);
			this.flavors = JSON.parse(contents);
		}
	}

	async run(args: CommandArgs, output: OutputFunction) {
		if (args.args.length === 0) {
			output('No flavor specified.');
			return Result.Failure;
		}

		let flavor = args.args[0].trim();
		const tier = args.args[1] ? args.args[1].trim() : null;

		if (!this.flavors[flavor]) {
			// Find the closest match
			const flavors = Object.keys(this.flavors).map((a) => [a, a.toLowerCase()] as const);
			const matches = flavors.filter(([k, a]) => a.includes(flavor.toLowerCase()));
			if (matches.length === 0) {
				output('Flavor not found.');
				return Result.Failure;
			} else if (matches.length === 1) {
				flavor = matches[0][0];
			} else {
				output('');
				output(
					`Flavor not found. Did you mean one of these?\n\n${matches.map(([k, a]) => `[[[${k}|flavor {} ${tier ?? ''}]]]`).join('\n')}`
				);
				return Result.Failure;
			}
		}

		const flavorData = this.flavors[flavor];

		if (!tier) {
			output('');
			output(Object.values(flavorData).join('\n\n'));
			return Result.Success;
		}

		if (flavorData[tier!]) {
			output('');
			output(flavorData[tier!]);
			return Result.Success;
		}

		output(`Tier '${tier}' not found.`);
	}

	async complete(incompleteArgs: CommandArgs, fileSystem: FileSystem) {
		let flavor = incompleteArgs.args[0];

		if (flavor.endsWith('{incomplete}')) {
			flavor = flavor.slice(0, -11);
		}

		const flavors = Object.keys(this.flavors);

		const matches = flavors.filter((a) => a.toLowerCase().startsWith(flavor.toLowerCase()));

		return matches.map(
			(m) => [m.slice(0, flavor.length), m.slice(flavor.length)] as [string, string]
		);
	}
}
