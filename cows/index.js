"use strict";


/**
 * Cow renderer function
 *
 * @callback CowRenderer
 * @param {string} [action] Action
 * @param {string} [eyes] Eyes
 * @param {string} [tongue] Tongue
 * @returns {string} Final cow
 */

/**
 * Cow renderer function
 *
 * @callback CowStrictRenderer
 * @param {string} action Action
 * @param {string} eyes Eyes
 * @param {string} tongue Tongue
 * @returns {string} Final cow
 * @see CowRenderer
 */


/**
 * Cow base
 *
 * @package
 * @typedef {Object} CowBase
 * @property {string} name Cow name
 * @property {string} [eyes] Default eyes
 * @property {string} [tongue] Default tongue
 */

/**
 * Cow strict renderer property
 *
 * @package
 * @typedef {Object} CowStrictRendererProp
 * @property {CowStrictRenderer} render Strict renderer function;
 */

/**
 * Cow renderer property
 *
 * @package
 * @typedef {Object} CowRendererProp
 * @property {CowRenderer} render Renderer function;
 */

/**
 * Cow strict template
 *
 * @typedef {CowBase & CowStrictRendererProp} CowStrict
 */

/**
 * Cow template
 *
 * @typedef {CowBase & CowRendererProp} Cow
 */


/**
 * Truncate string to the given length
 *
 * @param {string | undefined} str String to truncate
 * @param {number} len Maximum length
 * @returns {string} Truncated string
 */
function truncate(str, len) {
  return typeof str === "string" ? str.slice(0, len) : "";
}


/**
 * Force cow value to the given lenght at least
 *
 * @param {string | undefined} value Cow value
 * @param {string | undefined} empty Default value for empty value
 * @param {string | undefined} undef Default value for undefined value
 * @param {number} len Maximum length
 * @returns {string} Fixed value
 * @package
 */
function fix(value, empty, undef, len) {
  if (typeof value !== "string") {
    return truncate(undef, len);
  }

  if (value.length === 0) {
    return truncate(empty, len);
  }

  return truncate(value, len);
}


/**
 * Get cow from file
 *
 * @param {string} path Path of the cow file
 * @returns {Cow} A deep copy of the cow
 */
function cowParser(path) {
  /** @type {CowStrict} */
  var cow = require(path);

  return {
    name: cow.name,
    eyes: cow.eyes,
    tongue: cow.tongue,
    render: function(action, eyes, tongue) {
      var a = fix(action, undefined, undefined, 1);
      var e = fix(eyes, cow.eyes, "oo", 2);
      var t = fix(tongue, cow.tongue, "  ", 2);

      return cow.render(a, e, t);
    }
  };
}


/**
 * Cows list
 *
 * The default cow is in the first position.
 *
 * @type {Cow[]}
 * @constant
 * @package
 */
var corral = [
  "./default.cow",
  "./beavis.zen.cow",
  "./blowfish.cow",
  "./bong.cow",
  "./bud-frogs.cow",
  "./bunny.cow",
  "./cheese.cow",
  "./cower.cow",
  "./daemon.cow",
  "./dragon-and-cow.cow",
  "./dragon.cow",
  "./elephant-in-snake.cow",
  "./elephant.cow",
  "./eyes.cow",
  "./flaming-sheep.cow",
  "./ghostbusters.cow",
  "./head-in.cow",
  "./hellokitty.cow",
  "./kiss.cow",
  "./kitty.cow",
  "./koala.cow",
  "./kosh.cow",
  "./luke-koala.cow",
  "./meow.cow",
  "./milk.cow",
  "./moofasa.cow",
  "./moose.cow",
  "./mutilated.cow",
  "./ren.cow",
  "./satanic.cow",
  "./sheep.cow",
  "./skeleton.cow",
  "./small.cow",
  "./sodomized.cow",
  "./stegosaurus.cow",
  "./stimpy.cow",
  "./supermilker.cow",
  "./surgery.cow",
  "./telebears.cow",
  "./three-eyes.cow",
  "./turkey.cow",
  "./turtle.cow",
  "./tux.cow",
  "./udder.cow",
  "./vader.cow",
  "./vader-koala.cow",
  "./www.cow"
].map(cowParser);


/**
 * Find a cow in the corral by name
 *
 * @param {string} name Cow name
 * @returns {Cow} Matching cow
 */
function getCow(name) {
  // Return the default cow for not valid type
  if (typeof name !== "string") {
    return corral[0];
  }

  // Find cow
  var i = 0;

  do {
    var cow = corral[i];

    if (cow.name === name) {
      return cow;
    }
  } while (++i < corral.length);

  // Return default cow
  return corral[0];
}


/**
 * Cows collection
 *
 * @module cowsayjs/cows
 */
module.exports = {
  corral: corral,
  cowParser: cowParser,
  getCow: getCow
};
