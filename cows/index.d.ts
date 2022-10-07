/**
 * Cows collection
 */


/**
 * Truncate string to the given length
 *
 * @param str String to truncate
 * @param len Maximum length
 * @returns Truncated string
 */
 declare function truncate(str: string | undefined, len: number): string;

/**
 * Force cow value to the given lenght at least
 *
 * @param value Cow value
 * @param def Default value
 * @param len Maximum length
 * @returns Fixed value
 */
declare function fix(value: string | undefined, def: string | undefined, len: number): string;


/**
 * Position index
 */
declare type Position = [ number, number ];

/**
 * Cow action
 */
export declare type CowAction = `o` | `\\`;


/**
 * Cow
 */
export interface Cow {
  /** Cow name */
  name: string;
  /** Default eyes for empty string */
  defEyes?: string;
  /** Default tongue for empty string */
  defTongue?: string;
  /** Cow template */
  template: string[];
  /** Action position indexes */
  actionPos?: Position[];
  /** Eyes position indexes */
  eyesPos?: Position[];
  /** Tongue position indexes */
  tonguePos?: Position[];
}


/**
 * Cows list
 *
 * The default cow is in the first position.
 */
export declare const corral: Cow[];

/**
 * Find a cow in the corral by name
 *
 * @param name Cow name
 * @returns Matching cow
 */
export declare function getCow(name: string): Cow;

/**
 * Cow renderer function
 *
 * @param cow Cow to render
 * @param action Action
 * @param eyes Eyes
 * @param tongue Tongue
 * @returns Rendered cow
 */
 export declare function renderCow(cow: Cow, action: CowAction, eyes?: string, tongue?: string): string;
