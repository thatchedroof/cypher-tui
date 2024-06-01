// Generated from ./src-tauri/data/RollTable.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer,
	DFA,
	FailedPredicateException,
	RecognitionException,
	NoViableAltException,
	BailErrorStrategy,
	Parser,
	ParserATNSimulator,
	RuleContext,
	ParserRuleContext,
	PredictionMode,
	PredictionContextCache,
	TerminalNode,
	RuleNode,
	Token,
	Interval,
	IntervalSet
} from 'antlr4';
import RollTableListener from './RollTableListener.js';
import RollTableVisitor from './RollTableVisitor.js';

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class RollTableParser extends Parser {
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
	public static readonly RULE_prog = 0;
	public static readonly RULE_possibility = 1;
	public static readonly RULE_rollPossibility = 2;
	public static readonly RULE_blockPossibility = 3;
	public static readonly RULE_parenthetical = 4;
	public static readonly RULE_text = 5;
	public static readonly RULE_rollPossibilityText = 6;
	public static readonly RULE_blockPossibilityText = 7;
	public static readonly RULE_quotedText = 8;
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
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		'prog',
		'possibility',
		'rollPossibility',
		'blockPossibility',
		'parenthetical',
		'text',
		'rollPossibilityText',
		'blockPossibilityText',
		'quotedText'
	];
	public get grammarFileName(): string {
		return 'RollTable.g4';
	}
	public get literalNames(): (string | null)[] {
		return RollTableParser.literalNames;
	}
	public get symbolicNames(): (string | null)[] {
		return RollTableParser.symbolicNames;
	}
	public get ruleNames(): string[] {
		return RollTableParser.ruleNames;
	}
	public get serializedATN(): number[] {
		return RollTableParser._serializedATN;
	}

	protected createFailedPredicateException(
		predicate?: string,
		message?: string
	): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input) {
		super(input);
		this._interp = new ParserATNSimulator(
			this,
			RollTableParser._ATN,
			RollTableParser.DecisionsToDFA,
			new PredictionContextCache()
		);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let localctx: ProgContext = new ProgContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, RollTableParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 22;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((_la & ~0x1f) === 0 && ((1 << _la) & 4145170) !== 0) {
					{
						this.state = 20;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
							case 1:
							case 4:
							case 16:
							case 17:
							case 18:
							case 19:
							case 20:
								{
									this.state = 18;
									this.text();
								}
								break;
							case 14:
							case 21:
								{
									this.state = 19;
									this.possibility();
								}
								break;
							default:
								throw new NoViableAltException(this);
						}
					}
					this.state = 24;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 25;
				this.match(RollTableParser.EOF);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public possibility(): PossibilityContext {
		let localctx: PossibilityContext = new PossibilityContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, RollTableParser.RULE_possibility);
		try {
			this.state = 29;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case 14:
					this.enterOuterAlt(localctx, 1);
					{
						this.state = 27;
						this.rollPossibility();
					}
					break;
				case 21:
					this.enterOuterAlt(localctx, 2);
					{
						this.state = 28;
						this.blockPossibility();
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rollPossibility(): RollPossibilityContext {
		let localctx: RollPossibilityContext = new RollPossibilityContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, RollTableParser.RULE_rollPossibility);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 31;
				this.match(RollTableParser.LBRACE);
				this.state = 35;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 3, this._ctx)) {
					case 1:
						{
							this.state = 32;
							this.rollPossibilityText();
							this.state = 33;
							this.match(RollTableParser.COLON);
						}
						break;
				}
				this.state = 43;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
						case 1:
							{
								{
									this.state = 38;
									this._errHandler.sync(this);
									switch (this._interp.adaptivePredict(this._input, 4, this._ctx)) {
										case 1:
											{
												this.state = 37;
												this.parenthetical();
											}
											break;
									}
									this.state = 40;
									this.rollPossibilityText();
									this.state = 41;
									this.match(RollTableParser.VBAR);
								}
							}
							break;
						default:
							throw new NoViableAltException(this);
					}
					this.state = 45;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 48;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 6, this._ctx)) {
					case 1:
						{
							this.state = 47;
							this.parenthetical();
						}
						break;
				}
				this.state = 50;
				this.rollPossibilityText();
				this.state = 51;
				this.match(RollTableParser.RBRACE);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public blockPossibility(): BlockPossibilityContext {
		let localctx: BlockPossibilityContext = new BlockPossibilityContext(
			this,
			this._ctx,
			this.state
		);
		this.enterRule(localctx, 6, RollTableParser.RULE_blockPossibility);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 53;
				this.match(RollTableParser.DASHES);
				this.state = 57;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 7, this._ctx)) {
					case 1:
						{
							this.state = 54;
							this.blockPossibilityText();
							this.state = 55;
							this.match(RollTableParser.COLON);
						}
						break;
				}
				this.state = 66;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
						{
							this.state = 63;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if ((_la & ~0x1f) === 0 && ((1 << _la) & 2048002) !== 0) {
								{
									this.state = 60;
									this._errHandler.sync(this);
									switch (this._interp.adaptivePredict(this._input, 8, this._ctx)) {
										case 1:
											{
												this.state = 59;
												this.parenthetical();
											}
											break;
									}
									this.state = 62;
									this.blockPossibilityText();
								}
							}

							this.state = 65;
							this.match(RollTableParser.NEWLINE);
						}
					}
					this.state = 68;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((_la & ~0x1f) === 0 && ((1 << _la) & 2048018) !== 0);
				this.state = 70;
				this.match(RollTableParser.DASHES);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parenthetical(): ParentheticalContext {
		let localctx: ParentheticalContext = new ParentheticalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, RollTableParser.RULE_parenthetical);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 72;
				this.match(RollTableParser.LPAREN);
				this.state = 74;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
						{
							this.state = 73;
							this.match(RollTableParser.FULL_CHAR);
						}
					}
					this.state = 76;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === 1);
				this.state = 78;
				this.match(RollTableParser.RPAREN);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public text(): TextContext {
		let localctx: TextContext = new TextContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, RollTableParser.RULE_text);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 81;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
						case 1:
							{
								{
									this.state = 80;
									_la = this._input.LA(1);
									if (!((_la & ~0x1f) === 0 && ((1 << _la) & 2031634) !== 0)) {
										this._errHandler.recoverInline(this);
									} else {
										this._errHandler.reportMatch(this);
										this.consume();
									}
								}
							}
							break;
						default:
							throw new NoViableAltException(this);
					}
					this.state = 83;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rollPossibilityText(): RollPossibilityTextContext {
		let localctx: RollPossibilityTextContext = new RollPossibilityTextContext(
			this,
			this._ctx,
			this.state
		);
		this.enterRule(localctx, 12, RollTableParser.RULE_rollPossibilityText);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 91;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
						this.state = 91;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
							case 1:
								{
									this.state = 85;
									this.match(RollTableParser.FULL_CHAR);
								}
								break;
							case 4:
								{
									this.state = 86;
									this.match(RollTableParser.NEWLINE);
								}
								break;
							case 19:
								{
									this.state = 87;
									this.match(RollTableParser.LPAREN);
								}
								break;
							case 20:
								{
									this.state = 88;
									this.match(RollTableParser.RPAREN);
								}
								break;
							case 16:
								{
									this.state = 89;
									this.quotedText();
								}
								break;
							case 14:
								{
									this.state = 90;
									this.rollPossibility();
								}
								break;
							default:
								throw new NoViableAltException(this);
						}
					}
					this.state = 93;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((_la & ~0x1f) === 0 && ((1 << _la) & 1654802) !== 0);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public blockPossibilityText(): BlockPossibilityTextContext {
		let localctx: BlockPossibilityTextContext = new BlockPossibilityTextContext(
			this,
			this._ctx,
			this.state
		);
		this.enterRule(localctx, 14, RollTableParser.RULE_blockPossibilityText);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 102;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
						case 1:
							{
								this.state = 102;
								this._errHandler.sync(this);
								switch (this._input.LA(1)) {
									case 1:
										{
											this.state = 95;
											this.match(RollTableParser.FULL_CHAR);
										}
										break;
									case 17:
										{
											this.state = 96;
											this.match(RollTableParser.VBAR);
										}
										break;
									case 18:
										{
											this.state = 97;
											this.match(RollTableParser.COLON);
										}
										break;
									case 19:
										{
											this.state = 98;
											this.match(RollTableParser.LPAREN);
										}
										break;
									case 20:
										{
											this.state = 99;
											this.match(RollTableParser.RPAREN);
										}
										break;
									case 16:
										{
											this.state = 100;
											this.quotedText();
										}
										break;
									case 14:
										{
											this.state = 101;
											this.rollPossibility();
										}
										break;
									default:
										throw new NoViableAltException(this);
								}
							}
							break;
						default:
							throw new NoViableAltException(this);
					}
					this.state = 104;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 16, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public quotedText(): QuotedTextContext {
		let localctx: QuotedTextContext = new QuotedTextContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, RollTableParser.RULE_quotedText);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 106;
				this.match(RollTableParser.QUOTE);
				this.state = 110;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((_la & ~0x1f) === 0 && ((1 << _la) & 1966098) !== 0) {
					{
						{
							this.state = 107;
							_la = this._input.LA(1);
							if (!((_la & ~0x1f) === 0 && ((1 << _la) & 1966098) !== 0)) {
								this._errHandler.recoverInline(this);
							} else {
								this._errHandler.reportMatch(this);
								this.consume();
							}
						}
					}
					this.state = 112;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 113;
				this.match(RollTableParser.QUOTE);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [
		4, 1, 22, 116, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7,
		6, 2, 7, 7, 7, 2, 8, 7, 8, 1, 0, 1, 0, 5, 0, 21, 8, 0, 10, 0, 12, 0, 24, 9, 0, 1, 0, 1, 0, 1, 1,
		1, 1, 3, 1, 30, 8, 1, 1, 2, 1, 2, 1, 2, 1, 2, 3, 2, 36, 8, 2, 1, 2, 3, 2, 39, 8, 2, 1, 2, 1, 2,
		1, 2, 4, 2, 44, 8, 2, 11, 2, 12, 2, 45, 1, 2, 3, 2, 49, 8, 2, 1, 2, 1, 2, 1, 2, 1, 3, 1, 3, 1,
		3, 1, 3, 3, 3, 58, 8, 3, 1, 3, 3, 3, 61, 8, 3, 1, 3, 3, 3, 64, 8, 3, 1, 3, 4, 3, 67, 8, 3, 11,
		3, 12, 3, 68, 1, 3, 1, 3, 1, 4, 1, 4, 4, 4, 75, 8, 4, 11, 4, 12, 4, 76, 1, 4, 1, 4, 1, 5, 4, 5,
		82, 8, 5, 11, 5, 12, 5, 83, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 4, 6, 92, 8, 6, 11, 6, 12, 6,
		93, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 4, 7, 103, 8, 7, 11, 7, 12, 7, 104, 1, 8, 1, 8, 5,
		8, 109, 8, 8, 10, 8, 12, 8, 112, 9, 8, 1, 8, 1, 8, 1, 8, 0, 0, 9, 0, 2, 4, 6, 8, 10, 12, 14, 16,
		0, 2, 3, 0, 1, 1, 4, 4, 16, 20, 3, 0, 1, 1, 4, 4, 17, 20, 133, 0, 22, 1, 0, 0, 0, 2, 29, 1, 0,
		0, 0, 4, 31, 1, 0, 0, 0, 6, 53, 1, 0, 0, 0, 8, 72, 1, 0, 0, 0, 10, 81, 1, 0, 0, 0, 12, 91, 1, 0,
		0, 0, 14, 102, 1, 0, 0, 0, 16, 106, 1, 0, 0, 0, 18, 21, 3, 10, 5, 0, 19, 21, 3, 2, 1, 0, 20, 18,
		1, 0, 0, 0, 20, 19, 1, 0, 0, 0, 21, 24, 1, 0, 0, 0, 22, 20, 1, 0, 0, 0, 22, 23, 1, 0, 0, 0, 23,
		25, 1, 0, 0, 0, 24, 22, 1, 0, 0, 0, 25, 26, 5, 0, 0, 1, 26, 1, 1, 0, 0, 0, 27, 30, 3, 4, 2, 0,
		28, 30, 3, 6, 3, 0, 29, 27, 1, 0, 0, 0, 29, 28, 1, 0, 0, 0, 30, 3, 1, 0, 0, 0, 31, 35, 5, 14, 0,
		0, 32, 33, 3, 12, 6, 0, 33, 34, 5, 18, 0, 0, 34, 36, 1, 0, 0, 0, 35, 32, 1, 0, 0, 0, 35, 36, 1,
		0, 0, 0, 36, 43, 1, 0, 0, 0, 37, 39, 3, 8, 4, 0, 38, 37, 1, 0, 0, 0, 38, 39, 1, 0, 0, 0, 39, 40,
		1, 0, 0, 0, 40, 41, 3, 12, 6, 0, 41, 42, 5, 17, 0, 0, 42, 44, 1, 0, 0, 0, 43, 38, 1, 0, 0, 0,
		44, 45, 1, 0, 0, 0, 45, 43, 1, 0, 0, 0, 45, 46, 1, 0, 0, 0, 46, 48, 1, 0, 0, 0, 47, 49, 3, 8, 4,
		0, 48, 47, 1, 0, 0, 0, 48, 49, 1, 0, 0, 0, 49, 50, 1, 0, 0, 0, 50, 51, 3, 12, 6, 0, 51, 52, 5,
		15, 0, 0, 52, 5, 1, 0, 0, 0, 53, 57, 5, 21, 0, 0, 54, 55, 3, 14, 7, 0, 55, 56, 5, 18, 0, 0, 56,
		58, 1, 0, 0, 0, 57, 54, 1, 0, 0, 0, 57, 58, 1, 0, 0, 0, 58, 66, 1, 0, 0, 0, 59, 61, 3, 8, 4, 0,
		60, 59, 1, 0, 0, 0, 60, 61, 1, 0, 0, 0, 61, 62, 1, 0, 0, 0, 62, 64, 3, 14, 7, 0, 63, 60, 1, 0,
		0, 0, 63, 64, 1, 0, 0, 0, 64, 65, 1, 0, 0, 0, 65, 67, 5, 4, 0, 0, 66, 63, 1, 0, 0, 0, 67, 68, 1,
		0, 0, 0, 68, 66, 1, 0, 0, 0, 68, 69, 1, 0, 0, 0, 69, 70, 1, 0, 0, 0, 70, 71, 5, 21, 0, 0, 71, 7,
		1, 0, 0, 0, 72, 74, 5, 19, 0, 0, 73, 75, 5, 1, 0, 0, 74, 73, 1, 0, 0, 0, 75, 76, 1, 0, 0, 0, 76,
		74, 1, 0, 0, 0, 76, 77, 1, 0, 0, 0, 77, 78, 1, 0, 0, 0, 78, 79, 5, 20, 0, 0, 79, 9, 1, 0, 0, 0,
		80, 82, 7, 0, 0, 0, 81, 80, 1, 0, 0, 0, 82, 83, 1, 0, 0, 0, 83, 81, 1, 0, 0, 0, 83, 84, 1, 0, 0,
		0, 84, 11, 1, 0, 0, 0, 85, 92, 5, 1, 0, 0, 86, 92, 5, 4, 0, 0, 87, 92, 5, 19, 0, 0, 88, 92, 5,
		20, 0, 0, 89, 92, 3, 16, 8, 0, 90, 92, 3, 4, 2, 0, 91, 85, 1, 0, 0, 0, 91, 86, 1, 0, 0, 0, 91,
		87, 1, 0, 0, 0, 91, 88, 1, 0, 0, 0, 91, 89, 1, 0, 0, 0, 91, 90, 1, 0, 0, 0, 92, 93, 1, 0, 0, 0,
		93, 91, 1, 0, 0, 0, 93, 94, 1, 0, 0, 0, 94, 13, 1, 0, 0, 0, 95, 103, 5, 1, 0, 0, 96, 103, 5, 17,
		0, 0, 97, 103, 5, 18, 0, 0, 98, 103, 5, 19, 0, 0, 99, 103, 5, 20, 0, 0, 100, 103, 3, 16, 8, 0,
		101, 103, 3, 4, 2, 0, 102, 95, 1, 0, 0, 0, 102, 96, 1, 0, 0, 0, 102, 97, 1, 0, 0, 0, 102, 98, 1,
		0, 0, 0, 102, 99, 1, 0, 0, 0, 102, 100, 1, 0, 0, 0, 102, 101, 1, 0, 0, 0, 103, 104, 1, 0, 0, 0,
		104, 102, 1, 0, 0, 0, 104, 105, 1, 0, 0, 0, 105, 15, 1, 0, 0, 0, 106, 110, 5, 16, 0, 0, 107,
		109, 7, 1, 0, 0, 108, 107, 1, 0, 0, 0, 109, 112, 1, 0, 0, 0, 110, 108, 1, 0, 0, 0, 110, 111, 1,
		0, 0, 0, 111, 113, 1, 0, 0, 0, 112, 110, 1, 0, 0, 0, 113, 114, 5, 16, 0, 0, 114, 17, 1, 0, 0, 0,
		18, 20, 22, 29, 35, 38, 45, 48, 57, 60, 63, 68, 76, 83, 91, 93, 102, 104, 110
	];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!RollTableParser.__ATN) {
			RollTableParser.__ATN = new ATNDeserializer().deserialize(RollTableParser._serializedATN);
		}

		return RollTableParser.__ATN;
	}

	static DecisionsToDFA = RollTableParser._ATN.decisionToState.map(
		(ds, index: number) => new DFA(ds, index)
	);
}

