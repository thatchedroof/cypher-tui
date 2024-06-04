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
	public static readonly LBRACE = 12;
	public static readonly RBRACE = 13;
	public static readonly QUOTE = 14;
	public static readonly VBAR = 15;
	public static readonly COLON = 16;
	public static readonly DASHES = 17;
	public static readonly CHAR = 18;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_prog = 0;
	public static readonly RULE_possibility = 1;
	public static readonly RULE_rollPossibility = 2;
	public static readonly RULE_blockPossibility = 3;
	public static readonly RULE_text = 4;
	public static readonly RULE_rollPossibilityText = 5;
	public static readonly RULE_blockPossibilityText = 6;
	public static readonly RULE_quotedText = 7;
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
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		'prog',
		'possibility',
		'rollPossibility',
		'blockPossibility',
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
				this.state = 20;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((_la & ~0x1f) === 0 && ((1 << _la) & 249874) !== 0) {
					{
						this.state = 18;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
							case 1:
							case 4:
							case 14:
							case 15:
							case 16:
								{
									this.state = 16;
									this.text();
								}
								break;
							case 12:
							case 17:
								{
									this.state = 17;
									this.possibility();
								}
								break;
							default:
								throw new NoViableAltException(this);
						}
					}
					this.state = 22;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 23;
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
			this.state = 27;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case 12:
					this.enterOuterAlt(localctx, 1);
					{
						this.state = 25;
						this.rollPossibility();
					}
					break;
				case 17:
					this.enterOuterAlt(localctx, 2);
					{
						this.state = 26;
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
				this.state = 29;
				this.match(RollTableParser.LBRACE);
				this.state = 33;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 3, this._ctx)) {
					case 1:
						{
							this.state = 30;
							this.rollPossibilityText();
							this.state = 31;
							this.match(RollTableParser.COLON);
						}
						break;
				}
				this.state = 40;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
							{
								this.state = 35;
								this.rollPossibilityText();
								this.state = 36;
								this.match(RollTableParser.VBAR);
							}
						}
					}
					this.state = 42;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
				}
				this.state = 43;
				this.rollPossibilityText();
				this.state = 44;
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
				this.state = 46;
				this.match(RollTableParser.DASHES);
				this.state = 50;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 5, this._ctx)) {
					case 1:
						{
							this.state = 47;
							this.blockPossibilityText();
							this.state = 48;
							this.match(RollTableParser.COLON);
						}
						break;
				}
				this.state = 56;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
						{
							this.state = 53;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if ((_la & ~0x1f) === 0 && ((1 << _la) & 118786) !== 0) {
								{
									this.state = 52;
									this.blockPossibilityText();
								}
							}

							this.state = 55;
							this.match(RollTableParser.NEWLINE);
						}
					}
					this.state = 58;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((_la & ~0x1f) === 0 && ((1 << _la) & 118802) !== 0);
				this.state = 60;
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
	public text(): TextContext {
		let localctx: TextContext = new TextContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, RollTableParser.RULE_text);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 63;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
						case 1:
							{
								{
									this.state = 62;
									_la = this._input.LA(1);
									if (!((_la & ~0x1f) === 0 && ((1 << _la) & 114706) !== 0)) {
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
					this.state = 65;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
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
		this.enterRule(localctx, 10, RollTableParser.RULE_rollPossibilityText);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 71;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
						this.state = 71;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
							case 1:
								{
									this.state = 67;
									this.match(RollTableParser.FULL_CHAR);
								}
								break;
							case 4:
								{
									this.state = 68;
									this.match(RollTableParser.NEWLINE);
								}
								break;
							case 12:
								{
									this.state = 69;
									this.rollPossibility();
								}
								break;
							case 14:
								{
									this.state = 70;
									this.quotedText();
								}
								break;
							default:
								throw new NoViableAltException(this);
						}
					}
					this.state = 73;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((_la & ~0x1f) === 0 && ((1 << _la) & 20498) !== 0);
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
		this.enterRule(localctx, 12, RollTableParser.RULE_blockPossibilityText);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 80;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
						case 1:
							{
								this.state = 80;
								this._errHandler.sync(this);
								switch (this._input.LA(1)) {
									case 1:
										{
											this.state = 75;
											this.match(RollTableParser.FULL_CHAR);
										}
										break;
									case 15:
										{
											this.state = 76;
											this.match(RollTableParser.VBAR);
										}
										break;
									case 16:
										{
											this.state = 77;
											this.match(RollTableParser.COLON);
										}
										break;
									case 12:
										{
											this.state = 78;
											this.rollPossibility();
										}
										break;
									case 14:
										{
											this.state = 79;
											this.quotedText();
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
					this.state = 82;
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
	public quotedText(): QuotedTextContext {
		let localctx: QuotedTextContext = new QuotedTextContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, RollTableParser.RULE_quotedText);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 84;
				this.match(RollTableParser.QUOTE);
				this.state = 92;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((_la & ~0x1f) === 0 && ((1 << _la) & 102418) !== 0) {
					{
						this.state = 90;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
							case 1:
								{
									this.state = 85;
									this.match(RollTableParser.FULL_CHAR);
								}
								break;
							case 15:
								{
									this.state = 86;
									this.match(RollTableParser.VBAR);
								}
								break;
							case 16:
								{
									this.state = 87;
									this.match(RollTableParser.COLON);
								}
								break;
							case 4:
								{
									this.state = 88;
									this.match(RollTableParser.NEWLINE);
								}
								break;
							case 12:
								{
									this.state = 89;
									this.rollPossibility();
								}
								break;
							default:
								throw new NoViableAltException(this);
						}
					}
					this.state = 94;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 95;
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
		4, 1, 18, 98, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7,
		6, 2, 7, 7, 7, 1, 0, 1, 0, 5, 0, 19, 8, 0, 10, 0, 12, 0, 22, 9, 0, 1, 0, 1, 0, 1, 1, 1, 1, 3, 1,
		28, 8, 1, 1, 2, 1, 2, 1, 2, 1, 2, 3, 2, 34, 8, 2, 1, 2, 1, 2, 1, 2, 5, 2, 39, 8, 2, 10, 2, 12,
		2, 42, 9, 2, 1, 2, 1, 2, 1, 2, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 51, 8, 3, 1, 3, 3, 3, 54, 8, 3, 1,
		3, 4, 3, 57, 8, 3, 11, 3, 12, 3, 58, 1, 3, 1, 3, 1, 4, 4, 4, 64, 8, 4, 11, 4, 12, 4, 65, 1, 5,
		1, 5, 1, 5, 1, 5, 4, 5, 72, 8, 5, 11, 5, 12, 5, 73, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 4, 6, 81, 8,
		6, 11, 6, 12, 6, 82, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 5, 7, 91, 8, 7, 10, 7, 12, 7, 94, 9, 7,
		1, 7, 1, 7, 1, 7, 0, 0, 8, 0, 2, 4, 6, 8, 10, 12, 14, 0, 1, 3, 0, 1, 1, 4, 4, 14, 16, 112, 0,
		20, 1, 0, 0, 0, 2, 27, 1, 0, 0, 0, 4, 29, 1, 0, 0, 0, 6, 46, 1, 0, 0, 0, 8, 63, 1, 0, 0, 0, 10,
		71, 1, 0, 0, 0, 12, 80, 1, 0, 0, 0, 14, 84, 1, 0, 0, 0, 16, 19, 3, 8, 4, 0, 17, 19, 3, 2, 1, 0,
		18, 16, 1, 0, 0, 0, 18, 17, 1, 0, 0, 0, 19, 22, 1, 0, 0, 0, 20, 18, 1, 0, 0, 0, 20, 21, 1, 0, 0,
		0, 21, 23, 1, 0, 0, 0, 22, 20, 1, 0, 0, 0, 23, 24, 5, 0, 0, 1, 24, 1, 1, 0, 0, 0, 25, 28, 3, 4,
		2, 0, 26, 28, 3, 6, 3, 0, 27, 25, 1, 0, 0, 0, 27, 26, 1, 0, 0, 0, 28, 3, 1, 0, 0, 0, 29, 33, 5,
		12, 0, 0, 30, 31, 3, 10, 5, 0, 31, 32, 5, 16, 0, 0, 32, 34, 1, 0, 0, 0, 33, 30, 1, 0, 0, 0, 33,
		34, 1, 0, 0, 0, 34, 40, 1, 0, 0, 0, 35, 36, 3, 10, 5, 0, 36, 37, 5, 15, 0, 0, 37, 39, 1, 0, 0,
		0, 38, 35, 1, 0, 0, 0, 39, 42, 1, 0, 0, 0, 40, 38, 1, 0, 0, 0, 40, 41, 1, 0, 0, 0, 41, 43, 1, 0,
		0, 0, 42, 40, 1, 0, 0, 0, 43, 44, 3, 10, 5, 0, 44, 45, 5, 13, 0, 0, 45, 5, 1, 0, 0, 0, 46, 50,
		5, 17, 0, 0, 47, 48, 3, 12, 6, 0, 48, 49, 5, 16, 0, 0, 49, 51, 1, 0, 0, 0, 50, 47, 1, 0, 0, 0,
		50, 51, 1, 0, 0, 0, 51, 56, 1, 0, 0, 0, 52, 54, 3, 12, 6, 0, 53, 52, 1, 0, 0, 0, 53, 54, 1, 0,
		0, 0, 54, 55, 1, 0, 0, 0, 55, 57, 5, 4, 0, 0, 56, 53, 1, 0, 0, 0, 57, 58, 1, 0, 0, 0, 58, 56, 1,
		0, 0, 0, 58, 59, 1, 0, 0, 0, 59, 60, 1, 0, 0, 0, 60, 61, 5, 17, 0, 0, 61, 7, 1, 0, 0, 0, 62, 64,
		7, 0, 0, 0, 63, 62, 1, 0, 0, 0, 64, 65, 1, 0, 0, 0, 65, 63, 1, 0, 0, 0, 65, 66, 1, 0, 0, 0, 66,
		9, 1, 0, 0, 0, 67, 72, 5, 1, 0, 0, 68, 72, 5, 4, 0, 0, 69, 72, 3, 4, 2, 0, 70, 72, 3, 14, 7, 0,
		71, 67, 1, 0, 0, 0, 71, 68, 1, 0, 0, 0, 71, 69, 1, 0, 0, 0, 71, 70, 1, 0, 0, 0, 72, 73, 1, 0, 0,
		0, 73, 71, 1, 0, 0, 0, 73, 74, 1, 0, 0, 0, 74, 11, 1, 0, 0, 0, 75, 81, 5, 1, 0, 0, 76, 81, 5,
		15, 0, 0, 77, 81, 5, 16, 0, 0, 78, 81, 3, 4, 2, 0, 79, 81, 3, 14, 7, 0, 80, 75, 1, 0, 0, 0, 80,
		76, 1, 0, 0, 0, 80, 77, 1, 0, 0, 0, 80, 78, 1, 0, 0, 0, 80, 79, 1, 0, 0, 0, 81, 82, 1, 0, 0, 0,
		82, 80, 1, 0, 0, 0, 82, 83, 1, 0, 0, 0, 83, 13, 1, 0, 0, 0, 84, 92, 5, 14, 0, 0, 85, 91, 5, 1,
		0, 0, 86, 91, 5, 15, 0, 0, 87, 91, 5, 16, 0, 0, 88, 91, 5, 4, 0, 0, 89, 91, 3, 4, 2, 0, 90, 85,
		1, 0, 0, 0, 90, 86, 1, 0, 0, 0, 90, 87, 1, 0, 0, 0, 90, 88, 1, 0, 0, 0, 90, 89, 1, 0, 0, 0, 91,
		94, 1, 0, 0, 0, 92, 90, 1, 0, 0, 0, 92, 93, 1, 0, 0, 0, 93, 95, 1, 0, 0, 0, 94, 92, 1, 0, 0, 0,
		95, 96, 5, 14, 0, 0, 96, 15, 1, 0, 0, 0, 15, 18, 20, 27, 33, 40, 50, 53, 58, 65, 71, 73, 80, 82,
		90, 92
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
	public rollPossibility_list(): RollPossibilityContext[] {
		return this.getTypedRuleContexts(RollPossibilityContext) as RollPossibilityContext[];
	}
	public rollPossibility(i: number): RollPossibilityContext {
		return this.getTypedRuleContext(RollPossibilityContext, i) as RollPossibilityContext;
	}
	public quotedText_list(): QuotedTextContext[] {
		return this.getTypedRuleContexts(QuotedTextContext) as QuotedTextContext[];
	}
	public quotedText(i: number): QuotedTextContext {
		return this.getTypedRuleContext(QuotedTextContext, i) as QuotedTextContext;
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
	public rollPossibility_list(): RollPossibilityContext[] {
		return this.getTypedRuleContexts(RollPossibilityContext) as RollPossibilityContext[];
	}
	public rollPossibility(i: number): RollPossibilityContext {
		return this.getTypedRuleContext(RollPossibilityContext, i) as RollPossibilityContext;
	}
	public quotedText_list(): QuotedTextContext[] {
		return this.getTypedRuleContexts(QuotedTextContext) as QuotedTextContext[];
	}
	public quotedText(i: number): QuotedTextContext {
		return this.getTypedRuleContext(QuotedTextContext, i) as QuotedTextContext;
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
	public NEWLINE_list(): TerminalNode[] {
		return this.getTokens(RollTableParser.NEWLINE);
	}
	public NEWLINE(i: number): TerminalNode {
		return this.getToken(RollTableParser.NEWLINE, i);
	}
	public rollPossibility_list(): RollPossibilityContext[] {
		return this.getTypedRuleContexts(RollPossibilityContext) as RollPossibilityContext[];
	}
	public rollPossibility(i: number): RollPossibilityContext {
		return this.getTypedRuleContext(RollPossibilityContext, i) as RollPossibilityContext;
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
