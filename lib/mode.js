"use strict";


/**
 * Eyes and tongue of the cow
 *
 * The eyes and tongue are hardcoded for some cows and cannot be changed.
 *
 * @typedef {Object} CowFace
 * @property {string} [eyes] Eyes of the cow
 * @property {string} [tongue] Tongue of the cow
 */

/**
 * Name for known faces
 *
 * @typedef {Object} CowMode
 * @property {string} id The short name of the mode
 * @property {string} name The full name of the mode
 */

/**
 * Cow mode and face
 *
 * @typedef {CowMode & CowFace} CowModeData
 */


/**
 * All available modes data
 *
 * @type {CowModeData[]}
 * @constant
 * @package
 */
var modes = [
  { id: "u", name: "default" },
  { id: "b", name: "borg",     eyes: "==" },
  { id: "d", name: "dead",     eyes: "xx", tongue: "U " },
  { id: "g", name: "greedy",   eyes: "$$" },
  { id: "p", name: "paranoia", eyes: "@@" },
  { id: "s", name: "stoned",   eyes: "**", tongue: "U " },
  { id: "t", name: "tired",    eyes: "--" },
  { id: "w", name: "wired",    eyes: "OO" },
  { id: "y", name: "youthful", eyes: ".." }
];


/**
 * Copy the mode for the giving index
 *
 * @param {number} i The mode index
 * @returns {CowMode} The default cow mode
 * @package
 */
function copyMode(i) {
  var mode = modes[i];
  return {
    id: mode.id,
    name: mode.name
  };
}

/**
 * Copy the face for the giving mode index
 *
 * @param {number} i The mode index
 * @returns {CowFace} The default cow face
 * @package
 */
function copyFace(i) {
  var face = modes[i];
  return {
    eyes: face.eyes,
    tongue: face.tongue
  };
}

/**
 * Get a copy of all available cow modes data
 *
 * @returns {CowModeData[]} All available cow modes data
 * @package
 */
function copyModes() {
  /** @type {CowModeData[]} */
  var copy = [];
  var i = 0;

  do {
    var mode = modes[i];
    copy.push({
      id: mode.id,
      name: mode.name,
      eyes: mode.eyes,
      tongue: mode.tongue
    });
  } while (++i < modes.length);

  return copy;
}


/**
 * All available cow modes data
 *
 * The default mode is in the first position.
 *
 * @type {CowModeData[]}
 * @package
 */
var known = copyModes();


/**
 * Get the mode for the giving face
 *
 * If the face is not found, the default mode is returned.
 *
 * @param {CowFace} face The cow face
 * @returns {CowMode} The matching cow mode
 */
function faceMode(face) {
  // Return the default mode for not valid type
  if (typeof face !== "object" || face === null) {
    return copyMode(0);
  }

  // Find mode
  var i = 0;

  do {
    var mode = modes[i];

    if (mode.eyes === face.eyes && mode.tongue === face.tongue) {
      return copyMode(i);
    }
  } while (++i < modes.length);

  // Return default mode
  return copyMode(0);
}

/**
 * Get the face for the giving mode
 *
 * If the mode is not found, the default face is returned.
 *
 * @param {string} [mode] The id or name of the cow mode
 * @returns {CowFace} The matching cow face
 */
function modeFace(mode) {
  // Return the default face for not valid type
  if (typeof mode !== "string") {
    return copyFace(0);
  }

  // Find face
  var i = 0;

  do {
    var face = modes[i];

    if (face.id === mode || face.name === mode) {
      return copyFace(i);
    }
  } while (++i < modes.length);

  // Return default face
  return copyFace(0);
}


/**
 * Manage cow modes and faces
 *
 * @module cowsay/lib/mode
 */
module.exports = {
  modes: known,
  faceMode: faceMode,
  modeFace: modeFace
};