export class ProgContext extends ParserRuleContext {
	constructor(parser?: RollTableParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(RollTableParser.EOF, 0);
	}
	public text_list(): TextContext[] {
		return this.getTypedRuleContexts(TextContext) as TextContext[];
	}
	public text(i: number): TextContext {
		return this.getTypedRuleContext(TextContext, i) as TextContext;
	}
	public possibility_list(): PossibilityContext[] {
		return this.getTypedRuleContexts(PossibilityContext) as PossibilityContext[];
	}
	public possibility(i: number): PossibilityContext {
		return this.getTypedRuleContext(PossibilityContext, i) as PossibilityContext;
	}
	public get ruleIndex(): number {
		return RollTableParser.RULE_prog;
	}
	public enterRule(listener: RollTableListener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	public exitRule(listener: RollTableListener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RollTableVisitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class PossibilityContext extends ParserRuleContext {
	constructor(parser?: RollTableParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}
	public rollPossibility(): RollPossibilityContext {
		return this.getTypedRuleContext(RollPossibilityContext, 0) as RollPossibilityContext;
	}
	public blockPossibility(): BlockPossibilityContext {
		return this.getTypedRuleContext(BlockPossibilityContext, 0) as BlockPossibilityContext;
	}
	public get ruleIndex(): number {
		return RollTableParser.RULE_possibility;
	}
	public enterRule(listener: RollTableListener): void {
		if (listener.enterPossibility) {
			listener.enterPossibility(this);
		}
	}
	public exitRule(listener: RollTableListener): void {
		if (listener.exitPossibility) {
			listener.exitPossibility(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RollTableVisitor<Result>): Result {
		if (visitor.visitPossibility) {
			return visitor.visitPossibility(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class RollPossibilityContext extends ParserRuleContext {
	constructor(parser?: RollTableParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(RollTableParser.LBRACE, 0);
	}
	public rollPossibilityText_list(): RollPossibilityTextContext[] {
		return this.getTypedRuleContexts(RollPossibilityTextContext) as RollPossibilityTextContext[];
	}
	public rollPossibilityText(i: number): RollPossibilityTextContext {
		return this.getTypedRuleContext(RollPossibilityTextContext, i) as RollPossibilityTextContext;
	}
	public RBRACE(): TerminalNode {
		return this.getToken(RollTableParser.RBRACE, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(RollTableParser.COLON, 0);
	}
	public VBAR_list(): TerminalNode[] {
		return this.getTokens(RollTableParser.VBAR);
	}
	public VBAR(i: number): TerminalNode {
		return this.getToken(RollTableParser.VBAR, i);
	}
	public parenthetical_list(): ParentheticalContext[] {
		return this.getTypedRuleContexts(ParentheticalContext) as ParentheticalContext[];
	}
	public parenthetical(i: number): ParentheticalContext {
		return this.getTypedRuleContext(ParentheticalContext, i) as ParentheticalContext;
	}
	public get ruleIndex(): number {
		return RollTableParser.RULE_rollPossibility;
	}
	public enterRule(listener: RollTableListener): void {
		if (listener.enterRollPossibility) {
			listener.enterRollPossibility(this);
		}
	}
	public exitRule(listener: RollTableListener): void {
		if (listener.exitRollPossibility) {
			listener.exitRollPossibility(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RollTableVisitor<Result>): Result {
		if (visitor.visitRollPossibility) {
			return visitor.visitRollPossibility(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class BlockPossibilityContext extends ParserRuleContext {
	constructor(parser?: RollTableParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}
	public DASHES_list(): TerminalNode[] {
		return this.getTokens(RollTableParser.DASHES);
	}
	public DASHES(i: number): TerminalNode {
		return this.getToken(RollTableParser.DASHES, i);
	}
	public blockPossibilityText_list(): BlockPossibilityTextContext[] {
		return this.getTypedRuleContexts(BlockPossibilityTextContext) as BlockPossibilityTextContext[];
	}
	public blockPossibilityText(i: number): BlockPossibilityTextContext {
		return this.getTypedRuleContext(BlockPossibilityTextContext, i) as BlockPossibilityTextContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(RollTableParser.COLON, 0);
	}
	public NEWLINE_list(): TerminalNode[] {
		return this.getTokens(RollTableParser.NEWLINE);
	}
	public NEWLINE(i: number): TerminalNode {
		return this.getToken(RollTableParser.NEWLINE, i);
	}
	public parenthetical_list(): ParentheticalContext[] {
		return this.getTypedRuleContexts(ParentheticalContext) as ParentheticalContext[];
	}
	public parenthetical(i: number): ParentheticalContext {
		return this.getTypedRuleContext(ParentheticalContext, i) as ParentheticalContext;
	}
	public get ruleIndex(): number {
		return RollTableParser.RULE_blockPossibility;
	}
	public enterRule(listener: RollTableListener): void {
		if (listener.enterBlockPossibility) {
			listener.enterBlockPossibility(this);
		}
	}
	public exitRule(listener: RollTableListener): void {
		if (listener.exitBlockPossibility) {
			listener.exitBlockPossibility(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RollTableVisitor<Result>): Result {
		if (visitor.visitBlockPossibility) {
			return visitor.visitBlockPossibility(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ParentheticalContext extends ParserRuleContext {
	constructor(parser?: RollTableParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(RollTableParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(RollTableParser.RPAREN, 0);
	}
	public FULL_CHAR_list(): TerminalNode[] {
		return this.getTokens(RollTableParser.FULL_CHAR);
	}
	public FULL_CHAR(i: number): TerminalNode {
		return this.getToken(RollTableParser.FULL_CHAR, i);
	}
	public get ruleIndex(): number {
		return RollTableParser.RULE_parenthetical;
	}
	public enterRule(listener: RollTableListener): void {
		if (listener.enterParenthetical) {
			listener.enterParenthetical(this);
		}
	}
	public exitRule(listener: RollTableListener): void {
		if (listener.exitParenthetical) {
			listener.exitParenthetical(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RollTableVisitor<Result>): Result {
		if (visitor.visitParenthetical) {
			return visitor.visitParenthetical(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class TextContext extends ParserRuleContext {
	constructor(parser?: RollTableParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}
	public FULL_CHAR_list(): TerminalNode[] {
		return this.getTokens(RollTableParser.FULL_CHAR);
	}
	public FULL_CHAR(i: number): TerminalNode {
		return this.getToken(RollTableParser.FULL_CHAR, i);
	}
	public VBAR_list(): TerminalNode[] {
		return this.getTokens(RollTableParser.VBAR);
	}
	public VBAR(i: number): TerminalNode {
		return this.getToken(RollTableParser.VBAR, i);
	}
	public QUOTE_list(): TerminalNode[] {
		return this.getTokens(RollTableParser.QUOTE);
	}
	public QUOTE(i: number): TerminalNode {
		return this.getToken(RollTableParser.QUOTE, i);
	}
	public COLON_list(): TerminalNode[] {
		return this.getTokens(RollTableParser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(RollTableParser.COLON, i);
	}
	public LPAREN_list(): TerminalNode[] {
		return this.getTokens(RollTableParser.LPAREN);
	}
	public LPAREN(i: number): TerminalNode {
		return this.getToken(RollTableParser.LPAREN, i);
	}
	public RPAREN_list(): TerminalNode[] {
		return this.getTokens(RollTableParser.RPAREN);
	}
	public RPAREN(i: number): TerminalNode {
		return this.getToken(RollTableParser.RPAREN, i);
	}
	public NEWLINE_list(): TerminalNode[] {
		return this.getTokens(RollTableParser.NEWLINE);
	}
	public NEWLINE(i: number): TerminalNode {
		return this.getToken(RollTableParser.NEWLINE, i);
	}
	public get ruleIndex(): number {
		return RollTableParser.RULE_text;
	}
	public enterRule(listener: RollTableListener): void {
		if (listener.enterText) {
			listener.enterText(this);
		}
	}
	public exitRule(listener: RollTableListener): void {
		if (listener.exitText) {
			listener.exitText(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RollTableVisitor<Result>): Result {
		if (visitor.visitText) {
			return visitor.visitText(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class RollPossibilityTextContext extends ParserRuleContext {
	constructor(parser?: RollTableParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}
	public FULL_CHAR_list(): TerminalNode[] {
		return this.getTokens(RollTableParser.FULL_CHAR);
	}
	public FULL_CHAR(i: number): TerminalNode {
		return this.getToken(RollTableParser.FULL_CHAR, i);
	}
	public NEWLINE_list(): TerminalNode[] {
		return this.getTokens(RollTableParser.NEWLINE);
	}
	public NEWLINE(i: number): TerminalNode {
		return this.getToken(RollTableParser.NEWLINE, i);
	}
	public LPAREN_list(): TerminalNode[] {
		return this.getTokens(RollTableParser.LPAREN);
	}
	public LPAREN(i: number): TerminalNode {
		return this.getToken(RollTableParser.LPAREN, i);
	}
	public RPAREN_list(): TerminalNode[] {
		return this.getTokens(RollTableParser.RPAREN);
	}
	public RPAREN(i: number): TerminalNode {
		return this.getToken(RollTableParser.RPAREN, i);
	}
	public quotedText_list(): QuotedTextContext[] {
		return this.getTypedRuleContexts(QuotedTextContext) as QuotedTextContext[];
	}
	public quotedText(i: number): QuotedTextContext {
		return this.getTypedRuleContext(QuotedTextContext, i) as QuotedTextContext;
	}
	public rollPossibility_list(): RollPossibilityContext[] {
		return this.getTypedRuleContexts(RollPossibilityContext) as RollPossibilityContext[];
	}
	public rollPossibility(i: number): RollPossibilityContext {
		return this.getTypedRuleContext(RollPossibilityContext, i) as RollPossibilityContext;
	}
	public get ruleIndex(): number {
		return RollTableParser.RULE_rollPossibilityText;
	}
	public enterRule(listener: RollTableListener): void {
		if (listener.enterRollPossibilityText) {
			listener.enterRollPossibilityText(this);
		}
	}
	public exitRule(listener: RollTableListener): void {
		if (listener.exitRollPossibilityText) {
			listener.exitRollPossibilityText(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RollTableVisitor<Result>): Result {
		if (visitor.visitRollPossibilityText) {
			return visitor.visitRollPossibilityText(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class BlockPossibilityTextContext extends ParserRuleContext {
	constructor(parser?: RollTableParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}
	public FULL_CHAR_list(): TerminalNode[] {
		return this.getTokens(RollTableParser.FULL_CHAR);
	}
	public FULL_CHAR(i: number): TerminalNode {
		return this.getToken(RollTableParser.FULL_CHAR, i);
	}
	public VBAR_list(): TerminalNode[] {
		return this.getTokens(RollTableParser.VBAR);
	}
	public VBAR(i: number): TerminalNode {
		return this.getToken(RollTableParser.VBAR, i);
	}
	public COLON_list(): TerminalNode[] {
		return this.getTokens(RollTableParser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(RollTableParser.COLON, i);
	}
	public LPAREN_list(): TerminalNode[] {
		return this.getTokens(RollTableParser.LPAREN);
	}
	public LPAREN(i: number): TerminalNode {
		return this.getToken(RollTableParser.LPAREN, i);
	}
	public RPAREN_list(): TerminalNode[] {
		return this.getTokens(RollTableParser.RPAREN);
	}
	public RPAREN(i: number): TerminalNode {
		return this.getToken(RollTableParser.RPAREN, i);
	}
	public quotedText_list(): QuotedTextContext[] {
		return this.getTypedRuleContexts(QuotedTextContext) as QuotedTextContext[];
	}
	public quotedText(i: number): QuotedTextContext {
		return this.getTypedRuleContext(QuotedTextContext, i) as QuotedTextContext;
	}
	public rollPossibility_list(): RollPossibilityContext[] {
		return this.getTypedRuleContexts(RollPossibilityContext) as RollPossibilityContext[];
	}
	public rollPossibility(i: number): RollPossibilityContext {
		return this.getTypedRuleContext(RollPossibilityContext, i) as RollPossibilityContext;
	}
	public get ruleIndex(): number {
		return RollTableParser.RULE_blockPossibilityText;
	}
	public enterRule(listener: RollTableListener): void {
		if (listener.enterBlockPossibilityText) {
			listener.enterBlockPossibilityText(this);
		}
	}
	public exitRule(listener: RollTableListener): void {
		if (listener.exitBlockPossibilityText) {
			listener.exitBlockPossibilityText(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RollTableVisitor<Result>): Result {
		if (visitor.visitBlockPossibilityText) {
			return visitor.visitBlockPossibilityText(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class QuotedTextContext extends ParserRuleContext {
	constructor(parser?: RollTableParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}
	public QUOTE_list(): TerminalNode[] {
		return this.getTokens(RollTableParser.QUOTE);
	}
	public QUOTE(i: number): TerminalNode {
		return this.getToken(RollTableParser.QUOTE, i);
	}
	public FULL_CHAR_list(): TerminalNode[] {
		return this.getTokens(RollTableParser.FULL_CHAR);
	}
	public FULL_CHAR(i: number): TerminalNode {
		return this.getToken(RollTableParser.FULL_CHAR, i);
	}
	public VBAR_list(): TerminalNode[] {
		return this.getTokens(RollTableParser.VBAR);
	}
	public VBAR(i: number): TerminalNode {
		return this.getToken(RollTableParser.VBAR, i);
	}
	public COLON_list(): TerminalNode[] {
		return this.getTokens(RollTableParser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(RollTableParser.COLON, i);
	}
	public LPAREN_list(): TerminalNode[] {
		return this.getTokens(RollTableParser.LPAREN);
	}
	public LPAREN(i: number): TerminalNode {
		return this.getToken(RollTableParser.LPAREN, i);
	}
	public RPAREN_list(): TerminalNode[] {
		return this.getTokens(RollTableParser.RPAREN);
	}
	public RPAREN(i: number): TerminalNode {
		return this.getToken(RollTableParser.RPAREN, i);
	}
	public NEWLINE_list(): TerminalNode[] {
		return this.getTokens(RollTableParser.NEWLINE);
	}
	public NEWLINE(i: number): TerminalNode {
		return this.getToken(RollTableParser.NEWLINE, i);
	}
	public get ruleIndex(): number {
		return RollTableParser.RULE_quotedText;
	}
	public enterRule(listener: RollTableListener): void {
		if (listener.enterQuotedText) {
			listener.enterQuotedText(this);
		}
	}
	public exitRule(listener: RollTableListener): void {
		if (listener.exitQuotedText) {
			listener.exitQuotedText(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RollTableVisitor<Result>): Result {
		if (visitor.visitQuotedText) {
			return visitor.visitQuotedText(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
