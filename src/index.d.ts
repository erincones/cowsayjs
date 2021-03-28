/**
 * A nodejs clone of the classic cowsay and cowthink cli commands.
 */

import { CowAction } from "./box";


/**
 * Common options for cowsay and cowthink functions
 */
export interface CowOptions {
  /** Cow name */
  cow?: string;
  /** Cow face mode */
  mode?: string;
  /** Custom cow eyes */
  eyes?: string;
  /** Custom cow tongue */
  tongue?: string;
  /** Where the message should be wrapped */
  wrap?: number | false | null;
}

/**
 * Options for the moo function
 *
 * The common cowsay and cowthink options with the action property.
 */
export interface CowFullOptions extends CowOptions {
  /** Cow action */
  action?: CowAction;
}


/**
 * Build an ASCII cow with the message
 *
 * @param message Message to show
 * @param options Cow options with action
 * @returns ASCII cow with the message
 */
export declare function moo(message?: string, options?: CowFullOptions): string;

/**
 * Build an ASCII cow saying the message
 *
 * @param message Message to say
 * @param options Cow options
 * @returns ASCII cow saying the message
 */
export declare function cowsay(message?: string, options?: CowOptions): string;

/**
 * Build an ASCII cow thinking the message
 *
 * @param message Message to think
 * @param options Cow options
 * @returns ASCII cow thinking the message
 */
export declare function cowthink(message?: string, options?: CowOptions): string;
