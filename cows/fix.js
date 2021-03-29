"use strict";


/**
 * Force the cow acion to one character at least
 *
 * @param {string | undefined} action Cow action
 * @returns {string} Fixed action
 */
function fixAction(action) {
  return typeof action !== "string" || action.length === 0 ? "" : action[0];
}

/**
 * Force the cow face property string to two characters
 *
 * @param {string | undefined} prop Cow face property
 * @param {string} [def] Default value
 * @returns {string} Fixed property
 */
function fixFace(prop, def) {
  if (typeof prop !== "string") {
    return typeof def !== "string" ? "" : def.slice(0, 2);
  }

  return prop.slice(0, 2);
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
