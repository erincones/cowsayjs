/**
 * A nodejs clone of the classic cowsay and cowthink cli commands.
 */


import { CowAction } from "./box";


/**
 * Common options for cowsay and cowthink functions
 */
export declare interface CowOptions {
  /** Cow name */
  cow?: string;
  /** Cow face mode */
  mode?: string;
  /** Custom cow eyes */
  eyes?: string;
  /** Custom cow tongue */
  tongue?: string;
  /** Where the message should be wrapped */
  wrap?: string | number | boolean | null;
}

/**
 * Options for the moo function
 *
 * The common cowsay and cowthink options with the action property.
 */
export declare interface CowMooOptions extends CowOptions {
  /** Cow action */
  action?: CowAction;
}

/**
 * Options for the moo function
 *
 * The common cowsay and cowthink options with the action property.
 */
export declare interface CowAllOptions extends CowMooOptions {
  /** Cow message */
  message?: string;
}



/**
 * Build an ASCII cow with the message
 *
 * Default values:
 *  - action: "say"
 *  - eyes: "oo"
 *  - wrap: 40
 *
 * @param message Message to show
 * @param options Cow options with action
 * @returns ASCII cow with the message
 */
export declare function moo(message?: string, options?: CowMooOptions): string;

/**
 * Build an ASCII cow with the message
 *
 * Default values:
 *  - action: "say"
 *  - eyes: "oo"
 *  - wrap: 40
 *
 * @param message Message to show
 * @param options Cow options with action
 * @returns ASCII cow with the message
 */
export declare function moo(options?: CowAllOptions): string;



/**
 * Build an ASCII cow saying the message
 *
 * Default values:
 *  - eyes: "oo"
 *  - wrap: 40
 *
 * @param message Message to say
 * @param options Cow options
 * @returns ASCII cow saying the message
 */
export declare function cowsay(message?: string, options?: CowOptions): string;

/**
 * Build an ASCII cow saying the message
 *
 * Default values:
 *  - eyes: "oo"
 *  - wrap: 40
 *
 * @param message Message to say
 * @param options Cow options
 * @returns ASCII cow saying the message
 */
export declare function cowtsay(options?: CowAllOptions): string;


/**
 * Build an ASCII cow thinking the message
 *
 * Default values:
 *  - eyes: "oo"
 *  - wrap: 40
 *
 * @param message Message to think
 * @param options Cow options
 * @returns ASCII cow thinking the message
 */
export declare function cowthink(message?: string, options?: CowOptions): string;


/**
 * Build an ASCII cow thinking the message
 *
 * Default values:
 *  - eyes: "oo"
 *  - wrap: 40
 *
 * @param message Message to think
 * @param options Cow options
 * @returns ASCII cow thinking the message
 */
export declare function cowthink(options?: CowAllOptions): string;
