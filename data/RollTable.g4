grammar RollTable;

prog: (text | possibility)* EOF
	;

possibility: rollPossibility | blockPossibility
	;

rollPossibility:
	LBRACE (rollPossibilityText COLON)? (
		parenthetical? rollPossibilityText VBAR
	)* parenthetical? rollPossibilityText RBRACE
	;

blockPossibility:
	DASHES (blockPossibilityText COLON)? (
		(parenthetical? blockPossibilityText)? NEWLINE
	)+ DASHES
	;

parenthetical: LPAREN FULL_CHAR+ RPAREN
	;

text: (
		FULL_CHAR
		| VBAR
		| QUOTE
		| COLON
		| LPAREN
		| RPAREN
		| NEWLINE
	)+
	;

rollPossibilityText: (
		FULL_CHAR
		| NEWLINE
		| LPAREN
		| RPAREN
		| rollPossibility
		| quotedText
	)+
	;

blockPossibilityText: (
		FULL_CHAR
		| VBAR
		| COLON
		| LPAREN
		| RPAREN
		| rollPossibility
		| quotedText
	)+
	;

quotedText:
	QUOTE (FULL_CHAR | VBAR | COLON | LPAREN | RPAREN | NEWLINE)* QUOTE
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
	| ESCAPED_LPAREN
	| ESCAPED_RPAREN
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
ESCAPED_LPAREN: '\\('
	;
ESCAPED_RPAREN: '\\)'
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
LPAREN: '('
	;
RPAREN: ')'
	;

DASHES: '---' (NEWLINE | EOF)
	;

CHAR: ~[{}()"|:\\\r\n]
	;
