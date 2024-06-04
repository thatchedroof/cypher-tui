// Generated from ./src-tauri/data/RollTable.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from 'antlr4';
export default class RollTableLexer extends Lexer {
	public static readonly FULL_CHAR = 1;
	public static readonly ESCAPED_NEWLINE = 2;
	public static readonly NEWLINE_CHAR = 3;
	public static readonly NEWLINE = 4;
	public static readonly ESCAPED_BACKSLASH = 5;
	public static readonly ESCAPED_LBRACE = 6;
	public static readonly ESCAPED_RBRACE = 7;
	public static readonly ESCAPED_DASH = 8;
	public static readonly ESCAPED_QUOTE = 9;
	public static readonly ESCAPED_VBAR = 10;
	public static readonly ESCAPED_COLON = 11;
	public static readonly LBRACE = 12;
	public static readonly RBRACE = 13;
	public static readonly QUOTE = 14;
	public static readonly VBAR = 15;
	public static readonly COLON = 16;
	public static readonly DASHES = 17;
	public static readonly CHAR = 18;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = ['DEFAULT_TOKEN_CHANNEL', 'HIDDEN'];
	public static readonly literalNames: (string | null)[] = [
		null,
		null,
		null,
		"'\\n'",
		null,
		"'\\\\'",
		"'\\{'",
		"'\\}'",
		"'\\-'",
		"'\\\"'",
		"'\\|'",
		"'\\:'",
		"'{'",
		"'}'",
		"'\"'",
		"'|'",
		"':'"
	];
	public static readonly symbolicNames: (string | null)[] = [
		null,
		'FULL_CHAR',
		'ESCAPED_NEWLINE',
		'NEWLINE_CHAR',
		'NEWLINE',
		'ESCAPED_BACKSLASH',
		'ESCAPED_LBRACE',
		'ESCAPED_RBRACE',
		'ESCAPED_DASH',
		'ESCAPED_QUOTE',
		'ESCAPED_VBAR',
		'ESCAPED_COLON',
		'LBRACE',
		'RBRACE',
		'QUOTE',
		'VBAR',
		'COLON',
		'DASHES',
		'CHAR'
	];
	public static readonly modeNames: string[] = ['DEFAULT_MODE'];

