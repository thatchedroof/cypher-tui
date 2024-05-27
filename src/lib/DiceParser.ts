import * as m from 'mathjs';
import { create, all } from 'mathjs';
import seedrandom from 'seedrandom';

export class DiceParser {
	math: m.MathJsInstance;
	evaluate: {
		(expr: m.MathExpression, scope?: object | undefined): any;
		(expr: m.MathExpression[], scope?: object | undefined): any[];
	};
	scope: object = {};
	seed: string | undefined;
	rng: seedrandom.PRNG;
	recentRolls: [string, number][] = [];

	constructor(seed?: string) {
		this.math = create(all);
		this.evaluate = this.math.evaluate;
		this.seed = seed;
		this.rng = seedrandom(this.seed);
		const rng = this.rng;

		const self = this;

		this.math.import(
			{
				import: function () {
					throw new Error('Function import is disabled');
				},
				createUnit: function () {
					throw new Error('Function createUnit is disabled');
				},
				evaluate: function () {
					throw new Error('Function evaluate is disabled');
				},
				parse: function () {
					throw new Error('Function parse is disabled');
				},
				simplify: function () {
					throw new Error('Function simplify is disabled');
				},
				derivative: function () {
					throw new Error('Function derivative is disabled');
				},
				roll: function (sides: number, count: number = 1) {
					const rolls = [];

					for (let i = 0; i < count; i++) {
						rolls.push(Math.floor(rng() * sides) + 1);
					}

					let total = rolls.reduce((a, b) => a + b, 0);

					for (let roll of rolls) {
						self.recentRolls.push([`d${sides}`, roll]);
					}

					return total;
				}
			},
			{ override: true }
		);
	}

	static replace(str: string): string {
		return str.replace(/\b(\d*)[dD](\d+)\b/g, (_, count, sides) => {
			return `roll(${sides},${count || 1})`;
		});
	}

	static replaceRollFunction(str: string): string {
		return str.replace(/roll\(\s*(\d+)\s*(?:,\s*(\d+))?\s*\)/g, (_, sides, count) => {
			if (count) {
				return `${count}d${sides}`;
			} else {
				return `d${sides}`;
			}
		});
	}

	static possibilities(str: string): number {
		let possibilities = 1;

		const replaced = DiceParser.replaceRollFunction(str);

		replaced.replace(/\b(\d*)[dD](\d+)\b/g, (match, count, sides) => {
			possibilities *= Math.pow(parseInt(sides), parseInt(count) || 1);
			return '';
		});

		return possibilities;
	}

	static replaceDiceWithVariables(str: string): [string, { [key: string]: number }] {
		let replaced = DiceParser.replaceRollFunction(str);

		const variables: { [key: string]: number } = {};

		let matchCount = 0;
		console.log(replaced);

		replaced = replaced.replace(/\b(\d*)[dD](\d+)\b/g, (match, count, sides) => {
			// const variableNames = [];

			// for (let i = 0; i < (parseInt(count) ?? 1); i++) {
			//     const variableName = `dice${matchCount++}_sides${sides}`;
			//     variableNames.push(variableName);
			//     variables[variableName] = 1;
			// }

			// const variableString = '(' + variableNames.join('+') + ')';

			const variableString = `dice${matchCount++}_sides${sides}_count${count ?? 1}`;

			variables[variableString] = 1;

			return variableString;
		});

		return [replaced, variables];
	}

	static dieToWeightedBins(sides: number, count: number): { [key: number]: number } {
		const outcomes: { [key: number]: number } = {};

		const rollDice = (remainingRolls: number, currentSum: number) => {
			if (remainingRolls === 0) {
				if (!outcomes[currentSum]) {
					outcomes[currentSum] = 0;
				}
				outcomes[currentSum]++;
			} else {
				for (let side = 1; side <= sides; side++) {
					rollDice(remainingRolls - 1, currentSum + side);
				}
			}
		};

		rollDice(count, 0);

		return outcomes;
	}

	static getAllPermutations(arrays: number[][]): number[][] {
		let result: number[][] = [[]]; // Start with an array containing an empty array

		for (let i = 0; i < arrays.length; i++) {
			const currentArray = arrays[i];
			const tempResult: number[][] = [];

			for (let j = 0; j < result.length; j++) {
				for (let k = 0; k < currentArray.length; k++) {
					tempResult.push([...result[j], currentArray[k]]);
				}
			}

			result = tempResult; // Update the result with the latest combinations
		}

		return result;
	}

	// allPossibilities(str: string): { [key: number]: number; } {
	//     const [replaced, variables] = DiceParser.replaceDiceWithVariables(str);

	//     let originalScope = { ...this.scope };

	//     const diceVariables = Object.keys(variables).map((key) => {
	//         const sides = parseInt(RegExp(/sides(\d+)/).exec(key)?.[1] ?? '0');
	//         const count = parseInt(RegExp(/count(\d+)/).exec(key)?.[1] ?? '0');
	//         return {
	//             key,
	//             sides,
	//             count
	//         };
	//     });

	//     const weightedBins = diceVariables.map((variable) => {
	//         return DiceParser.dieToWeightedBins(variable.sides, variable.count);
	//     });

	//     const possibleFaces = weightedBins.map((weightedBin) => {
	//         return Object.keys(weightedBin).map((key) => parseInt(key));
	//     });

	//     const allPossibleFaces = DiceParser.getAllPermutations(possibleFaces);

	//     for (const faces of allPossibleFaces) {
	//         console.log(this.parse());
	//     }

	//     return {};

	// }

	parse(str: string, scope?: object): any {
		this.recentRolls = [];
		return this.evaluate(DiceParser.replace(str), scope ?? this.scope);
	}
}
