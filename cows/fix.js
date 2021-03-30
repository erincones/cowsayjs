"use strict";


/**
 * Force cow value to the given lenght at least
 *
 * @param {string | undefined} value Cow value
 * @param {string | undefined} def Default value
 * @param {number} len Maximum length
 * @returns {string} Fixed value
 * @package
 */
function fix(value, def, len) {
  if (typeof value !== "string") {
    return typeof def !== "string" ? "" : def.slice(0, len);
  }

  return value.slice(0, len);
}


/**
 * Force the cow acion to one character at least
 *
 * @param {string | undefined} action Cow action
 * @param {string} [def] Default value
 * @returns {string} Fixed action
 */
function fixAction(action, def) {
  return fix(action, def, 1);
}

/**
 * Force the cow face property string to two characters
 *
 * @param {string | undefined} prop Cow face property
 * @param {string} [def] Default value
 * @returns {string} Fixed property
 */
function fixFace(prop, def) {
  return fix(prop, def, 2);
}


/**
 * Utils functions to fix cow arguments
 *
 * @module cowsayjs/utils/fix
 */
module.exports = {
  fixAction: fixAction,
  fixFace: fixFace,
};
