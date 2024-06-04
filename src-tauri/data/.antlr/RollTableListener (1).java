// Generated from c:/Users/tnert/OneDrive/Documents/GitHub/cypher-tui/data/RollTable.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link RollTableParser}.
 */
public interface RollTableListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link RollTableParser#prog}.
	 * @param ctx the parse tree
	 */
	void enterProg(RollTableParser.ProgContext ctx);
	/**
	 * Exit a parse tree produced by {@link RollTableParser#prog}.
	 * @param ctx the parse tree
	 */
	void exitProg(RollTableParser.ProgContext ctx);
	/**
	 * Enter a parse tree produced by {@link RollTableParser#possibility}.
	 * @param ctx the parse tree
	 */
	void enterPossibility(RollTableParser.PossibilityContext ctx);
	/**
	 * Exit a parse tree produced by {@link RollTableParser#possibility}.
	 * @param ctx the parse tree
	 */
	void exitPossibility(RollTableParser.PossibilityContext ctx);
	/**
	 * Enter a parse tree produced by {@link RollTableParser#rollPossibility}.
	 * @param ctx the parse tree
	 */
	void enterRollPossibility(RollTableParser.RollPossibilityContext ctx);
	/**
	 * Exit a parse tree produced by {@link RollTableParser#rollPossibility}.
	 * @param ctx the parse tree
	 */
	void exitRollPossibility(RollTableParser.RollPossibilityContext ctx);
	/**
	 * Enter a parse tree produced by {@link RollTableParser#blockPossibility}.
	 * @param ctx the parse tree
	 */
	void enterBlockPossibility(RollTableParser.BlockPossibilityContext ctx);
	/**
	 * Exit a parse tree produced by {@link RollTableParser#blockPossibility}.
	 * @param ctx the parse tree
	 */
	void exitBlockPossibility(RollTableParser.BlockPossibilityContext ctx);
	/**
	 * Enter a parse tree produced by {@link RollTableParser#parenthetical}.
	 * @param ctx the parse tree
	 */
	void enterParenthetical(RollTableParser.ParentheticalContext ctx);
	/**
	 * Exit a parse tree produced by {@link RollTableParser#parenthetical}.
	 * @param ctx the parse tree
	 */
	void exitParenthetical(RollTableParser.ParentheticalContext ctx);
	/**
	 * Enter a parse tree produced by {@link RollTableParser#text}.
	 * @param ctx the parse tree
	 */
	void enterText(RollTableParser.TextContext ctx);
	/**
	 * Exit a parse tree produced by {@link RollTableParser#text}.
	 * @param ctx the parse tree
	 */
	void exitText(RollTableParser.TextContext ctx);
	/**
	 * Enter a parse tree produced by {@link RollTableParser#rollPossibilityText}.
	 * @param ctx the parse tree
	 */
	void enterRollPossibilityText(RollTableParser.RollPossibilityTextContext ctx);
	/**
	 * Exit a parse tree produced by {@link RollTableParser#rollPossibilityText}.
	 * @param ctx the parse tree
	 */
	void exitRollPossibilityText(RollTableParser.RollPossibilityTextContext ctx);
	/**
	 * Enter a parse tree produced by {@link RollTableParser#blockPossibilityText}.
	 * @param ctx the parse tree
	 */
	void enterBlockPossibilityText(RollTableParser.BlockPossibilityTextContext ctx);
	/**
	 * Exit a parse tree produced by {@link RollTableParser#blockPossibilityText}.
	 * @param ctx the parse tree
	 */
	void exitBlockPossibilityText(RollTableParser.BlockPossibilityTextContext ctx);
	/**
	 * Enter a parse tree produced by {@link RollTableParser#quotedText}.
	 * @param ctx the parse tree
	 */
	void enterQuotedText(RollTableParser.QuotedTextContext ctx);
	/**
	 * Exit a parse tree produced by {@link RollTableParser#quotedText}.
	 * @param ctx the parse tree
	 */
	void exitQuotedText(RollTableParser.QuotedTextContext ctx);
}