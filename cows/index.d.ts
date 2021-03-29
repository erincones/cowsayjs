/**
 * Cows collection
 */


/**
 * Renderer function
 *
 * @callback CowRenderer
 * @param action Action
 * @param eyes Eyes
 * @param tongue Tongue
 * @returns Final cow
 */
export declare type CowRenderer = (action?: string, eyes?: string, tongue?: string) => string;

/**
 * Cow template
 */
export declare interface Cow {
  /** Cow name */
  name: string;

  /** Renderer function */
  render: CowRenderer;
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
