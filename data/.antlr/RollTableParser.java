// Generated from c:/Users/tnert/OneDrive/Documents/GitHub/cypher-tui/src-tauri/data/RollTable.g4 by ANTLR 4.13.1
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
		ESCAPED_COLON=11, ESCAPED_LPAREN=12, ESCAPED_RPAREN=13, LBRACE=14, RBRACE=15, 
		QUOTE=16, VBAR=17, COLON=18, LPAREN=19, RPAREN=20, DASHES=21, CHAR=22;
	public static final int
		RULE_prog = 0, RULE_possibility = 1, RULE_rollPossibility = 2, RULE_blockPossibility = 3, 
		RULE_parenthetical = 4, RULE_text = 5, RULE_rollPossibilityText = 6, RULE_blockPossibilityText = 7, 
		RULE_quotedText = 8;
	private static String[] makeRuleNames() {
		return new String[] {
			"prog", "possibility", "rollPossibility", "blockPossibility", "parenthetical", 
			"text", "rollPossibilityText", "blockPossibilityText", "quotedText"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, "'\\n'", null, "'\\\\'", "'\\{'", "'\\}'", "'\\-'", 
			"'\\\"'", "'\\|'", "'\\:'", "'\\('", "'\\)'", "'{'", "'}'", "'\"'", "'|'", 
			"':'", "'('", "')'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "FULL_CHAR", "ESCAPED_NEWLINE", "NEWLINE_CHAR", "NEWLINE", "ESCAPED_BACKSLASH", 
			"ESCAPED_LBRACE", "ESCAPED_RBRACE", "ESCAPED_DASH", "ESCAPED_QUOTE", 
			"ESCAPED_VBAR", "ESCAPED_COLON", "ESCAPED_LPAREN", "ESCAPED_RPAREN", 
			"LBRACE", "RBRACE", "QUOTE", "VBAR", "COLON", "LPAREN", "RPAREN", "DASHES", 
			"CHAR"
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
			setState(22);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4145170L) != 0)) {
				{
				setState(20);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case FULL_CHAR:
				case NEWLINE:
				case QUOTE:
				case VBAR:
				case COLON:
				case LPAREN:
				case RPAREN:
					{
					setState(18);
					text();
					}
					break;
				case LBRACE:
				case DASHES:
					{
					setState(19);
					possibility();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(24);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(25);
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
			setState(29);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LBRACE:
				enterOuterAlt(_localctx, 1);
				{
				setState(27);
				rollPossibility();
				}
				break;
			case DASHES:
				enterOuterAlt(_localctx, 2);
				{
				setState(28);
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
		public List<ParentheticalContext> parenthetical() {
			return getRuleContexts(ParentheticalContext.class);
		}
		public ParentheticalContext parenthetical(int i) {
			return getRuleContext(ParentheticalContext.class,i);
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
			setState(31);
			match(LBRACE);
			setState(35);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				{
				setState(32);
				rollPossibilityText();
				setState(33);
				match(COLON);
				}
				break;
			}
			setState(45);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(38);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
					case 1:
						{
						setState(37);
						parenthetical();
						}
						break;
					}
					setState(40);
					rollPossibilityText();
					setState(41);
					match(VBAR);
					}
					} 
				}
				setState(47);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			}
			setState(49);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				{
				setState(48);
				parenthetical();
				}
				break;
			}
			setState(51);
			rollPossibilityText();
			setState(52);
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
		public List<ParentheticalContext> parenthetical() {
			return getRuleContexts(ParentheticalContext.class);
		}
		public ParentheticalContext parenthetical(int i) {
			return getRuleContext(ParentheticalContext.class,i);
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
			setState(54);
			match(DASHES);
			setState(58);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				{
				setState(55);
				blockPossibilityText();
				setState(56);
				match(COLON);
				}
				break;
			}
			setState(67); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(64);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 2048002L) != 0)) {
					{
					setState(61);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
					case 1:
						{
						setState(60);
						parenthetical();
						}
						break;
					}
					setState(63);
					blockPossibilityText();
					}
				}

				setState(66);
				match(NEWLINE);
				}
				}
				setState(69); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 2048018L) != 0) );
			setState(71);
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
	public static class ParentheticalContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(RollTableParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(RollTableParser.RPAREN, 0); }
		public List<TerminalNode> FULL_CHAR() { return getTokens(RollTableParser.FULL_CHAR); }
		public TerminalNode FULL_CHAR(int i) {
			return getToken(RollTableParser.FULL_CHAR, i);
		}
		public ParentheticalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parenthetical; }
	}

	public final ParentheticalContext parenthetical() throws RecognitionException {
		ParentheticalContext _localctx = new ParentheticalContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_parenthetical);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(73);
			match(LPAREN);
			setState(75); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(74);
				match(FULL_CHAR);
				}
				}
				setState(77); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==FULL_CHAR );
			setState(79);
			match(RPAREN);
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
		public List<TerminalNode> LPAREN() { return getTokens(RollTableParser.LPAREN); }
		public TerminalNode LPAREN(int i) {
			return getToken(RollTableParser.LPAREN, i);
		}
		public List<TerminalNode> RPAREN() { return getTokens(RollTableParser.RPAREN); }
		public TerminalNode RPAREN(int i) {
			return getToken(RollTableParser.RPAREN, i);
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
		enterRule(_localctx, 10, RULE_text);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(82); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(81);
					_la = _input.LA(1);
					if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 2031634L) != 0)) ) {
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
				setState(84); 
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
	public static class RollPossibilityTextContext extends ParserRuleContext {
		public List<TerminalNode> FULL_CHAR() { return getTokens(RollTableParser.FULL_CHAR); }
		public TerminalNode FULL_CHAR(int i) {
			return getToken(RollTableParser.FULL_CHAR, i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(RollTableParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(RollTableParser.NEWLINE, i);
		}
		public List<TerminalNode> LPAREN() { return getTokens(RollTableParser.LPAREN); }
		public TerminalNode LPAREN(int i) {
			return getToken(RollTableParser.LPAREN, i);
		}
		public List<TerminalNode> RPAREN() { return getTokens(RollTableParser.RPAREN); }
		public TerminalNode RPAREN(int i) {
			return getToken(RollTableParser.RPAREN, i);
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
		enterRule(_localctx, 12, RULE_rollPossibilityText);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(92); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				setState(92);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case FULL_CHAR:
					{
					setState(86);
					match(FULL_CHAR);
					}
					break;
				case NEWLINE:
					{
					setState(87);
					match(NEWLINE);
					}
					break;
				case LPAREN:
					{
					setState(88);
					match(LPAREN);
					}
					break;
				case RPAREN:
					{
					setState(89);
					match(RPAREN);
					}
					break;
				case LBRACE:
					{
					setState(90);
					rollPossibility();
					}
					break;
				case QUOTE:
					{
					setState(91);
					quotedText();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(94); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 1654802L) != 0) );
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
		public List<TerminalNode> LPAREN() { return getTokens(RollTableParser.LPAREN); }
		public TerminalNode LPAREN(int i) {
			return getToken(RollTableParser.LPAREN, i);
		}
		public List<TerminalNode> RPAREN() { return getTokens(RollTableParser.RPAREN); }
		public TerminalNode RPAREN(int i) {
			return getToken(RollTableParser.RPAREN, i);
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
		enterRule(_localctx, 14, RULE_blockPossibilityText);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(103); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					setState(103);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case FULL_CHAR:
						{
						setState(96);
						match(FULL_CHAR);
						}
						break;
					case VBAR:
						{
						setState(97);
						match(VBAR);
						}
						break;
					case COLON:
						{
						setState(98);
						match(COLON);
						}
						break;
					case LPAREN:
						{
						setState(99);
						match(LPAREN);
						}
						break;
					case RPAREN:
						{
						setState(100);
						match(RPAREN);
						}
						break;
					case LBRACE:
						{
						setState(101);
						rollPossibility();
						}
						break;
					case QUOTE:
						{
						setState(102);
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
				setState(105); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
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
		public List<TerminalNode> LPAREN() { return getTokens(RollTableParser.LPAREN); }
		public TerminalNode LPAREN(int i) {
			return getToken(RollTableParser.LPAREN, i);
		}
		public List<TerminalNode> RPAREN() { return getTokens(RollTableParser.RPAREN); }
		public TerminalNode RPAREN(int i) {
			return getToken(RollTableParser.RPAREN, i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(RollTableParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(RollTableParser.NEWLINE, i);
		}
		public QuotedTextContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_quotedText; }
	}

	public final QuotedTextContext quotedText() throws RecognitionException {
		QuotedTextContext _localctx = new QuotedTextContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_quotedText);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(107);
			match(QUOTE);
			setState(111);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1966098L) != 0)) {
				{
				{
				setState(108);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1966098L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				setState(113);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(114);
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
		"\u0004\u0001\u0016u\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0001\u0000\u0001\u0000\u0005\u0000\u0015\b\u0000\n\u0000\f"+
		"\u0000\u0018\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0003"+
		"\u0001\u001e\b\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0003"+
		"\u0002$\b\u0002\u0001\u0002\u0003\u0002\'\b\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0005\u0002,\b\u0002\n\u0002\f\u0002/\t\u0002\u0001\u0002"+
		"\u0003\u00022\b\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003;\b\u0003\u0001\u0003"+
		"\u0003\u0003>\b\u0003\u0001\u0003\u0003\u0003A\b\u0003\u0001\u0003\u0004"+
		"\u0003D\b\u0003\u000b\u0003\f\u0003E\u0001\u0003\u0001\u0003\u0001\u0004"+
		"\u0001\u0004\u0004\u0004L\b\u0004\u000b\u0004\f\u0004M\u0001\u0004\u0001"+
		"\u0004\u0001\u0005\u0004\u0005S\b\u0005\u000b\u0005\f\u0005T\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0004\u0006"+
		"]\b\u0006\u000b\u0006\f\u0006^\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0004\u0007h\b\u0007\u000b"+
		"\u0007\f\u0007i\u0001\b\u0001\b\u0005\bn\b\b\n\b\f\bq\t\b\u0001\b\u0001"+
		"\b\u0001\b\u0000\u0000\t\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0000"+
		"\u0002\u0003\u0000\u0001\u0001\u0004\u0004\u0010\u0014\u0003\u0000\u0001"+
		"\u0001\u0004\u0004\u0011\u0014\u0086\u0000\u0016\u0001\u0000\u0000\u0000"+
		"\u0002\u001d\u0001\u0000\u0000\u0000\u0004\u001f\u0001\u0000\u0000\u0000"+
		"\u00066\u0001\u0000\u0000\u0000\bI\u0001\u0000\u0000\u0000\nR\u0001\u0000"+
		"\u0000\u0000\f\\\u0001\u0000\u0000\u0000\u000eg\u0001\u0000\u0000\u0000"+
		"\u0010k\u0001\u0000\u0000\u0000\u0012\u0015\u0003\n\u0005\u0000\u0013"+
		"\u0015\u0003\u0002\u0001\u0000\u0014\u0012\u0001\u0000\u0000\u0000\u0014"+
		"\u0013\u0001\u0000\u0000\u0000\u0015\u0018\u0001\u0000\u0000\u0000\u0016"+
		"\u0014\u0001\u0000\u0000\u0000\u0016\u0017\u0001\u0000\u0000\u0000\u0017"+
		"\u0019\u0001\u0000\u0000\u0000\u0018\u0016\u0001\u0000\u0000\u0000\u0019"+
		"\u001a\u0005\u0000\u0000\u0001\u001a\u0001\u0001\u0000\u0000\u0000\u001b"+
		"\u001e\u0003\u0004\u0002\u0000\u001c\u001e\u0003\u0006\u0003\u0000\u001d"+
		"\u001b\u0001\u0000\u0000\u0000\u001d\u001c\u0001\u0000\u0000\u0000\u001e"+
		"\u0003\u0001\u0000\u0000\u0000\u001f#\u0005\u000e\u0000\u0000 !\u0003"+
		"\f\u0006\u0000!\"\u0005\u0012\u0000\u0000\"$\u0001\u0000\u0000\u0000#"+
		" \u0001\u0000\u0000\u0000#$\u0001\u0000\u0000\u0000$-\u0001\u0000\u0000"+
		"\u0000%\'\u0003\b\u0004\u0000&%\u0001\u0000\u0000\u0000&\'\u0001\u0000"+
		"\u0000\u0000\'(\u0001\u0000\u0000\u0000()\u0003\f\u0006\u0000)*\u0005"+
		"\u0011\u0000\u0000*,\u0001\u0000\u0000\u0000+&\u0001\u0000\u0000\u0000"+
		",/\u0001\u0000\u0000\u0000-+\u0001\u0000\u0000\u0000-.\u0001\u0000\u0000"+
		"\u0000.1\u0001\u0000\u0000\u0000/-\u0001\u0000\u0000\u000002\u0003\b\u0004"+
		"\u000010\u0001\u0000\u0000\u000012\u0001\u0000\u0000\u000023\u0001\u0000"+
		"\u0000\u000034\u0003\f\u0006\u000045\u0005\u000f\u0000\u00005\u0005\u0001"+
		"\u0000\u0000\u00006:\u0005\u0015\u0000\u000078\u0003\u000e\u0007\u0000"+
		"89\u0005\u0012\u0000\u00009;\u0001\u0000\u0000\u0000:7\u0001\u0000\u0000"+
		"\u0000:;\u0001\u0000\u0000\u0000;C\u0001\u0000\u0000\u0000<>\u0003\b\u0004"+
		"\u0000=<\u0001\u0000\u0000\u0000=>\u0001\u0000\u0000\u0000>?\u0001\u0000"+
		"\u0000\u0000?A\u0003\u000e\u0007\u0000@=\u0001\u0000\u0000\u0000@A\u0001"+
		"\u0000\u0000\u0000AB\u0001\u0000\u0000\u0000BD\u0005\u0004\u0000\u0000"+
		"C@\u0001\u0000\u0000\u0000DE\u0001\u0000\u0000\u0000EC\u0001\u0000\u0000"+
		"\u0000EF\u0001\u0000\u0000\u0000FG\u0001\u0000\u0000\u0000GH\u0005\u0015"+
		"\u0000\u0000H\u0007\u0001\u0000\u0000\u0000IK\u0005\u0013\u0000\u0000"+
		"JL\u0005\u0001\u0000\u0000KJ\u0001\u0000\u0000\u0000LM\u0001\u0000\u0000"+
		"\u0000MK\u0001\u0000\u0000\u0000MN\u0001\u0000\u0000\u0000NO\u0001\u0000"+
		"\u0000\u0000OP\u0005\u0014\u0000\u0000P\t\u0001\u0000\u0000\u0000QS\u0007"+
		"\u0000\u0000\u0000RQ\u0001\u0000\u0000\u0000ST\u0001\u0000\u0000\u0000"+
		"TR\u0001\u0000\u0000\u0000TU\u0001\u0000\u0000\u0000U\u000b\u0001\u0000"+
		"\u0000\u0000V]\u0005\u0001\u0000\u0000W]\u0005\u0004\u0000\u0000X]\u0005"+
		"\u0013\u0000\u0000Y]\u0005\u0014\u0000\u0000Z]\u0003\u0004\u0002\u0000"+
		"[]\u0003\u0010\b\u0000\\V\u0001\u0000\u0000\u0000\\W\u0001\u0000\u0000"+
		"\u0000\\X\u0001\u0000\u0000\u0000\\Y\u0001\u0000\u0000\u0000\\Z\u0001"+
		"\u0000\u0000\u0000\\[\u0001\u0000\u0000\u0000]^\u0001\u0000\u0000\u0000"+
		"^\\\u0001\u0000\u0000\u0000^_\u0001\u0000\u0000\u0000_\r\u0001\u0000\u0000"+
		"\u0000`h\u0005\u0001\u0000\u0000ah\u0005\u0011\u0000\u0000bh\u0005\u0012"+
		"\u0000\u0000ch\u0005\u0013\u0000\u0000dh\u0005\u0014\u0000\u0000eh\u0003"+
		"\u0004\u0002\u0000fh\u0003\u0010\b\u0000g`\u0001\u0000\u0000\u0000ga\u0001"+
		"\u0000\u0000\u0000gb\u0001\u0000\u0000\u0000gc\u0001\u0000\u0000\u0000"+
		"gd\u0001\u0000\u0000\u0000ge\u0001\u0000\u0000\u0000gf\u0001\u0000\u0000"+
		"\u0000hi\u0001\u0000\u0000\u0000ig\u0001\u0000\u0000\u0000ij\u0001\u0000"+
		"\u0000\u0000j\u000f\u0001\u0000\u0000\u0000ko\u0005\u0010\u0000\u0000"+
		"ln\u0007\u0001\u0000\u0000ml\u0001\u0000\u0000\u0000nq\u0001\u0000\u0000"+
		"\u0000om\u0001\u0000\u0000\u0000op\u0001\u0000\u0000\u0000pr\u0001\u0000"+
		"\u0000\u0000qo\u0001\u0000\u0000\u0000rs\u0005\u0010\u0000\u0000s\u0011"+
		"\u0001\u0000\u0000\u0000\u0012\u0014\u0016\u001d#&-1:=@EMT\\^gio";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}