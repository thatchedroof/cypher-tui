// Generated from ./src-tauri/data/RollTable.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `RollTableParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class RollTableVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `RollTableParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;
	/**
	 * Visit a parse tree produced by `RollTableParser.possibility`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPossibility?: (ctx: PossibilityContext) => Result;
	/**
	 * Visit a parse tree produced by `RollTableParser.rollPossibility`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRollPossibility?: (ctx: RollPossibilityContext) => Result;
	/**
	 * Visit a parse tree produced by `RollTableParser.blockPossibility`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockPossibility?: (ctx: BlockPossibilityContext) => Result;
	/**
	 * Visit a parse tree produced by `RollTableParser.parenthetical`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthetical?: (ctx: ParentheticalContext) => Result;
	/**
	 * Visit a parse tree produced by `RollTableParser.text`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitText?: (ctx: TextContext) => Result;
	/**
	 * Visit a parse tree produced by `RollTableParser.rollPossibilityText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRollPossibilityText?: (ctx: RollPossibilityTextContext) => Result;
	/**
	 * Visit a parse tree produced by `RollTableParser.blockPossibilityText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockPossibilityText?: (ctx: BlockPossibilityTextContext) => Result;
	/**
	 * Visit a parse tree produced by `RollTableParser.quotedText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuotedText?: (ctx: QuotedTextContext) => Result;
}

