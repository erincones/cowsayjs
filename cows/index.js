"use strict";


/**
 * Position index
 *
 * @typedef {[ number, number ]} Position
 * @package
 */


/**
 * Cow values to interpolate
 *
 * @typedef {Object} CowTemplateArgs
 * @property {ReadonlyArray<Position>} pos Position indexes
 * @property {string} str String to interpolate
 * @package
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
 * @property {ReadonlyArray<string>} template Cow template
 * @property {ReadonlyArray<Position>} [actionPos] Action position indexes
 * @property {ReadonlyArray<Position>} [eyesPos] Eyes position indexes
 * @property {ReadonlyArray<Position>} [tonguePos] Tongue position indexes
 * @package
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
 * @type {ReadonlyArray<Readonly<Cow>>}
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
 * Custom cows list
 *
 * @type {Readonly<Cow>[]}
 * @constant
 * @package
 */
var customCorral = [];


/**
 * Create a full deep copy of the given cow
 *
 * @param {Cow} cow Cow to copy
 * @returns {Cow} A copy of the given cow
 */
function copyCow(cow) {
  /**
   * Copy the given position indexes
   *
   * @param {Readonly<Position>} pos Position indexes
   * @returns {Position} A copy of the position indexes
   */
  var copier = function(pos) {
    return [ pos[0], pos[1] ];
  };

  return {
    name: cow.name,
    defEyes: cow.defEyes,
    defTongue: cow.defTongue,
    template: cow.template.slice(),
    actionPos: cow.actionPos ? cow.actionPos.map(copier) : undefined,
    eyesPos: cow.eyesPos ? cow.eyesPos.map(copier) : undefined,
    tonguePos: cow.tonguePos ? cow.tonguePos.map(copier) : undefined,
  };
}

/**
 * Find a cow in the corral by name
 *
 * @param {string} name Cow name
 * @returns {Cow} Matching cow
 */
function getCow(name) {
  /** @type {Cow | undefined} */
  var cow;

  // Find cow
  if (typeof name === "string") {
    cow = corral.concat(customCorral).find(function(cow) {
      return cow.name === name;
    });
  }

  // Get default cow if is not found
  if (cow === undefined) {
    cow = corral[0];
  }

  // Return a copy of the cow
  return copyCow(cow);
}

/**
 * Add a new cow to the custom corral
 *
 * @param {Cow} cow New cow to add
 * @returns {boolean} Whether the cow could be added
 */
function addCow(cow) {
  // Check if the cow already exists
  if (getCow(cow.name).name === cow.name) {
    return false;
  }

  // Add cow and sort corral
  customCorral.push(cow);
  customCorral.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });

  return true;
}

/**
 * Remove a cow from the custom corral
 *
 * @param {string} name Cow name
 * @returns {Cow | undefined} Removed cow
 */
function removeCow(name) {
  // Return undefined for not valid string
  if (typeof name !== "string") {
    return undefined;
  }

  // Get cow index
  var ind = customCorral.findIndex(function(cow) {
    return cow.name === name;
  });

  // Remove cow from corral and return it
  if (ind !== -1) {
    return customCorral.splice(ind, 1)[0];
  }

  // Not found cow
  return undefined;
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

  // Get values to interpolate
  /** @type {Readonly<CowTemplateArgs>[]} */
  var values = [];

  if (cow.tonguePos) {
    values.push({ pos: cow.tonguePos, str: fix(tongue, cow.defTongue, "  ", 2) });
  }

  if (cow.eyesPos) {
    values.push({ pos: cow.eyesPos, str: fix(eyes, cow.defEyes, "oo", 2) });
  }

  if (cow.actionPos) {
    values.push({ pos: cow.actionPos, str: fix(action, undefined, undefined, 1) });
  }

  // Interpolate values
  values.forEach(function(val) {
    var len = val.str.length;
    val.pos.forEach(function(pos, i) {
      var char = i < len ? val.str[i] : val.str.slice(-1);
      var pos0 = pos[0];
      var pos1 = pos[1];
      var line = lines[pos0];
      lines[pos0] = line.slice(0, pos1) + char + line.slice(pos1 + 1);
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
  corral: corral.map(copyCow),
  customCorral: customCorral,
  getCow: getCow,
  addCow: addCow,
  removeCow: removeCow,
  renderCow: renderCow
};
