/**
 * Cows collection
 */


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
export declare interface Cow {
  /** Cow name */
  readonly name: string;
  /** Default eyes for empty string */
  readonly defEyes?: string;
  /** Default tongue for empty string */
  readonly defTongue?: string;
  /** Cow template */
  readonly template: ReadonlyArray<string>;
  /** Action position indexes */
  readonly actionPos?: ReadonlyArray<Position>;
  /** Eyes position indexes */
  readonly eyesPos?: ReadonlyArray<Position>;
  /** Tongue position indexes */
  readonly tonguePos?: ReadonlyArray<Position>;
}


/**
 * Cows list
 *
 * The default cow is in the first position.
 */
export declare const corral: ReadonlyArray<Cow>;

/**
 * Custom cows list
 */
export declare const customCorral: Cow;

/**
 * Find a cow in the corral by name
 *
 * @param name Cow name
 * @returns Matching cow
 */
export declare function getCow(name: string): Cow;

/**
 * Add a new cow to the custom corral
 *
 * @param cow New cow to add
 * @returns whether the cow could be added
 */
export declare function addCow(cow: Cow): boolean;

/**
 * Remove a cow from the custom corral
 *
 * @param name Cow name
 * @returns Matching cow
 */
export declare function removeCow(name: string): Cow | undefined;

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
