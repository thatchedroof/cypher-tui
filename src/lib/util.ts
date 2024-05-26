export interface CommandArgs {
	command: string;
	args: string[];
	flags: { [key: string]: string | boolean };
}

export function parseCommand(input: string): CommandArgs {
	const args: string[] = [];
	const flags: { [key: string]: string | boolean } = {};
	let command = '';
	let current = '';
	let inQuotes = false;
	let quoteChar = '';
	let isFlag = false;
	let flagName = '';

	for (let i = 0; i < input.length; i++) {
		const char = input[i];

		if (inQuotes) {
			if (char === quoteChar) {
				inQuotes = false;
				if (isFlag) {
					flags[flagName] = current;
					isFlag = false;
					flagName = '';
				} else {
					args.push(current);
				}
				current = '';
			} else {
				current += char;
			}
		} else {
			if (char === '"' || char === "'") {
				inQuotes = true;
				quoteChar = char;
			} else if (char === ' ') {
				if (current) {
					if (isFlag) {
						flags[flagName] = current;
						isFlag = false;
						flagName = '';
					} else {
						args.push(current);
					}
					current = '';
				}
			} else if (char === '-') {
				if (current) {
					args.push(current);
					current = '';
				}
				if (input[i + 1] === '-') {
					i++;
					const flagEnd = input.indexOf(' ', i + 1);
					flagName = input.slice(i + 1, flagEnd !== -1 ? flagEnd : undefined);
					flags[flagName] = true;
					i += flagName.length;
					current = '';
					isFlag = false;
				} else {
					isFlag = true;
				}
			} else {
				current += char;
			}
		}
	}

	if (current) {
		if (isFlag) {
			flags[flagName] = current;
		} else {
			args.push(current);
		}
	}

	if (args.length > 0) {
		command = args.shift()!;
	}

	return { command, args, flags };
}
