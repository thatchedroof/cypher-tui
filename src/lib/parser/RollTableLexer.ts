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
	public static readonly ESCAPED_LPAREN = 12;
	public static readonly ESCAPED_RPAREN = 13;
	public static readonly LBRACE = 14;
	public static readonly RBRACE = 15;
	public static readonly QUOTE = 16;
	public static readonly VBAR = 17;
	public static readonly COLON = 18;
	public static readonly LPAREN = 19;
	public static readonly RPAREN = 20;
	public static readonly DASHES = 21;
	public static readonly CHAR = 22;
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
		"'\\('",
		"'\\)'",
		"'{'",
		"'}'",
		"'\"'",
		"'|'",
		"':'",
		"'('",
		"')'"
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
		'ESCAPED_LPAREN',
		'ESCAPED_RPAREN',
		'LBRACE',
		'RBRACE',
		'QUOTE',
		'VBAR',
		'COLON',
		'LPAREN',
		'RPAREN',
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
		'ESCAPED_LPAREN',
		'ESCAPED_RPAREN',
		'LBRACE',
		'RBRACE',
		'QUOTE',
		'VBAR',
		'COLON',
		'LPAREN',
		'RPAREN',
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
		4, 0, 22, 124, 6, -1, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2,
		6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7,
		13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20,
		7, 20, 2, 21, 7, 21, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 3,
		0, 58, 8, 0, 1, 1, 1, 1, 3, 1, 62, 8, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 3, 3, 3, 70, 8, 3, 1,
		3, 1, 3, 1, 4, 1, 4, 1, 4, 1, 5, 1, 5, 1, 5, 1, 6, 1, 6, 1, 6, 1, 7, 1, 7, 1, 7, 1, 8, 1, 8, 1,
		8, 1, 9, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 1, 11, 1, 11, 1, 11, 1, 12, 1, 12, 1, 12, 1, 13, 1,
		13, 1, 14, 1, 14, 1, 15, 1, 15, 1, 16, 1, 16, 1, 17, 1, 17, 1, 18, 1, 18, 1, 19, 1, 19, 1, 20,
		1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 3, 20, 121, 8, 20, 1, 21, 1, 21, 0, 0, 22, 1, 1, 3, 2, 5, 3,
		7, 4, 9, 5, 11, 6, 13, 7, 15, 8, 17, 9, 19, 10, 21, 11, 23, 12, 25, 13, 27, 14, 29, 15, 31, 16,
		33, 17, 35, 18, 37, 19, 39, 20, 41, 21, 43, 22, 1, 0, 1, 7, 0, 10, 10, 13, 13, 34, 34, 40, 41,
		58, 58, 92, 92, 123, 125, 137, 0, 1, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 5, 1, 0, 0, 0, 0, 7, 1, 0,
		0, 0, 0, 9, 1, 0, 0, 0, 0, 11, 1, 0, 0, 0, 0, 13, 1, 0, 0, 0, 0, 15, 1, 0, 0, 0, 0, 17, 1, 0, 0,
		0, 0, 19, 1, 0, 0, 0, 0, 21, 1, 0, 0, 0, 0, 23, 1, 0, 0, 0, 0, 25, 1, 0, 0, 0, 0, 27, 1, 0, 0,
		0, 0, 29, 1, 0, 0, 0, 0, 31, 1, 0, 0, 0, 0, 33, 1, 0, 0, 0, 0, 35, 1, 0, 0, 0, 0, 37, 1, 0, 0,
		0, 0, 39, 1, 0, 0, 0, 0, 41, 1, 0, 0, 0, 0, 43, 1, 0, 0, 0, 1, 57, 1, 0, 0, 0, 3, 59, 1, 0, 0,
		0, 5, 65, 1, 0, 0, 0, 7, 69, 1, 0, 0, 0, 9, 73, 1, 0, 0, 0, 11, 76, 1, 0, 0, 0, 13, 79, 1, 0, 0,
		0, 15, 82, 1, 0, 0, 0, 17, 85, 1, 0, 0, 0, 19, 88, 1, 0, 0, 0, 21, 91, 1, 0, 0, 0, 23, 94, 1, 0,
		0, 0, 25, 97, 1, 0, 0, 0, 27, 100, 1, 0, 0, 0, 29, 102, 1, 0, 0, 0, 31, 104, 1, 0, 0, 0, 33,
		106, 1, 0, 0, 0, 35, 108, 1, 0, 0, 0, 37, 110, 1, 0, 0, 0, 39, 112, 1, 0, 0, 0, 41, 114, 1, 0,
		0, 0, 43, 122, 1, 0, 0, 0, 45, 58, 3, 43, 21, 0, 46, 58, 3, 9, 4, 0, 47, 58, 3, 11, 5, 0, 48,
		58, 3, 13, 6, 0, 49, 58, 3, 15, 7, 0, 50, 58, 3, 17, 8, 0, 51, 58, 3, 19, 9, 0, 52, 58, 3, 3, 1,
		0, 53, 58, 3, 21, 10, 0, 54, 58, 3, 23, 11, 0, 55, 58, 3, 25, 12, 0, 56, 58, 3, 5, 2, 0, 57, 45,
		1, 0, 0, 0, 57, 46, 1, 0, 0, 0, 57, 47, 1, 0, 0, 0, 57, 48, 1, 0, 0, 0, 57, 49, 1, 0, 0, 0, 57,
		50, 1, 0, 0, 0, 57, 51, 1, 0, 0, 0, 57, 52, 1, 0, 0, 0, 57, 53, 1, 0, 0, 0, 57, 54, 1, 0, 0, 0,
		57, 55, 1, 0, 0, 0, 57, 56, 1, 0, 0, 0, 58, 2, 1, 0, 0, 0, 59, 61, 5, 92, 0, 0, 60, 62, 5, 13,
		0, 0, 61, 60, 1, 0, 0, 0, 61, 62, 1, 0, 0, 0, 62, 63, 1, 0, 0, 0, 63, 64, 5, 10, 0, 0, 64, 4, 1,
		0, 0, 0, 65, 66, 5, 92, 0, 0, 66, 67, 5, 110, 0, 0, 67, 6, 1, 0, 0, 0, 68, 70, 5, 13, 0, 0, 69,
		68, 1, 0, 0, 0, 69, 70, 1, 0, 0, 0, 70, 71, 1, 0, 0, 0, 71, 72, 5, 10, 0, 0, 72, 8, 1, 0, 0, 0,
		73, 74, 5, 92, 0, 0, 74, 75, 5, 92, 0, 0, 75, 10, 1, 0, 0, 0, 76, 77, 5, 92, 0, 0, 77, 78, 5,
		123, 0, 0, 78, 12, 1, 0, 0, 0, 79, 80, 5, 92, 0, 0, 80, 81, 5, 125, 0, 0, 81, 14, 1, 0, 0, 0,
		82, 83, 5, 92, 0, 0, 83, 84, 5, 45, 0, 0, 84, 16, 1, 0, 0, 0, 85, 86, 5, 92, 0, 0, 86, 87, 5,
		34, 0, 0, 87, 18, 1, 0, 0, 0, 88, 89, 5, 92, 0, 0, 89, 90, 5, 124, 0, 0, 90, 20, 1, 0, 0, 0, 91,
		92, 5, 92, 0, 0, 92, 93, 5, 58, 0, 0, 93, 22, 1, 0, 0, 0, 94, 95, 5, 92, 0, 0, 95, 96, 5, 40, 0,
		0, 96, 24, 1, 0, 0, 0, 97, 98, 5, 92, 0, 0, 98, 99, 5, 41, 0, 0, 99, 26, 1, 0, 0, 0, 100, 101,
		5, 123, 0, 0, 101, 28, 1, 0, 0, 0, 102, 103, 5, 125, 0, 0, 103, 30, 1, 0, 0, 0, 104, 105, 5, 34,
		0, 0, 105, 32, 1, 0, 0, 0, 106, 107, 5, 124, 0, 0, 107, 34, 1, 0, 0, 0, 108, 109, 5, 58, 0, 0,
		109, 36, 1, 0, 0, 0, 110, 111, 5, 40, 0, 0, 111, 38, 1, 0, 0, 0, 112, 113, 5, 41, 0, 0, 113, 40,
		1, 0, 0, 0, 114, 115, 5, 45, 0, 0, 115, 116, 5, 45, 0, 0, 116, 117, 5, 45, 0, 0, 117, 120, 1, 0,
		0, 0, 118, 121, 3, 7, 3, 0, 119, 121, 5, 0, 0, 1, 120, 118, 1, 0, 0, 0, 120, 119, 1, 0, 0, 0,
		121, 42, 1, 0, 0, 0, 122, 123, 8, 0, 0, 0, 123, 44, 1, 0, 0, 0, 5, 0, 57, 61, 69, 120, 0
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
