/**
 * Utils functions to fix cow arguments
 */


/**
 * Force the cow acion to one character at least
 *
 * @param action Cow action
 * @returns Fixed action
 */
export declare function fixAction(action: string | undefined): string;

/**
 * Force the cow face property string to two characters
 *
 * @param prop Cow face property
 * @param def Default value
 * @returns Fixed property
 */
export declare function fixFace(prop: string | undefined, def?: string): string;
