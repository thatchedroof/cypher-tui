import { Command, Result, type OutputFunction } from '$lib/Command.js';
import type { CommandArgs } from '$lib/util.js';
import { resolveResource } from '@tauri-apps/api/path';
import { readTextFile } from '@tauri-apps/api/fs';

export class AbilityCommand extends Command {
	resourcePath = resolveResource('data/abilities.json');
	abilities: any = {};

	constructor() {
		super('ability', 'Searches for an ability in the database.', 'ability <ability>');
	}

	async loadAbilities() {
		const contents = await readTextFile(await this.resourcePath);
		this.abilities = JSON.parse(contents);
	}

	async run(args: CommandArgs, output: OutputFunction) {
		if (args.args.length === 0) {
			output('No ability specified.');
			return Result.Failure;
		}

		if (Object.keys(this.abilities).length === 0) {
			await this.loadAbilities();
		}

		const ability = args.args.join(' ').trim();

		if (this.abilities[ability]) {
			output('');
			output(ability);
			output(this.abilities[ability]);
			return Result.Success;
		} else {
			// Find the closest match
			const abilities = Object.keys(this.abilities).map((a) => [a, a.toLowerCase()] as const);
			const matches = abilities.filter(([k, a]) => a.includes(ability.toLowerCase()));
			if (matches.length === 0) {
				output('Ability not found.');
				return Result.Failure;
			} else if (matches.length === 1) {
				output('');
				output(matches[0][0]);
				output(this.abilities[matches[0][0]]);
				return Result.Success;
			} else {
				output(
					`Ability not found. Did you mean one of these?\n${matches.map(([k, a]) => `[[[${k}|ability ${k}]]]`).join('\n')}`
				);
				return Result.Failure;
			}
		}
	}
}
