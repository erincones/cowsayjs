/**
 * Manage cow modes and faces
 */


/**
 * Eyes and tongue of the cow
 *
 * The eyes and tongue are hardcoded for some cows and cannot be changed.
 */
export declare interface CowFace {
  /** Eyes of the cow */
  eyes?: string;
  /** Tongue of the cow */
  tongue?: string;
}

/**
 * Name for known faces
 */
export declare interface CowMode {
  /** The short name of the mode */
  id: string;
  /** The full name of the mode */
  name: string;
}

/**
 * Cow mode and face
 */
export interface CowModeData extends CowFace, CowMode {}


/**
 * All available cow modes data
 *
 * The default mode is in the first position.
 */
export declare const modes: CowModeData[];


/**
 * Get the mode for the giving face
 *
 * If the face is not found, the default mode is returned.
 *
 * @param face The cow face
 * @returns The matching cow mode
 */
export declare function faceMode(face: CowFace): CowMode;

/**
 * Get the face for the giving mode
 *
 * If the mode is not found, the default face is returned.
 *
 * @param mode The id or name of the cow mode
 * @returns The matching cow face
 */
export declare function modeFace(mode?: string): CowFace;
