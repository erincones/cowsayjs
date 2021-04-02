"use strict";


var box = require("./box");
var mode = require("./mode");
var cows = require("../cows");


/**
 * Common options for cowsay and cowthink functions
 *
 * @typedef {Object} CowOptions
 * @property {string} [cow] Cow name
 * @property {string} [mode] Cow face mode
 * @property {string} [eyes] Custom cow eyes
 * @property {string} [tongue] Custom cow tongue
 * @property {string | number | boolean | null} [wrap] Where the message should be wrapped
 */

/**
 * Action option
 *
 * @typedef {Object} CowActionOption
 * @property {import("./box").CowAction} [action] Cow action
 */

/**
 * Options for the moo function
 *
 * The common options for cowsay and cowthink with the action property.
 *
 * @typedef {CowOptions & CowActionOption} CowFullOptions
 */


/**
 * Add the action to the cow options
 *
 * @param {CowOptions} [options] Cow options
 * @param {import("./box").CowAction} [action] Cow action
 * @returns {CowFullOptions} Cow options with action
 */
function extendOptions(options, action) {
  return options === undefined ? {
    action: action
  } : {
    action: action,
    cow: options.cow,
    mode: options.mode,
    eyes: options.eyes,
    tongue: options.tongue,
    wrap: options.wrap,
  };
}


/**
 * Build an ASCII cow with the message
 *
 * Default values:
 *  - action: "say"
 *  - eyes: "oo"
 *  - wrap: 40
 *
 * @param {string} [message] Message to show
 * @param {CowFullOptions} [options] Cow options with action
 * @returns {string} ASCII cow with the message
 */
function moo(message, options) {
  // Adjust parameters
  var opts = typeof options === "object" ? options : {};

  // Get action and face
  /** @type {import("./box").CowAction} */
  var action = opts.action === "think" ? "think" : "say";
  var eyes;
  var tongue;

  // Find face by mode
  if (typeof opts.mode === "string") {
    var face = mode.modeFace(opts.mode);
    eyes = face.eyes;
    tongue = face.tongue;
  }

  // Custom face
  if (typeof opts.eyes === "string" && eyes === undefined) {
    eyes = opts.eyes;
  }
  if (typeof opts.tongue === "string" && tongue === undefined) {
    tongue = opts.tongue;
  }

  // Get cow and returns
  var cow = typeof opts.cow === "string" ? cows.getCow(opts.cow) : cows.corral[0];
  var act = action === "think" ? "o" : "\\";

  return box.perform(action, message, opts.wrap) + cow.render(act, eyes, tongue);
}


/**
 * Build an ASCII cow saying the message
 *
 * Default values:
 *  - eyes: "oo"
 *  - wrap: 40
 *
 * @param {string} [message] Message to say
 * @param {CowOptions} [options] Cow options
 * @returns ASCII cow saying the message
 */
function cowsay(message, options) {
  return moo(message, extendOptions(options, "say"));
}

/**
 * Build an ASCII cow thinking the message
 *
 * Default values:
 *  - eyes: "oo"
 *  - wrap: 40
 *
 * @param {string} [message] Message to think
 * @param {CowOptions} [options] Cow options
 * @returns ASCII cow thinking the message
 */
function cowthink(message, options) {
  return moo(message, extendOptions(options, "think"));
}


/**
 * A nodejs clone of the classic cowsay and cowthink cli commands
 *
 * @module cowsayjs
 */
module.exports = {
  moo: moo,
  cowsay: cowsay,
  cowthink: cowthink
};
