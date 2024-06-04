grammar RollTable;

prog: (text | possibility)* EOF
	;

possibility: rollPossibility | blockPossibility
	;

rollPossibility:
	LBRACE (rollPossibilityText COLON)? (
		rollPossibilityText VBAR
	)* rollPossibilityText RBRACE
	;

blockPossibility:
	DASHES (blockPossibilityText COLON)? (
		blockPossibilityText? NEWLINE
	)+ DASHES
	;

text: ( FULL_CHAR | VBAR | QUOTE | COLON | NEWLINE)+
	;

rollPossibilityText: (
		FULL_CHAR
		| NEWLINE
		| rollPossibility
		| quotedText
	)+
	;

blockPossibilityText: (
		FULL_CHAR
		| VBAR
		| COLON
		| rollPossibility
		| quotedText
	)+
	;

quotedText:
	QUOTE (FULL_CHAR | VBAR | COLON | NEWLINE | rollPossibility)* QUOTE
	;

FULL_CHAR:
	CHAR
	| ESCAPED_BACKSLASH
	| ESCAPED_LBRACE
	| ESCAPED_RBRACE
	| ESCAPED_DASH
	| ESCAPED_QUOTE
	| ESCAPED_VBAR
	| ESCAPED_NEWLINE
	| ESCAPED_COLON
	| NEWLINE_CHAR
	;

ESCAPED_NEWLINE: '\\' '\r'? '\n'
	;

NEWLINE_CHAR: '\\n'
	;

NEWLINE: '\r'? '\n'
	;

ESCAPED_BACKSLASH: '\\\\'
	;
ESCAPED_LBRACE: '\\{'
	;
ESCAPED_RBRACE: '\\}'
	;
ESCAPED_DASH: '\\-'
	;
ESCAPED_QUOTE: '\\"'
	;
ESCAPED_VBAR: '\\|'
	;
ESCAPED_COLON: '\\:'
	;

LBRACE: '{'
	;
RBRACE: '}'
	;
QUOTE: '"'
	;
VBAR: '|'
	;
COLON: ':'
	;

DASHES: '---' (NEWLINE | EOF)
	;

CHAR: ~[{}"|:\\\r\n]
	;
