// Generated from RollTable.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class RollTableLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		FULL_CHAR=1, ESCAPED_NEWLINE=2, NEWLINE_CHAR=3, NEWLINE=4, ESCAPED_BACKSLASH=5, 
		ESCAPED_LBRACE=6, ESCAPED_RBRACE=7, ESCAPED_DASH=8, ESCAPED_QUOTE=9, ESCAPED_VBAR=10, 
		ESCAPED_COLON=11, LBRACE=12, RBRACE=13, QUOTE=14, VBAR=15, COLON=16, DASHES=17, 
		CHAR=18;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"FULL_CHAR", "ESCAPED_NEWLINE", "NEWLINE_CHAR", "NEWLINE", "ESCAPED_BACKSLASH", 
			"ESCAPED_LBRACE", "ESCAPED_RBRACE", "ESCAPED_DASH", "ESCAPED_QUOTE", 
			"ESCAPED_VBAR", "ESCAPED_COLON", "LBRACE", "RBRACE", "QUOTE", "VBAR", 
			"COLON", "DASHES", "CHAR"
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


	public RollTableLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "RollTable.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0012h\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0003\u00000\b\u0000\u0001"+
		"\u0001\u0001\u0001\u0003\u00014\b\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0003\u0003<\b\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001"+
		"\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001"+
		"\r\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0003\u0010e\b\u0010"+
		"\u0001\u0011\u0001\u0011\u0000\u0000\u0012\u0001\u0001\u0003\u0002\u0005"+
		"\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n"+
		"\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011"+
		"#\u0012\u0001\u0000\u0001\u0006\u0000\n\n\r\r\"\"::\\\\{}s\u0000\u0001"+
		"\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005"+
		"\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001"+
		"\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000"+
		"\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000"+
		"\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000"+
		"\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000"+
		"\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000"+
		"\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000"+
		"\u0000\u0000#\u0001\u0000\u0000\u0000\u0001/\u0001\u0000\u0000\u0000\u0003"+
		"1\u0001\u0000\u0000\u0000\u00057\u0001\u0000\u0000\u0000\u0007;\u0001"+
		"\u0000\u0000\u0000\t?\u0001\u0000\u0000\u0000\u000bB\u0001\u0000\u0000"+
		"\u0000\rE\u0001\u0000\u0000\u0000\u000fH\u0001\u0000\u0000\u0000\u0011"+
		"K\u0001\u0000\u0000\u0000\u0013N\u0001\u0000\u0000\u0000\u0015Q\u0001"+
		"\u0000\u0000\u0000\u0017T\u0001\u0000\u0000\u0000\u0019V\u0001\u0000\u0000"+
		"\u0000\u001bX\u0001\u0000\u0000\u0000\u001dZ\u0001\u0000\u0000\u0000\u001f"+
		"\\\u0001\u0000\u0000\u0000!^\u0001\u0000\u0000\u0000#f\u0001\u0000\u0000"+
		"\u0000%0\u0003#\u0011\u0000&0\u0003\t\u0004\u0000\'0\u0003\u000b\u0005"+
		"\u0000(0\u0003\r\u0006\u0000)0\u0003\u000f\u0007\u0000*0\u0003\u0011\b"+
		"\u0000+0\u0003\u0013\t\u0000,0\u0003\u0003\u0001\u0000-0\u0003\u0015\n"+
		"\u0000.0\u0003\u0005\u0002\u0000/%\u0001\u0000\u0000\u0000/&\u0001\u0000"+
		"\u0000\u0000/\'\u0001\u0000\u0000\u0000/(\u0001\u0000\u0000\u0000/)\u0001"+
		"\u0000\u0000\u0000/*\u0001\u0000\u0000\u0000/+\u0001\u0000\u0000\u0000"+
		"/,\u0001\u0000\u0000\u0000/-\u0001\u0000\u0000\u0000/.\u0001\u0000\u0000"+
		"\u00000\u0002\u0001\u0000\u0000\u000013\u0005\\\u0000\u000024\u0005\r"+
		"\u0000\u000032\u0001\u0000\u0000\u000034\u0001\u0000\u0000\u000045\u0001"+
		"\u0000\u0000\u000056\u0005\n\u0000\u00006\u0004\u0001\u0000\u0000\u0000"+
		"78\u0005\\\u0000\u000089\u0005n\u0000\u00009\u0006\u0001\u0000\u0000\u0000"+
		":<\u0005\r\u0000\u0000;:\u0001\u0000\u0000\u0000;<\u0001\u0000\u0000\u0000"+
		"<=\u0001\u0000\u0000\u0000=>\u0005\n\u0000\u0000>\b\u0001\u0000\u0000"+
		"\u0000?@\u0005\\\u0000\u0000@A\u0005\\\u0000\u0000A\n\u0001\u0000\u0000"+
		"\u0000BC\u0005\\\u0000\u0000CD\u0005{\u0000\u0000D\f\u0001\u0000\u0000"+
		"\u0000EF\u0005\\\u0000\u0000FG\u0005}\u0000\u0000G\u000e\u0001\u0000\u0000"+
		"\u0000HI\u0005\\\u0000\u0000IJ\u0005-\u0000\u0000J\u0010\u0001\u0000\u0000"+
		"\u0000KL\u0005\\\u0000\u0000LM\u0005\"\u0000\u0000M\u0012\u0001\u0000"+
		"\u0000\u0000NO\u0005\\\u0000\u0000OP\u0005|\u0000\u0000P\u0014\u0001\u0000"+
		"\u0000\u0000QR\u0005\\\u0000\u0000RS\u0005:\u0000\u0000S\u0016\u0001\u0000"+
		"\u0000\u0000TU\u0005{\u0000\u0000U\u0018\u0001\u0000\u0000\u0000VW\u0005"+
		"}\u0000\u0000W\u001a\u0001\u0000\u0000\u0000XY\u0005\"\u0000\u0000Y\u001c"+
		"\u0001\u0000\u0000\u0000Z[\u0005|\u0000\u0000[\u001e\u0001\u0000\u0000"+
		"\u0000\\]\u0005:\u0000\u0000] \u0001\u0000\u0000\u0000^_\u0005-\u0000"+
		"\u0000_`\u0005-\u0000\u0000`a\u0005-\u0000\u0000ad\u0001\u0000\u0000\u0000"+
		"be\u0003\u0007\u0003\u0000ce\u0005\u0000\u0000\u0001db\u0001\u0000\u0000"+
		"\u0000dc\u0001\u0000\u0000\u0000e\"\u0001\u0000\u0000\u0000fg\b\u0000"+
		"\u0000\u0000g$\u0001\u0000\u0000\u0000\u0005\u0000/3;d\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}