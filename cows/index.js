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
].map(function(template) {
  /** @type {Cow} */
  var cow = require(template);

  return {
    name: cow.name,
    render: cow.render
  };
});


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
