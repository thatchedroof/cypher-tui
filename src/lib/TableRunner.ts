import type { DiceParser } from './DiceParser.js';
import type { PossibilitiesAST, RollTableAST } from './TableParser.js';

export function runAST(ast: RollTableAST, diceParser: DiceParser): string {
	let out = '';
	for (const item of ast) {
		if (typeof item === 'string') {
			out += item;
		} else if ('quoted' in item) {
			out += runAST(item.quoted, diceParser).slice(1, -1);
		} else {
			out += runPossibility(item, diceParser).trim();
			if (item.block) {
				out += '\n';
			}
		}
	}

	return out;
}

function runPossibility(possibility: PossibilitiesAST, diceParser: DiceParser): string {
	if (possibility.possibilities.length === 1) {
		console.log(possibility);
		try {
			return diceParser.parse(runAST(possibility.possibilities[0].text, diceParser)).toString();
		} catch (e) {}
	}

	if ('roll' in possibility) {
		let rollResult = diceParser.parse(possibility.roll!);

		if (typeof rollResult !== 'number') {
			throw new Error('Roll result was not a number.');
		}

		for (const { parenthetical, text } of possibility.possibilities) {
			if (!parenthetical) {
				throw new Error('Possibility missing condition.');
			}

			let condition = parseCondition(parenthetical);

			if (condition(rollResult)) {
				return runAST(text, diceParser);
			}
		}

		throw new Error('No possibilities matched by roll.');
	}

	if (possibility.possibilities.every(({ parenthetical }) => parenthetical == null)) {
		return runAST(getRandomElement(possibility.possibilities.map(({ text }) => text)), diceParser);
	}

	if (possibility.possibilities.every(({ parenthetical }) => parenthetical != null)) {
		let weights = parseWeights(
			possibility.possibilities.map(({ parenthetical }) => parenthetical!)
		);
		let totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
		let randomWeight = Math.random() * totalWeight;
		let weightSum = 0;

		for (let i = 0; i < weights.length; i++) {
			weightSum += weights[i];
			if (randomWeight < weightSum) {
				return runAST(possibility.possibilities[i].text, diceParser);
			}
		}
	}

	throw new Error('Some possibilities have weights while others do not.');
}

function parseCondition(condition: string): (x: number) => boolean {
	let trimmedCondition = condition.trim();

	if (trimmedCondition.includes(',')) {
		let conditions = trimmedCondition.split(',');
		let parsedConditions = conditions.map(parseCondition);
		return (x) => parsedConditions.some((trimmedCondition) => trimmedCondition(x));
	}

	if (trimmedCondition.includes('&')) {
		let conditions = trimmedCondition.split('&');
		let parsedConditions = conditions.map(parseCondition);
		return (x) => parsedConditions.every((trimmedCondition) => trimmedCondition(x));
	}

	if (trimmedCondition.includes('-')) {
		let [start, end] = trimmedCondition.split('-').map(Number);
		return (x) => x >= start && x <= end;
	}

	if (trimmedCondition.startsWith('<=')) {
		let value = Number(trimmedCondition.slice(2));
		return (x) => x <= value;
	}

	if (trimmedCondition.startsWith('<')) {
		let value = Number(trimmedCondition.slice(1));
		return (x) => x < value;
	}

	if (trimmedCondition.startsWith('>=')) {
		let value = Number(trimmedCondition.slice(2));
		return (x) => x >= value;
	}

	if (trimmedCondition.startsWith('>')) {
		let value = Number(trimmedCondition.slice(1));
		return (x) => x > value;
	}

	let value = Number(trimmedCondition);
	return (x) => x === value;
}

function parseWeights(weights: string[]): number[] {
	let percentWeights = weights.filter((weight) => weight.includes('%'));
	let percentWeightSum = percentWeights.reduce(
		(sum, weight) => sum + Number(weight.slice(0, -1)),
		0
	);

	let proportionalWeights = weights.filter((weight) => !weight.includes('%'));
	let proportionalWeightSum = proportionalWeights.reduce((sum, weight) => sum + Number(weight), 0);

	if (percentWeightSum > 100) {
		throw new Error('Sum of percent weights exceeds 100%.');
	}

	if (percentWeightSum < 100 && proportionalWeightSum === 0) {
		throw new Error(
			'Sum of percent weights is less than 100% and no proportional weights are present.'
		);
	}

	if (percentWeightSum === 100 && proportionalWeightSum > 0) {
		throw new Error('Sum of percent weights is 100% but proportional weights are present.');
	}

	if (percentWeightSum === 0) {
		return weights.map((weight) => {
			if (weight.includes('%')) {
				throw new Error('Percent weight present when sum of percent weights is 0%.');
			} else {
				return (Number(weight) * 100) / proportionalWeightSum;
			}
		});
	}

	return weights.map((weight) => {
		if (weight.includes('%')) {
			return Number(weight.slice(0, -1));
		} else {
			return (100 - percentWeightSum) * (Number(weight) / proportionalWeightSum);
		}
	});
}

function getRandomElement<T>(list: T[]): T {
	if (list.length === 0) {
		throw new Error('Cannot pick an element from an empty list.');
	}
	const randomIndex = Math.floor(Math.random() * list.length);
	return list[randomIndex];
}
