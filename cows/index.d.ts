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
 * Cow enderer function
 *
 * @callback CowRenderer
 * @param action Action
 * @param eyes Eyes
 * @param tongue Tongue
 * @returns Final cow
 */
export declare type CowRenderer = (action?: string, eyes?: string, tongue?: string) => string;

/**
 * Cow strict renderer function
 *
 * @callback CowStrictRenderer
 * @param action Action
 * @param eyes Eyes
 * @param tongue Tongue
 * @returns Final cow
 */
export declare type CowStrictRenderer = (action: string, eyes: string, tongue: string) => string;


/**
 * Cow base template
 */
declare interface CowBase {
  /** Cow name */
  name: string;
  /** Default eyes for empty string */
  eyes?: string;
  /** Default tongue for empty string */
  tongue?: string;
}

/**
 * Cow template
 */
export declare interface Cow extends CowBase {
  /** Renderer function */
  render: CowRenderer;
}

/**
 * Cow strict template
 */
export declare interface CowStrict extends CowBase {
  /** Renderer function */
  render: CowStrictRenderer;
}



/**
 * Cows list
 *
 * The default cow is in the first position.
 */
export declare const corral: Cow[];

/**
 * Get cow from file
 *
 * @param path Path of the cow file
 * @returns A deep copy of the cow
 */
export declare function cowParser(path: string): Cow;

/**
 * Find a cow in the corral by name
 *
 * @param name Cow name
 * @returns Matching cow
 */
export declare function getCow(name: string): Cow;
