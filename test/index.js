"use strict";

var assert = require("assert");
var child_process = require("child_process");

var lib = require("../lib");
var mode = require("../lib/mode");
var cows = require("../cows");


/**
 * Cow face test
 *
 * @typedef {Object} CowFaceTest
 * @property {string} name Test name
 * @property {(string | undefined)[]} prop Face property
 */

/**
 * Cow action test
 *
 * @typedef {Object} CowActionTest
 * @property {import("../lib/box").CowAction} [lib] Cow action option
 * @property {string} command Original cowsay command
 */


// Standard message for short tests
var msg = process.env.MSG_TEST || "moo";


// System setup
describe("environment setup", function() {
  before(function() {
    if (process.env.SKIP_ENVIRONMENT_TESTS === "1") {
      this.skip();
    }
  });


  // Force and skip flags
  var force = process.env.FORCE_TESTS === "1";
  var skip = false;

  // Skip all tests for not valid environment
  afterEach(function() {
    if (skip) {
      process.env.SKIP_ACTION_TESTS = "1";
      process.env.SKIP_CORRAL_TESTS = "1";
      process.env.SKIP_WRAP_TESTS = "1";
    }
  });


  // Operative system
  it("is unix like system", function() {
    var win = "win32";

    if (force) {
      assert.notStrictEqual(process.platform, win);
    }
    else if (process.platform === win) {
      skip = true;
      this.skip();
    }
  });

  // Required commands
  describe("required commands", function() {
    [ "cowsay", "cowthink" ].forEach(function(command) {
      it(command + " exists", function() {
        try {
          child_process.execSync("type -p " + command + " 2>/dev/null");
        }
        catch (err) {
          if (force) {
            throw err;
          }
          else {
            skip = true;
            this.skip();
          }
        }
      });
    });
  });
});


// Cow actions
describe("cow actions", function() {
  before(function() {
    if (process.env.SKIP_ACTION_TESTS === "1") {
      this.skip();
    }
  });


  it("get the same output from moo and cowsay", function() {
    var say = lib.cowsay(msg);
    var noargs = lib.moo(msg);
    var forced = lib.moo(msg, { action: "say" });

    assert.strictEqual(noargs, say);
    assert.strictEqual(forced, say);
  });

  it("can get the same output from moo and cowthink", function() {
    var think = lib.cowthink(msg);
    var forced = lib.moo(msg, { action: "think" });

    assert.strictEqual(forced, think);
  });
});