	public static readonly ruleNames: string[] = [
		'FULL_CHAR',
		'ESCAPED_NEWLINE',
		'NEWLINE_CHAR',
		'NEWLINE',
		'ESCAPED_BACKSLASH',
		'ESCAPED_LBRACE',
		'ESCAPED_RBRACE',
		'ESCAPED_DASH',
		'ESCAPED_QUOTE',
		'ESCAPED_VBAR',
		'ESCAPED_COLON',
		'LBRACE',
		'RBRACE',
		'QUOTE',
		'VBAR',
		'COLON',
		'DASHES',
		'CHAR'
	];

	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(
			this,
			RollTableLexer._ATN,
			RollTableLexer.DecisionsToDFA,
			new PredictionContextCache()
		);
	}

	public get grammarFileName(): string {
		return 'RollTable.g4';
	}

	public get literalNames(): (string | null)[] {
		return RollTableLexer.literalNames;
	}
	public get symbolicNames(): (string | null)[] {
		return RollTableLexer.symbolicNames;
	}
	public get ruleNames(): string[] {
		return RollTableLexer.ruleNames;
	}

	public get serializedATN(): number[] {
		return RollTableLexer._serializedATN;
	}

	public get channelNames(): string[] {
		return RollTableLexer.channelNames;
	}

	public get modeNames(): string[] {
		return RollTableLexer.modeNames;
	}

	public static readonly _serializedATN: number[] = [
		4, 0, 18, 104, 6, -1, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2,
		6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7,
		13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
		1, 0, 1, 0, 1, 0, 1, 0, 3, 0, 48, 8, 0, 1, 1, 1, 1, 3, 1, 52, 8, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1,
		2, 1, 3, 3, 3, 60, 8, 3, 1, 3, 1, 3, 1, 4, 1, 4, 1, 4, 1, 5, 1, 5, 1, 5, 1, 6, 1, 6, 1, 6, 1, 7,
		1, 7, 1, 7, 1, 8, 1, 8, 1, 8, 1, 9, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 1, 11, 1, 11, 1, 12, 1, 12,
		1, 13, 1, 13, 1, 14, 1, 14, 1, 15, 1, 15, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 3, 16, 101,
		8, 16, 1, 17, 1, 17, 0, 0, 18, 1, 1, 3, 2, 5, 3, 7, 4, 9, 5, 11, 6, 13, 7, 15, 8, 17, 9, 19, 10,
		21, 11, 23, 12, 25, 13, 27, 14, 29, 15, 31, 16, 33, 17, 35, 18, 1, 0, 1, 6, 0, 10, 10, 13, 13,
		34, 34, 58, 58, 92, 92, 123, 125, 115, 0, 1, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 5, 1, 0, 0, 0, 0,
		7, 1, 0, 0, 0, 0, 9, 1, 0, 0, 0, 0, 11, 1, 0, 0, 0, 0, 13, 1, 0, 0, 0, 0, 15, 1, 0, 0, 0, 0, 17,
		1, 0, 0, 0, 0, 19, 1, 0, 0, 0, 0, 21, 1, 0, 0, 0, 0, 23, 1, 0, 0, 0, 0, 25, 1, 0, 0, 0, 0, 27,
		1, 0, 0, 0, 0, 29, 1, 0, 0, 0, 0, 31, 1, 0, 0, 0, 0, 33, 1, 0, 0, 0, 0, 35, 1, 0, 0, 0, 1, 47,
		1, 0, 0, 0, 3, 49, 1, 0, 0, 0, 5, 55, 1, 0, 0, 0, 7, 59, 1, 0, 0, 0, 9, 63, 1, 0, 0, 0, 11, 66,
		1, 0, 0, 0, 13, 69, 1, 0, 0, 0, 15, 72, 1, 0, 0, 0, 17, 75, 1, 0, 0, 0, 19, 78, 1, 0, 0, 0, 21,
		81, 1, 0, 0, 0, 23, 84, 1, 0, 0, 0, 25, 86, 1, 0, 0, 0, 27, 88, 1, 0, 0, 0, 29, 90, 1, 0, 0, 0,
		31, 92, 1, 0, 0, 0, 33, 94, 1, 0, 0, 0, 35, 102, 1, 0, 0, 0, 37, 48, 3, 35, 17, 0, 38, 48, 3, 9,
		4, 0, 39, 48, 3, 11, 5, 0, 40, 48, 3, 13, 6, 0, 41, 48, 3, 15, 7, 0, 42, 48, 3, 17, 8, 0, 43,
		48, 3, 19, 9, 0, 44, 48, 3, 3, 1, 0, 45, 48, 3, 21, 10, 0, 46, 48, 3, 5, 2, 0, 47, 37, 1, 0, 0,
		0, 47, 38, 1, 0, 0, 0, 47, 39, 1, 0, 0, 0, 47, 40, 1, 0, 0, 0, 47, 41, 1, 0, 0, 0, 47, 42, 1, 0,
		0, 0, 47, 43, 1, 0, 0, 0, 47, 44, 1, 0, 0, 0, 47, 45, 1, 0, 0, 0, 47, 46, 1, 0, 0, 0, 48, 2, 1,
		0, 0, 0, 49, 51, 5, 92, 0, 0, 50, 52, 5, 13, 0, 0, 51, 50, 1, 0, 0, 0, 51, 52, 1, 0, 0, 0, 52,
		53, 1, 0, 0, 0, 53, 54, 5, 10, 0, 0, 54, 4, 1, 0, 0, 0, 55, 56, 5, 92, 0, 0, 56, 57, 5, 110, 0,
		0, 57, 6, 1, 0, 0, 0, 58, 60, 5, 13, 0, 0, 59, 58, 1, 0, 0, 0, 59, 60, 1, 0, 0, 0, 60, 61, 1, 0,
		0, 0, 61, 62, 5, 10, 0, 0, 62, 8, 1, 0, 0, 0, 63, 64, 5, 92, 0, 0, 64, 65, 5, 92, 0, 0, 65, 10,
		1, 0, 0, 0, 66, 67, 5, 92, 0, 0, 67, 68, 5, 123, 0, 0, 68, 12, 1, 0, 0, 0, 69, 70, 5, 92, 0, 0,
		70, 71, 5, 125, 0, 0, 71, 14, 1, 0, 0, 0, 72, 73, 5, 92, 0, 0, 73, 74, 5, 45, 0, 0, 74, 16, 1,
		0, 0, 0, 75, 76, 5, 92, 0, 0, 76, 77, 5, 34, 0, 0, 77, 18, 1, 0, 0, 0, 78, 79, 5, 92, 0, 0, 79,
		80, 5, 124, 0, 0, 80, 20, 1, 0, 0, 0, 81, 82, 5, 92, 0, 0, 82, 83, 5, 58, 0, 0, 83, 22, 1, 0, 0,
		0, 84, 85, 5, 123, 0, 0, 85, 24, 1, 0, 0, 0, 86, 87, 5, 125, 0, 0, 87, 26, 1, 0, 0, 0, 88, 89,
		5, 34, 0, 0, 89, 28, 1, 0, 0, 0, 90, 91, 5, 124, 0, 0, 91, 30, 1, 0, 0, 0, 92, 93, 5, 58, 0, 0,
		93, 32, 1, 0, 0, 0, 94, 95, 5, 45, 0, 0, 95, 96, 5, 45, 0, 0, 96, 97, 5, 45, 0, 0, 97, 100, 1,
		0, 0, 0, 98, 101, 3, 7, 3, 0, 99, 101, 5, 0, 0, 1, 100, 98, 1, 0, 0, 0, 100, 99, 1, 0, 0, 0,
		101, 34, 1, 0, 0, 0, 102, 103, 8, 0, 0, 0, 103, 36, 1, 0, 0, 0, 5, 0, 47, 51, 59, 100, 0
	];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!RollTableLexer.__ATN) {
			RollTableLexer.__ATN = new ATNDeserializer().deserialize(RollTableLexer._serializedATN);
		}

		return RollTableLexer.__ATN;
	}

	static DecisionsToDFA = RollTableLexer._ATN.decisionToState.map(
		(ds, index: number) => new DFA(ds, index)
	);
}
