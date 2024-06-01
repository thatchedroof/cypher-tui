// Generated from ./src-tauri/data/RollTable.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { ProgContext } from "./RollTableParser";
import { PossibilityContext } from "./RollTableParser";
import { RollPossibilityContext } from "./RollTableParser";
import { BlockPossibilityContext } from "./RollTableParser";
import { ParentheticalContext } from "./RollTableParser";
import { TextContext } from "./RollTableParser";
import { RollPossibilityTextContext } from "./RollTableParser";
import { BlockPossibilityTextContext } from "./RollTableParser";
import { QuotedTextContext } from "./RollTableParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `RollTableParser`.
 */
export default class RollTableListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `RollTableParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `RollTableParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;
	/**
	 * Enter a parse tree produced by `RollTableParser.possibility`.
	 * @param ctx the parse tree
	 */
	enterPossibility?: (ctx: PossibilityContext) => void;
	/**
	 * Exit a parse tree produced by `RollTableParser.possibility`.
	 * @param ctx the parse tree
	 */
	exitPossibility?: (ctx: PossibilityContext) => void;
	/**
	 * Enter a parse tree produced by `RollTableParser.rollPossibility`.
	 * @param ctx the parse tree
	 */
	enterRollPossibility?: (ctx: RollPossibilityContext) => void;
	/**
	 * Exit a parse tree produced by `RollTableParser.rollPossibility`.
	 * @param ctx the parse tree
	 */
	exitRollPossibility?: (ctx: RollPossibilityContext) => void;
	/**
	 * Enter a parse tree produced by `RollTableParser.blockPossibility`.
	 * @param ctx the parse tree
	 */
	enterBlockPossibility?: (ctx: BlockPossibilityContext) => void;
	/**
	 * Exit a parse tree produced by `RollTableParser.blockPossibility`.
	 * @param ctx the parse tree
	 */
	exitBlockPossibility?: (ctx: BlockPossibilityContext) => void;
	/**
	 * Enter a parse tree produced by `RollTableParser.parenthetical`.
	 * @param ctx the parse tree
	 */
	enterParenthetical?: (ctx: ParentheticalContext) => void;
	/**
	 * Exit a parse tree produced by `RollTableParser.parenthetical`.
	 * @param ctx the parse tree
	 */
	exitParenthetical?: (ctx: ParentheticalContext) => void;
	/**
	 * Enter a parse tree produced by `RollTableParser.text`.
	 * @param ctx the parse tree
	 */
	enterText?: (ctx: TextContext) => void;
	/**
	 * Exit a parse tree produced by `RollTableParser.text`.
	 * @param ctx the parse tree
	 */
	exitText?: (ctx: TextContext) => void;
	/**
	 * Enter a parse tree produced by `RollTableParser.rollPossibilityText`.
	 * @param ctx the parse tree
	 */
	enterRollPossibilityText?: (ctx: RollPossibilityTextContext) => void;
	/**
	 * Exit a parse tree produced by `RollTableParser.rollPossibilityText`.
	 * @param ctx the parse tree
	 */
	exitRollPossibilityText?: (ctx: RollPossibilityTextContext) => void;
	/**
	 * Enter a parse tree produced by `RollTableParser.blockPossibilityText`.
	 * @param ctx the parse tree
	 */
	enterBlockPossibilityText?: (ctx: BlockPossibilityTextContext) => void;
	/**
	 * Exit a parse tree produced by `RollTableParser.blockPossibilityText`.
	 * @param ctx the parse tree
	 */
	exitBlockPossibilityText?: (ctx: BlockPossibilityTextContext) => void;
	/**
	 * Enter a parse tree produced by `RollTableParser.quotedText`.
	 * @param ctx the parse tree
	 */
	enterQuotedText?: (ctx: QuotedTextContext) => void;
	/**
	 * Exit a parse tree produced by `RollTableParser.quotedText`.
	 * @param ctx the parse tree
	 */
	exitQuotedText?: (ctx: QuotedTextContext) => void;
}