// Corral of cows
describe("cows templates integrity", function() {
  before(function() {
    if (process.env.SKIP_CORRAL_TESTS === "1") {
      this.skip();
    }
  });


  // Corral
  /** @type {(import("../cows").Cow | undefined)[]} */
  var corral = [ undefined ];

  cows.corral.forEach(function(cow) {
    corral.push(cow);
  });

  // Actions
  /** @type {CowActionTest[]} */
  var actions = [
    { lib: "say",   command: "cowsay" },
    { lib: "think", command: "cowthink" },
  ];

  // Modes
  /** @type {("id" | "name")[]} */
  var modeIds = [ "id", "name" ];

  /** @type {(import("../lib/mode").CowMode | undefined)[]} */
  var modes = [ undefined ];

  mode.modes.forEach(function(mode) {
    modes.push(mode);
  });

  // Faces
  var faceIds = [ undefined, "e", "T", "eT" ];

  /** @type {CowFaceTest[]} */
  var faces = [
    { name: "undefined",    prop: [ undefined ] },
    { name: "empty string", prop: [ "" ] },
    { name: "whitespaces",  prop: [ " ",  "  " ] },
    { name: "tabs",         prop: [ "\t", "\t\t" ] },
    { name: "breaklines",   prop: [ "\n", "\n\n" ] },
    { name: "mixed spaces", prop: [ " \t", "\t ", " \n", "\n ", "\t\n", "\n\t" ] },
    { name: "characters",   prop: [ "x", "xx", "xy", "yx", "xyz" ] }
  ];


  // Compare against original commands
  corral.forEach(function(cow) {
    describe(cow && cow.name + ".cow.js" || "undefined", function() {
      // By cow
      var argCow = cow !== undefined ? "-f '" + cow.name + "'" : "";

      modes.forEach(function(mode) {
        modeIds.forEach(function(modeId) {
          // By mode id and name
          var libMode = mode && mode[modeId];
          var argMode = mode && mode.id !== "u" ? " -" + mode.id : "";

          faces.forEach(function(face) {
            face.prop.forEach(function(prop) {
              faceIds.forEach(function(faceId) {
                /** @type {string | undefined} */
                var libEyes = undefined;
                /** @type {string | undefined} */
                var libTongue = undefined;
                var argEyes = "";
                var argTongue = "";
                var escaped = prop !== undefined && JSON.stringify(prop).replace(/^"(.*)"$/, "$$'$1'");

                // By eyes
                if (faceId === "e" || faceId === "et") {
                  libEyes = prop;
                  argEyes = prop !== undefined ? " -e " + escaped : "";
                }

                // By tongue
                if (faceId === "t" || faceId === "et") {
                  libTongue = prop;
                  argTongue = prop !== undefined ? " -T " + escaped : "";
                }


                actions.forEach(function(action) {
                  // By action
                  var argMsg = JSON.stringify(msg);
                  var args = [ argCow, argMode, argEyes, argTongue ].join(" ").trim();
                  var command = [ "echo -e", argMsg, "|", action.command, args ].join(" ");
                  var opt = {
                    cow: cow && cow.name,
                    mode: libMode,
                    eyes: libEyes,
                    tongue: libTongue,
                    action: action.lib
                  };

                  var expression = "";
                  expression += mode && mode.name || "";
                  expression +=
                    libEyes !== undefined ? " with eyes" + JSON.stringify(libEyes) +
                      (libTongue !== undefined ? " and tongue " + JSON.stringify(libTongue) : "") :
                      libTongue !== undefined ? " with tongue " + JSON.stringify(libTongue) : "";


                  // Compare cows
                  it(action.lib + " " + argMsg + " " + expression, function() {
                    var cowsay = child_process.execSync(command).toString();
                    var cowsayjs = lib.moo(msg, opt) + "\n";

                    var info = "\n\tcommand: \"" + command + "\"\n\toptions: " + JSON.stringify(opt);
                    assert.strictEqual(cowsayjs, cowsay, info);
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});


// Word wraping
describe("word wrap", function() {
  before(function() {
    if (process.env.SKIP_WRAP_TESTS === "1") {
      this.skip();
    }
  });


  // String tests
  var msgs = [
    msg,

    undefined, "",

    "x",     "xx",     "xxx",       "xxxx",         "xxxxx",
    " ",     "  ",     "   ",       "    ",         "     ",
    "\t",    "\t\t",   "\t\t\t",    "\t\t\t\t",     "\t\t\t\t\t",
    "\n",    "\n\n",   "\n\n\n",    "\n\n\n\n",     "\n\n\n\n\n",

    " x",    "  x",    "   x",      "    x",        "     x",
    "x ",    "x  ",    "x   ",      "x    ",        "x     ",

    "x\n",   "x\n\n",  "x\n\n\n",   "x\n\n\n\n",    "x\n\n\n\n\n",
    "\nx",   "\n\nx",  "\n\n\nx",   "\n\n\n\nx",    "\n\n\n\n\nx",

    "x\t",   "x\t\t",   "x\t\t\t",   "x\t\t\t\t",   "x\t\t\t\t\t",
    "\tx",   "\t\tx",   "\t\t\tx",   "\t\t\t\tx",   "\t\t\t\t\tx",

    "x x",   "x  x",    "x   x",     "x    x",      "x     x",
    "x\nx",  "x\n\nx",  "x\n\n\nx",  "x\n\n\n\nx",  "x\n\n\n\n\nx",
    "x\tx",  "x\t\tx",  "x\t\t\tx",  "x\t\t\t\tx",  "x\t\t\t\t\tx",

    "1\t1", "12\t1", "123\t1", "1234\t1", "12345\t1", "123456\t1", "1234567\t1", "12345678\t1",
    "1\t1\t1", "12\t12\t1", "123\t123\t1", "1234\t1234\t1", "12345\t12345\t1"
  ];

  // Wrap tests
  var tests = [
    { title: "default wrap            " },
    { title: "wrap with negative value", wrap: -1 },
    { title: "wrap with zero as value ", wrap: 0 },
    { title: "wrap with one as value  ", wrap: 1 },
    { title: "wrap with two as value  ", wrap: 2 },
    { title: "wrap with 20 as value   ", wrap: 20 },
    { title: "not wrap                ", wrap: false },
  ];

  tests.forEach(function(test) {
    // Parse wrap argument
    /** @type {string | number | boolean | null | undefined} */
    var arg;

    switch (test.wrap) {
      case undefined: arg = ""; break;
      case null:
      case false: arg = "-n"; break;
      default: arg = "-W " + test.wrap;
    }


    // Compare cows
    msgs.forEach(function(msg) {
      var str = msg === undefined ? "undefined" : msg.replace(/\n/g, "\\n").replace(/\t/g, "\\t");

      it(test.title + "  msg === \"" + str + "\"", function() {
        var text = msg === undefined ? "" : "'" + msg + "'";
        var cowsay = child_process.execSync("echo " + text + " | cowsay " + arg).toString();
        var cowsayjs = lib.cowsay(msg, { wrap: test.wrap }) + "\n";

        assert.strictEqual(cowsayjs, cowsay);
      });
    });
  });
});
