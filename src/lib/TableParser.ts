import RollTableVisitor from './parser/RollTableVisitor';
import {
	BlockPossibilityTextContext,
	ParentheticalContext,
	PossibilityContext,
	QuotedTextContext,
	RollPossibilityContext,
	RollPossibilityTextContext,
	TextContext,
	type BlockPossibilityContext,
	type ProgContext
} from './parser/RollTableParser.js';
import RollTableLexer from './parser/RollTableLexer.js';
import RollTableParser from './parser/RollTableParser.js';
import { CharStream, CommonTokenStream } from 'antlr4';
import { readTextFile } from '@tauri-apps/api/fs';
import { string } from 'mathjs';
import { runAST } from './TableRunner.js';
import { DiceParser } from './DiceParser.js';

export type AST = string | PossibilitiesAST | RollTableAST | QuotedText;

export type RollTableAST = (string | QuotedText | PossibilitiesAST)[];

export type PossibilitiesAST = {
	roll?: string;
	possibilities: {
		parenthetical?: string;
		text: RollTableAST;
	}[];
};

export type QuotedText = {
	quoted: string;
};

export class CustomVisitor extends RollTableVisitor<AST> {
	/**
	 * Visit a parse tree produced by `RollTableParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg: (ctx: ProgContext) => RollTableAST = (ctx) => {
		let out: RollTableAST = [''];

		if (!ctx.children) {
			return out;
		}

		for (const child of ctx.children) {
			if (child instanceof PossibilityContext) {
				addToRollTable(out, this.visitPossibility(child));
			} else if (child instanceof TextContext) {
				addToRollTable(out, this.visitText(child));
			}
		}

		return out;
	};
	/**
	 * Visit a parse tree produced by `RollTableParser.possibility`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPossibility: (ctx: PossibilityContext) => PossibilitiesAST = (ctx) => {
		if (ctx.rollPossibility()) {
			return this.visitRollPossibility(ctx.rollPossibility());
		} else {
			return this.visitBlockPossibility(ctx.blockPossibility());
		}
	};
	/**
	 * Visit a parse tree produced by `RollTableParser.rollPossibility`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRollPossibility: (ctx: RollPossibilityContext) => PossibilitiesAST = (ctx) => {
		let out: PossibilitiesAST = {
			possibilities: [
				{
					text: []
				}
			]
		};

		if (!ctx.children) {
			return out;
		}

		for (const child of ctx.children) {
			let text = child.getText();

			if (text) {
				if (text === '{' || text === '}') {
					continue;
				} else if (text === '|') {
					out.possibilities.push({
						text: []
					});
				} else if (child instanceof ParentheticalContext) {
					out.possibilities[out.possibilities.length - 1].parenthetical =
						this.visitParenthetical(child);
				} else if (text === ':') {
					out.roll = out.possibilities[out.possibilities.length - 1].text.pop() as string;
				} else if (child instanceof RollPossibilityTextContext) {
					out.possibilities[out.possibilities.length - 1].text.push(
						...this.visitRollPossibilityText(child)
					);
				}
			}
		}

		return out;
	};
	/**
	 * Visit a parse tree produced by `RollTableParser.blockPossibility`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockPossibility: (ctx: BlockPossibilityContext) => PossibilitiesAST = (ctx) => {
		let out: PossibilitiesAST = {
			possibilities: [
				{
					text: []
				}
			]
		};

		if (!ctx.children) {
			return out;
		}

		for (const child of ctx.children) {
			let text = child.getText();

			if (text) {
				if (text.trim() === '---') {
					continue;
				} else if (text === '\n' || text === '\r\n') {
					let last =
						out.possibilities[out.possibilities.length - 1].text[
							out.possibilities[out.possibilities.length - 1].text.length - 1
						];
					if (typeof last === 'string' && last.trim() !== '') {
						out.possibilities.push({
							text: []
						});
					}
				} else if (child instanceof ParentheticalContext) {
					out.possibilities[out.possibilities.length - 1].parenthetical =
						this.visitParenthetical(child);
				} else if (text === ':') {
					out.roll = out.possibilities[out.possibilities.length - 1].text.pop() as string;
				} else if (child instanceof BlockPossibilityTextContext) {
					out.possibilities[out.possibilities.length - 1].text.push(
						...this.visitBlockPossibilityText(child)
					);
				}
			}
		}

		if (out.possibilities[out.possibilities.length - 1].text.length === 0) {
			out.possibilities.pop();
		}

		// TODO: Should make sure last \n isn't deleted

		return out;
	};
	/**
	 * Visit a parse tree produced by `RollTableParser.parenthetical`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthetical: (ctx: ParentheticalContext) => string = (ctx) => {
		let out = '';

		if (!ctx.children) {
			return out;
		}

		for (const child of ctx.children) {
			let text = child.getText();

			if (text) {
				out += mapEscapedChars(text);
			}
		}

		return out.substring(1, out.length - 1);
	};
	/**
	 * Visit a parse tree produced by `RollTableParser.text`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitText: (ctx: TextContext) => string = (ctx) => {
		let out = '';

		if (!ctx.children) {
			return out;
		}

		for (const child of ctx.children) {
			let text = child.getText();

			if (text) {
				out += mapEscapedChars(text);
			}
		}

		return out;
	};
	/**
	 * Visit a parse tree produced by `RollTableParser.rollPossibilityText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRollPossibilityText: (ctx: RollPossibilityTextContext) => RollTableAST = (ctx) => {
		let out: RollTableAST = [''];

		if (!ctx.children) {
			return out;
		}

		for (const child of ctx.children) {
			if (child instanceof QuotedTextContext) {
				addToRollTable(out, this.visitQuotedText(child));
			} else if (child instanceof RollPossibilityContext) {
				out.push(this.visitRollPossibility(child));
			} else {
				let text = child.getText();

				if (text) {
					if (typeof out[out.length - 1] === 'string') {
						addToRollTable(out, mapEscapedChars(text));
					} else {
						out.push(mapEscapedChars(text));
					}
				}
			}
		}

		return out;
	};
	/**
	 * Visit a parse tree produced by `RollTableParser.blockPossibilityText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockPossibilityText: (ctx: BlockPossibilityTextContext) => RollTableAST = (ctx) => {
		let out: RollTableAST = [];

		if (!ctx.children) {
			return out;
		}

		for (const child of ctx.children) {
			if (child instanceof QuotedTextContext) {
				addToRollTable(out, this.visitQuotedText(child));
			} else if (child instanceof RollPossibilityContext) {
				out.push(this.visitRollPossibility(child));
			} else {
				let text = child.getText();

				if (text) {
					addToRollTable(out, mapEscapedChars(text));
				}
			}
		}

		return out;
	};
	/**
	 * Visit a parse tree produced by `RollTableParser.quotedText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuotedText: (ctx: QuotedTextContext) => QuotedText = (ctx) => {
		let out = '';

		if (!ctx.children) {
			return {
				quoted: out
			};
		}

		for (const child of ctx.children) {
			let text = child.getText();

			if (text) {
				out += mapEscapedChars(text);
			}
		}

		return {
			quoted: out.substring(1, out.length - 1)
		} as QuotedText;
	};
}

function addToRollTable(
	rollTable: RollTableAST,
	input: string | PossibilitiesAST | RollTableAST | QuotedText
) {
	if (typeof input === 'string') {
		if (rollTable.length > 0 && typeof rollTable[rollTable.length - 1] === 'string') {
			rollTable[rollTable.length - 1] += input;
		} else {
			rollTable.push(input);
		}
	} else if (Array.isArray(input)) {
		rollTable.push(...input);
	} else {
		rollTable.push(input);
	}
}

function mapEscapedChars(text: string) {
	switch (text) {
		case '\\\\':
			return '\\';
		case '\\{':
			return '{';
		case '\\}':
			return '}';
		case '\\-':
			return '-';
		case '\\"':
			return '"';
		case '\\|':
			return '|';
		case '\\:':
			return ':';
		case '\\(':
			return '(';
		case '\\)':
			return ')';
		case '\\n':
			return '\n';
		case '\\\n':
			return '\n';
		default:
			return text;
	}
}

// const input = readTextFile('test.txt');

// const chars = new CharStream(`Hello { world | friends }.
// This is \\{ how you write | a roll \\}.

// ---
// (50%) A strong warrior.

// (25%) A mighty fighter.\
// He is tall.

// (25%) A { blue | " \\"red\\" \\n red " } mage.
// ---

// You { (2) need to go.
// 	| (1) need to stay{ , now | }.
// }

// ---
// d6:
// (<3) You're right.
// (3-4) You're wrong. No: I am.
// (>=5) "You're evil.
// Yes."
// ---`);
// const lexer = new RollTableLexer(chars);
// /// @ts-ignore
// const tokens = new CommonTokenStream(lexer);
// /// @ts-ignore
// const parser = new RollTableParser(tokens);
// const tree = parser.prog();

// const visitor = new CustomVisitor();
// export const ast = visitor.visit(tree);
