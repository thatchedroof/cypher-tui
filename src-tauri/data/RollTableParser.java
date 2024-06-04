// Generated from RollTable.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class RollTableParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		FULL_CHAR=1, ESCAPED_NEWLINE=2, NEWLINE_CHAR=3, NEWLINE=4, ESCAPED_BACKSLASH=5, 
		ESCAPED_LBRACE=6, ESCAPED_RBRACE=7, ESCAPED_DASH=8, ESCAPED_QUOTE=9, ESCAPED_VBAR=10, 
		ESCAPED_COLON=11, LBRACE=12, RBRACE=13, QUOTE=14, VBAR=15, COLON=16, DASHES=17, 
		CHAR=18;
	public static final int
		RULE_prog = 0, RULE_possibility = 1, RULE_rollPossibility = 2, RULE_blockPossibility = 3, 
		RULE_text = 4, RULE_rollPossibilityText = 5, RULE_blockPossibilityText = 6, 
		RULE_quotedText = 7;
	private static String[] makeRuleNames() {
		return new String[] {
			"prog", "possibility", "rollPossibility", "blockPossibility", "text", 
			"rollPossibilityText", "blockPossibilityText", "quotedText"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, "'\\n'", null, "'\\\\'", "'\\{'", "'\\}'", "'\\-'", 
			"'\\\"'", "'\\|'", "'\\:'", "'{'", "'}'", "'\"'", "'|'", "':'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "FULL_CHAR", "ESCAPED_NEWLINE", "NEWLINE_CHAR", "NEWLINE", "ESCAPED_BACKSLASH", 
			"ESCAPED_LBRACE", "ESCAPED_RBRACE", "ESCAPED_DASH", "ESCAPED_QUOTE", 
			"ESCAPED_VBAR", "ESCAPED_COLON", "LBRACE", "RBRACE", "QUOTE", "VBAR", 
			"COLON", "DASHES", "CHAR"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "RollTable.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public RollTableParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(RollTableParser.EOF, 0); }
		public List<TextContext> text() {
			return getRuleContexts(TextContext.class);
		}
		public TextContext text(int i) {
			return getRuleContext(TextContext.class,i);
		}
		public List<PossibilityContext> possibility() {
			return getRuleContexts(PossibilityContext.class);
		}
		public PossibilityContext possibility(int i) {
			return getRuleContext(PossibilityContext.class,i);
		}
		public ProgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prog; }
	}

	public final ProgContext prog() throws RecognitionException {
		ProgContext _localctx = new ProgContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_prog);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(20);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 249874L) != 0)) {
				{
				setState(18);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case FULL_CHAR:
				case NEWLINE:
				case QUOTE:
				case VBAR:
				case COLON:
					{
					setState(16);
					text();
					}
					break;
				case LBRACE:
				case DASHES:
					{
					setState(17);
					possibility();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(22);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(23);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PossibilityContext extends ParserRuleContext {
		public RollPossibilityContext rollPossibility() {
			return getRuleContext(RollPossibilityContext.class,0);
		}
		public BlockPossibilityContext blockPossibility() {
			return getRuleContext(BlockPossibilityContext.class,0);
		}
		public PossibilityContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_possibility; }
	}

	public final PossibilityContext possibility() throws RecognitionException {
		PossibilityContext _localctx = new PossibilityContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_possibility);
		try {
			setState(27);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LBRACE:
				enterOuterAlt(_localctx, 1);
				{
				setState(25);
				rollPossibility();
				}
				break;
			case DASHES:
				enterOuterAlt(_localctx, 2);
				{
				setState(26);
				blockPossibility();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RollPossibilityContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(RollTableParser.LBRACE, 0); }
		public List<RollPossibilityTextContext> rollPossibilityText() {
			return getRuleContexts(RollPossibilityTextContext.class);
		}
		public RollPossibilityTextContext rollPossibilityText(int i) {
			return getRuleContext(RollPossibilityTextContext.class,i);
		}
		public TerminalNode RBRACE() { return getToken(RollTableParser.RBRACE, 0); }
		public TerminalNode COLON() { return getToken(RollTableParser.COLON, 0); }
		public List<TerminalNode> VBAR() { return getTokens(RollTableParser.VBAR); }
		public TerminalNode VBAR(int i) {
			return getToken(RollTableParser.VBAR, i);
		}
		public RollPossibilityContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rollPossibility; }
	}

	public final RollPossibilityContext rollPossibility() throws RecognitionException {
		RollPossibilityContext _localctx = new RollPossibilityContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_rollPossibility);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(29);
			match(LBRACE);
			setState(33);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				{
				setState(30);
				rollPossibilityText();
				setState(31);
				match(COLON);
				}
				break;
			}
			setState(40);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(35);
					rollPossibilityText();
					setState(36);
					match(VBAR);
					}
					} 
				}
				setState(42);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			}
			setState(43);
			rollPossibilityText();
			setState(44);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BlockPossibilityContext extends ParserRuleContext {
		public List<TerminalNode> DASHES() { return getTokens(RollTableParser.DASHES); }
		public TerminalNode DASHES(int i) {
			return getToken(RollTableParser.DASHES, i);
		}
		public List<BlockPossibilityTextContext> blockPossibilityText() {
			return getRuleContexts(BlockPossibilityTextContext.class);
		}
		public BlockPossibilityTextContext blockPossibilityText(int i) {
			return getRuleContext(BlockPossibilityTextContext.class,i);
		}
		public TerminalNode COLON() { return getToken(RollTableParser.COLON, 0); }
		public List<TerminalNode> NEWLINE() { return getTokens(RollTableParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(RollTableParser.NEWLINE, i);
		}
		public BlockPossibilityContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_blockPossibility; }
	}

	public final BlockPossibilityContext blockPossibility() throws RecognitionException {
		BlockPossibilityContext _localctx = new BlockPossibilityContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_blockPossibility);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(46);
			match(DASHES);
			setState(50);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				{
				setState(47);
				blockPossibilityText();
				setState(48);
				match(COLON);
				}
				break;
			}
			setState(56); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(53);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 118786L) != 0)) {
					{
					setState(52);
					blockPossibilityText();
					}
				}

				setState(55);
				match(NEWLINE);
				}
				}
				setState(58); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 118802L) != 0) );
			setState(60);
			match(DASHES);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TextContext extends ParserRuleContext {
		public List<TerminalNode> FULL_CHAR() { return getTokens(RollTableParser.FULL_CHAR); }
		public TerminalNode FULL_CHAR(int i) {
			return getToken(RollTableParser.FULL_CHAR, i);
		}
		public List<TerminalNode> VBAR() { return getTokens(RollTableParser.VBAR); }
		public TerminalNode VBAR(int i) {
			return getToken(RollTableParser.VBAR, i);
		}
		public List<TerminalNode> QUOTE() { return getTokens(RollTableParser.QUOTE); }
		public TerminalNode QUOTE(int i) {
			return getToken(RollTableParser.QUOTE, i);
		}
		public List<TerminalNode> COLON() { return getTokens(RollTableParser.COLON); }
		public TerminalNode COLON(int i) {
			return getToken(RollTableParser.COLON, i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(RollTableParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(RollTableParser.NEWLINE, i);
		}
		public TextContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_text; }
	}

	public final TextContext text() throws RecognitionException {
		TextContext _localctx = new TextContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_text);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(63); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(62);
					_la = _input.LA(1);
					if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 114706L) != 0)) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(65); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RollPossibilityTextContext extends ParserRuleContext {
		public List<TerminalNode> FULL_CHAR() { return getTokens(RollTableParser.FULL_CHAR); }
		public TerminalNode FULL_CHAR(int i) {
			return getToken(RollTableParser.FULL_CHAR, i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(RollTableParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(RollTableParser.NEWLINE, i);
		}
		public List<RollPossibilityContext> rollPossibility() {
			return getRuleContexts(RollPossibilityContext.class);
		}
		public RollPossibilityContext rollPossibility(int i) {
			return getRuleContext(RollPossibilityContext.class,i);
		}
		public List<QuotedTextContext> quotedText() {
			return getRuleContexts(QuotedTextContext.class);
		}
		public QuotedTextContext quotedText(int i) {
			return getRuleContext(QuotedTextContext.class,i);
		}
		public RollPossibilityTextContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rollPossibilityText; }
	}

	public final RollPossibilityTextContext rollPossibilityText() throws RecognitionException {
		RollPossibilityTextContext _localctx = new RollPossibilityTextContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_rollPossibilityText);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(71); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				setState(71);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case FULL_CHAR:
					{
					setState(67);
					match(FULL_CHAR);
					}
					break;
				case NEWLINE:
					{
					setState(68);
					match(NEWLINE);
					}
					break;
				case LBRACE:
					{
					setState(69);
					rollPossibility();
					}
					break;
				case QUOTE:
					{
					setState(70);
					quotedText();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(73); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 20498L) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BlockPossibilityTextContext extends ParserRuleContext {
		public List<TerminalNode> FULL_CHAR() { return getTokens(RollTableParser.FULL_CHAR); }
		public TerminalNode FULL_CHAR(int i) {
			return getToken(RollTableParser.FULL_CHAR, i);
		}
		public List<TerminalNode> VBAR() { return getTokens(RollTableParser.VBAR); }
		public TerminalNode VBAR(int i) {
			return getToken(RollTableParser.VBAR, i);
		}
		public List<TerminalNode> COLON() { return getTokens(RollTableParser.COLON); }
		public TerminalNode COLON(int i) {
			return getToken(RollTableParser.COLON, i);
		}
		public List<RollPossibilityContext> rollPossibility() {
			return getRuleContexts(RollPossibilityContext.class);
		}
		public RollPossibilityContext rollPossibility(int i) {
			return getRuleContext(RollPossibilityContext.class,i);
		}
		public List<QuotedTextContext> quotedText() {
			return getRuleContexts(QuotedTextContext.class);
		}
		public QuotedTextContext quotedText(int i) {
			return getRuleContext(QuotedTextContext.class,i);
		}
		public BlockPossibilityTextContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_blockPossibilityText; }
	}

	public final BlockPossibilityTextContext blockPossibilityText() throws RecognitionException {
		BlockPossibilityTextContext _localctx = new BlockPossibilityTextContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_blockPossibilityText);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(80); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					setState(80);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case FULL_CHAR:
						{
						setState(75);
						match(FULL_CHAR);
						}
						break;
					case VBAR:
						{
						setState(76);
						match(VBAR);
						}
						break;
					case COLON:
						{
						setState(77);
						match(COLON);
						}
						break;
					case LBRACE:
						{
						setState(78);
						rollPossibility();
						}
						break;
					case QUOTE:
						{
						setState(79);
						quotedText();
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
				setState(82); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class QuotedTextContext extends ParserRuleContext {
		public List<TerminalNode> QUOTE() { return getTokens(RollTableParser.QUOTE); }
		public TerminalNode QUOTE(int i) {
			return getToken(RollTableParser.QUOTE, i);
		}
		public List<TerminalNode> FULL_CHAR() { return getTokens(RollTableParser.FULL_CHAR); }
		public TerminalNode FULL_CHAR(int i) {
			return getToken(RollTableParser.FULL_CHAR, i);
		}
		public List<TerminalNode> VBAR() { return getTokens(RollTableParser.VBAR); }
		public TerminalNode VBAR(int i) {
			return getToken(RollTableParser.VBAR, i);
		}
		public List<TerminalNode> COLON() { return getTokens(RollTableParser.COLON); }
		public TerminalNode COLON(int i) {
			return getToken(RollTableParser.COLON, i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(RollTableParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(RollTableParser.NEWLINE, i);
		}
		public List<RollPossibilityContext> rollPossibility() {
			return getRuleContexts(RollPossibilityContext.class);
		}
		public RollPossibilityContext rollPossibility(int i) {
			return getRuleContext(RollPossibilityContext.class,i);
		}
		public QuotedTextContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_quotedText; }
	}

	public final QuotedTextContext quotedText() throws RecognitionException {
		QuotedTextContext _localctx = new QuotedTextContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_quotedText);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(84);
			match(QUOTE);
			setState(92);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 102418L) != 0)) {
				{
				setState(90);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case FULL_CHAR:
					{
					setState(85);
					match(FULL_CHAR);
					}
					break;
				case VBAR:
					{
					setState(86);
					match(VBAR);
					}
					break;
				case COLON:
					{
					setState(87);
					match(COLON);
					}
					break;
				case NEWLINE:
					{
					setState(88);
					match(NEWLINE);
					}
					break;
				case LBRACE:
					{
					setState(89);
					rollPossibility();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(94);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(95);
			match(QUOTE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0012b\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0001"+
		"\u0000\u0001\u0000\u0005\u0000\u0013\b\u0000\n\u0000\f\u0000\u0016\t\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0003\u0001\u001c\b\u0001"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002\"\b\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0005\u0002\'\b\u0002\n\u0002\f\u0002"+
		"*\t\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0003\u00033\b\u0003\u0001\u0003\u0003\u0003"+
		"6\b\u0003\u0001\u0003\u0004\u00039\b\u0003\u000b\u0003\f\u0003:\u0001"+
		"\u0003\u0001\u0003\u0001\u0004\u0004\u0004@\b\u0004\u000b\u0004\f\u0004"+
		"A\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0004\u0005H\b\u0005"+
		"\u000b\u0005\f\u0005I\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0004\u0006Q\b\u0006\u000b\u0006\f\u0006R\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0005\u0007[\b"+
		"\u0007\n\u0007\f\u0007^\t\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0000"+
		"\u0000\b\u0000\u0002\u0004\u0006\b\n\f\u000e\u0000\u0001\u0003\u0000\u0001"+
		"\u0001\u0004\u0004\u000e\u0010p\u0000\u0014\u0001\u0000\u0000\u0000\u0002"+
		"\u001b\u0001\u0000\u0000\u0000\u0004\u001d\u0001\u0000\u0000\u0000\u0006"+
		".\u0001\u0000\u0000\u0000\b?\u0001\u0000\u0000\u0000\nG\u0001\u0000\u0000"+
		"\u0000\fP\u0001\u0000\u0000\u0000\u000eT\u0001\u0000\u0000\u0000\u0010"+
		"\u0013\u0003\b\u0004\u0000\u0011\u0013\u0003\u0002\u0001\u0000\u0012\u0010"+
		"\u0001\u0000\u0000\u0000\u0012\u0011\u0001\u0000\u0000\u0000\u0013\u0016"+
		"\u0001\u0000\u0000\u0000\u0014\u0012\u0001\u0000\u0000\u0000\u0014\u0015"+
		"\u0001\u0000\u0000\u0000\u0015\u0017\u0001\u0000\u0000\u0000\u0016\u0014"+
		"\u0001\u0000\u0000\u0000\u0017\u0018\u0005\u0000\u0000\u0001\u0018\u0001"+
		"\u0001\u0000\u0000\u0000\u0019\u001c\u0003\u0004\u0002\u0000\u001a\u001c"+
		"\u0003\u0006\u0003\u0000\u001b\u0019\u0001\u0000\u0000\u0000\u001b\u001a"+
		"\u0001\u0000\u0000\u0000\u001c\u0003\u0001\u0000\u0000\u0000\u001d!\u0005"+
		"\f\u0000\u0000\u001e\u001f\u0003\n\u0005\u0000\u001f \u0005\u0010\u0000"+
		"\u0000 \"\u0001\u0000\u0000\u0000!\u001e\u0001\u0000\u0000\u0000!\"\u0001"+
		"\u0000\u0000\u0000\"(\u0001\u0000\u0000\u0000#$\u0003\n\u0005\u0000$%"+
		"\u0005\u000f\u0000\u0000%\'\u0001\u0000\u0000\u0000&#\u0001\u0000\u0000"+
		"\u0000\'*\u0001\u0000\u0000\u0000(&\u0001\u0000\u0000\u0000()\u0001\u0000"+
		"\u0000\u0000)+\u0001\u0000\u0000\u0000*(\u0001\u0000\u0000\u0000+,\u0003"+
		"\n\u0005\u0000,-\u0005\r\u0000\u0000-\u0005\u0001\u0000\u0000\u0000.2"+
		"\u0005\u0011\u0000\u0000/0\u0003\f\u0006\u000001\u0005\u0010\u0000\u0000"+
		"13\u0001\u0000\u0000\u00002/\u0001\u0000\u0000\u000023\u0001\u0000\u0000"+
		"\u000038\u0001\u0000\u0000\u000046\u0003\f\u0006\u000054\u0001\u0000\u0000"+
		"\u000056\u0001\u0000\u0000\u000067\u0001\u0000\u0000\u000079\u0005\u0004"+
		"\u0000\u000085\u0001\u0000\u0000\u00009:\u0001\u0000\u0000\u0000:8\u0001"+
		"\u0000\u0000\u0000:;\u0001\u0000\u0000\u0000;<\u0001\u0000\u0000\u0000"+
		"<=\u0005\u0011\u0000\u0000=\u0007\u0001\u0000\u0000\u0000>@\u0007\u0000"+
		"\u0000\u0000?>\u0001\u0000\u0000\u0000@A\u0001\u0000\u0000\u0000A?\u0001"+
		"\u0000\u0000\u0000AB\u0001\u0000\u0000\u0000B\t\u0001\u0000\u0000\u0000"+
		"CH\u0005\u0001\u0000\u0000DH\u0005\u0004\u0000\u0000EH\u0003\u0004\u0002"+
		"\u0000FH\u0003\u000e\u0007\u0000GC\u0001\u0000\u0000\u0000GD\u0001\u0000"+
		"\u0000\u0000GE\u0001\u0000\u0000\u0000GF\u0001\u0000\u0000\u0000HI\u0001"+
		"\u0000\u0000\u0000IG\u0001\u0000\u0000\u0000IJ\u0001\u0000\u0000\u0000"+
		"J\u000b\u0001\u0000\u0000\u0000KQ\u0005\u0001\u0000\u0000LQ\u0005\u000f"+
		"\u0000\u0000MQ\u0005\u0010\u0000\u0000NQ\u0003\u0004\u0002\u0000OQ\u0003"+
		"\u000e\u0007\u0000PK\u0001\u0000\u0000\u0000PL\u0001\u0000\u0000\u0000"+
		"PM\u0001\u0000\u0000\u0000PN\u0001\u0000\u0000\u0000PO\u0001\u0000\u0000"+
		"\u0000QR\u0001\u0000\u0000\u0000RP\u0001\u0000\u0000\u0000RS\u0001\u0000"+
		"\u0000\u0000S\r\u0001\u0000\u0000\u0000T\\\u0005\u000e\u0000\u0000U[\u0005"+
		"\u0001\u0000\u0000V[\u0005\u000f\u0000\u0000W[\u0005\u0010\u0000\u0000"+
		"X[\u0005\u0004\u0000\u0000Y[\u0003\u0004\u0002\u0000ZU\u0001\u0000\u0000"+
		"\u0000ZV\u0001\u0000\u0000\u0000ZW\u0001\u0000\u0000\u0000ZX\u0001\u0000"+
		"\u0000\u0000ZY\u0001\u0000\u0000\u0000[^\u0001\u0000\u0000\u0000\\Z\u0001"+
		"\u0000\u0000\u0000\\]\u0001\u0000\u0000\u0000]_\u0001\u0000\u0000\u0000"+
		"^\\\u0001\u0000\u0000\u0000_`\u0005\u000e\u0000\u0000`\u000f\u0001\u0000"+
		"\u0000\u0000\u000f\u0012\u0014\u001b!(25:AGIPRZ\\";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}