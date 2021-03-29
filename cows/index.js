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
 * Cow
 *
 * @typedef {Object} Cow
 * @property {string} name Cow name
 * @property {CowRenderer} render Renderer function
 */


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
 * Cows collection
 *
 * @module cowsayjs/cows
 */
module.exports = {
  corral: corral,
  getCow: getCow
};
