// Generated from c:/Users/tnert/OneDrive/Documents/GitHub/cypher-tui/src-tauri/data/RollTable.g4 by ANTLR 4.13.1
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
		ESCAPED_COLON=11, ESCAPED_LPAREN=12, ESCAPED_RPAREN=13, LBRACE=14, RBRACE=15, 
		QUOTE=16, VBAR=17, COLON=18, LPAREN=19, RPAREN=20, DASHES=21, CHAR=22;
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
			"ESCAPED_VBAR", "ESCAPED_COLON", "ESCAPED_LPAREN", "ESCAPED_RPAREN", 
			"LBRACE", "RBRACE", "QUOTE", "VBAR", "COLON", "LPAREN", "RPAREN", "DASHES", 
			"CHAR"
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
		"\u0004\u0000\u0016|\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002"+
		"\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002"+
		"\u0015\u0007\u0015\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0003\u0000:\b\u0000\u0001\u0001\u0001\u0001\u0003"+
		"\u0001>\b\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0003\u0003\u0003F\b\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r"+
		"\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010"+
		"\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0013\u0001\u0013"+
		"\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014"+
		"\u0003\u0014y\b\u0014\u0001\u0015\u0001\u0015\u0000\u0000\u0016\u0001"+
		"\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007"+
		"\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d"+
		"\u000f\u001f\u0010!\u0011#\u0012%\u0013\'\u0014)\u0015+\u0016\u0001\u0000"+
		"\u0001\u0007\u0000\n\n\r\r\"\"()::\\\\{}\u0089\u0000\u0001\u0001\u0000"+
		"\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000"+
		"\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000"+
		"\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000"+
		"\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000"+
		"\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000"+
		"\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000"+
		"\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000"+
		"\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000\u0000"+
		"#\u0001\u0000\u0000\u0000\u0000%\u0001\u0000\u0000\u0000\u0000\'\u0001"+
		"\u0000\u0000\u0000\u0000)\u0001\u0000\u0000\u0000\u0000+\u0001\u0000\u0000"+
		"\u0000\u00019\u0001\u0000\u0000\u0000\u0003;\u0001\u0000\u0000\u0000\u0005"+
		"A\u0001\u0000\u0000\u0000\u0007E\u0001\u0000\u0000\u0000\tI\u0001\u0000"+
		"\u0000\u0000\u000bL\u0001\u0000\u0000\u0000\rO\u0001\u0000\u0000\u0000"+
		"\u000fR\u0001\u0000\u0000\u0000\u0011U\u0001\u0000\u0000\u0000\u0013X"+
		"\u0001\u0000\u0000\u0000\u0015[\u0001\u0000\u0000\u0000\u0017^\u0001\u0000"+
		"\u0000\u0000\u0019a\u0001\u0000\u0000\u0000\u001bd\u0001\u0000\u0000\u0000"+
		"\u001df\u0001\u0000\u0000\u0000\u001fh\u0001\u0000\u0000\u0000!j\u0001"+
		"\u0000\u0000\u0000#l\u0001\u0000\u0000\u0000%n\u0001\u0000\u0000\u0000"+
		"\'p\u0001\u0000\u0000\u0000)r\u0001\u0000\u0000\u0000+z\u0001\u0000\u0000"+
		"\u0000-:\u0003+\u0015\u0000.:\u0003\t\u0004\u0000/:\u0003\u000b\u0005"+
		"\u00000:\u0003\r\u0006\u00001:\u0003\u000f\u0007\u00002:\u0003\u0011\b"+
		"\u00003:\u0003\u0013\t\u00004:\u0003\u0003\u0001\u00005:\u0003\u0015\n"+
		"\u00006:\u0003\u0017\u000b\u00007:\u0003\u0019\f\u00008:\u0003\u0005\u0002"+
		"\u00009-\u0001\u0000\u0000\u00009.\u0001\u0000\u0000\u00009/\u0001\u0000"+
		"\u0000\u000090\u0001\u0000\u0000\u000091\u0001\u0000\u0000\u000092\u0001"+
		"\u0000\u0000\u000093\u0001\u0000\u0000\u000094\u0001\u0000\u0000\u0000"+
		"95\u0001\u0000\u0000\u000096\u0001\u0000\u0000\u000097\u0001\u0000\u0000"+
		"\u000098\u0001\u0000\u0000\u0000:\u0002\u0001\u0000\u0000\u0000;=\u0005"+
		"\\\u0000\u0000<>\u0005\r\u0000\u0000=<\u0001\u0000\u0000\u0000=>\u0001"+
		"\u0000\u0000\u0000>?\u0001\u0000\u0000\u0000?@\u0005\n\u0000\u0000@\u0004"+
		"\u0001\u0000\u0000\u0000AB\u0005\\\u0000\u0000BC\u0005n\u0000\u0000C\u0006"+
		"\u0001\u0000\u0000\u0000DF\u0005\r\u0000\u0000ED\u0001\u0000\u0000\u0000"+
		"EF\u0001\u0000\u0000\u0000FG\u0001\u0000\u0000\u0000GH\u0005\n\u0000\u0000"+
		"H\b\u0001\u0000\u0000\u0000IJ\u0005\\\u0000\u0000JK\u0005\\\u0000\u0000"+
		"K\n\u0001\u0000\u0000\u0000LM\u0005\\\u0000\u0000MN\u0005{\u0000\u0000"+
		"N\f\u0001\u0000\u0000\u0000OP\u0005\\\u0000\u0000PQ\u0005}\u0000\u0000"+
		"Q\u000e\u0001\u0000\u0000\u0000RS\u0005\\\u0000\u0000ST\u0005-\u0000\u0000"+
		"T\u0010\u0001\u0000\u0000\u0000UV\u0005\\\u0000\u0000VW\u0005\"\u0000"+
		"\u0000W\u0012\u0001\u0000\u0000\u0000XY\u0005\\\u0000\u0000YZ\u0005|\u0000"+
		"\u0000Z\u0014\u0001\u0000\u0000\u0000[\\\u0005\\\u0000\u0000\\]\u0005"+
		":\u0000\u0000]\u0016\u0001\u0000\u0000\u0000^_\u0005\\\u0000\u0000_`\u0005"+
		"(\u0000\u0000`\u0018\u0001\u0000\u0000\u0000ab\u0005\\\u0000\u0000bc\u0005"+
		")\u0000\u0000c\u001a\u0001\u0000\u0000\u0000de\u0005{\u0000\u0000e\u001c"+
		"\u0001\u0000\u0000\u0000fg\u0005}\u0000\u0000g\u001e\u0001\u0000\u0000"+
		"\u0000hi\u0005\"\u0000\u0000i \u0001\u0000\u0000\u0000jk\u0005|\u0000"+
		"\u0000k\"\u0001\u0000\u0000\u0000lm\u0005:\u0000\u0000m$\u0001\u0000\u0000"+
		"\u0000no\u0005(\u0000\u0000o&\u0001\u0000\u0000\u0000pq\u0005)\u0000\u0000"+
		"q(\u0001\u0000\u0000\u0000rs\u0005-\u0000\u0000st\u0005-\u0000\u0000t"+
		"u\u0005-\u0000\u0000ux\u0001\u0000\u0000\u0000vy\u0003\u0007\u0003\u0000"+
		"wy\u0005\u0000\u0000\u0001xv\u0001\u0000\u0000\u0000xw\u0001\u0000\u0000"+
		"\u0000y*\u0001\u0000\u0000\u0000z{\b\u0000\u0000\u0000{,\u0001\u0000\u0000"+
		"\u0000\u0005\u00009=Ex\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}