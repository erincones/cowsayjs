"use strict";


/**
 * Position index
 *
 * @typedef {[ number, number ]} Position
 */

/**
 * Cow action
 *
 * @typedef {"o" | "\\"} CowAction
 */


/**
 * Cow
 *
 * @typedef {Object} Cow
 * @property {string} name Cow name
 * @property {string} [defEyes] Default eyes
 * @property {string} [defTongue] Default tongue
 * @property {string[]} template Cow template
 * @property {Position[]} [actionPos] Action position indexes
 * @property {Position[]} [eyesPos] Eyes position indexes
 * @property {Position[]} [tonguePos] Tongue position indexes
 */


/**
 * Truncate string to the given length
 *
 * @param {string | undefined} str String to truncate
 * @param {number} len Maximum length
 * @returns {string} Truncated string
 * @package
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
];


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
 * Cow renderer function
 *
 * @param {Cow} cow Cow to render
 * @param {CowAction} [action] Action
 * @param {string} [eyes] Eyes
 * @param {string} [tongue] Tongue
 * @returns {string} Rendered cow
 */
function renderCow(cow, action, eyes, tongue) {
  // Copy template
  var lines = cow.template.slice();

  // Interpolate values
  [
    { pos: cow.tonguePos || [], str: fix(tongue, cow.defTongue, "  ", 2) },
    { pos: cow.eyesPos || [],   str: fix(eyes, cow.defEyes, "oo", 2) },
    { pos: cow.actionPos || [], str: fix(action, undefined, undefined, 1) },
  ].forEach(function(val) {
    var len = val.str.length;
    val.pos.forEach(function(pos, i) {
      var char = i < len ? val.str[i] : val.str.slice(-1);
      var line = lines[pos[0]];
      lines[pos[0]] = line.slice(0, pos[1]) + char + line.slice(pos[1] + 1);
    });
  });

  return lines.join("\n");
}


/**
 * Cows collection
 *
 * @module cowsayjs/cows
 */
module.exports = {
  corral: corral,
  getCow: getCow,
  renderCow: renderCow
};
