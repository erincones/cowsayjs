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
 * @param {CowStrict} cow Path of the cow file
 * @returns {Cow} A deep copy of the cow
 */
function cowParser(cow) {
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
  require("./default.cow"),
  require("./beavis.zen.cow"),
  require("./blowfish.cow"),
  require("./bong.cow"),
  require("./bud-frogs.cow"),
  require("./bunny.cow"),
  require("./cheese.cow"),
  require("./cower.cow"),
  require("./daemon.cow"),
  require("./dragon-and-cow.cow"),
  require("./dragon.cow"),
  require("./elephant-in-snake.cow"),
  require("./elephant.cow"),
  require("./eyes.cow"),
  require("./flaming-sheep.cow"),
  require("./ghostbusters.cow"),
  require("./head-in.cow"),
  require("./hellokitty.cow"),
  require("./kiss.cow"),
  require("./kitty.cow"),
  require("./koala.cow"),
  require("./kosh.cow"),
  require("./luke-koala.cow"),
  require("./meow.cow"),
  require("./milk.cow"),
  require("./moofasa.cow"),
  require("./moose.cow"),
  require("./mutilated.cow"),
  require("./ren.cow"),
  require("./satanic.cow"),
  require("./sheep.cow"),
  require("./skeleton.cow"),
  require("./small.cow"),
  require("./sodomized.cow"),
  require("./stegosaurus.cow"),
  require("./stimpy.cow"),
  require("./supermilker.cow"),
  require("./surgery.cow"),
  require("./telebears.cow"),
  require("./three-eyes.cow"),
  require("./turkey.cow"),
  require("./turtle.cow"),
  require("./tux.cow"),
  require("./udder.cow"),
  require("./vader.cow"),
  require("./vader-koala.cow"),
  require("./www.cow")
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
