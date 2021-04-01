"use strict";

var assert = require("assert");
var child_process = require("child_process");

var lib = require("../lib");
var box = require("../lib/box");
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


/**
 * Executes a CLI command and returns its output
 *
 * @param {string} command CLI command
 * @returns {string} Command output or empty string if an error occours
 */
function cli(command) {
  try {
    return child_process.execSync(command).toString();
  }
  catch (err) {
    process.stderr.write(err);
    return "";
  }
}

/**
 * Trim right every line of the string
 *
 * @param {string} str String to trim
 * @returns {string} Trimmed string
 */
function trimLinesEnd(str) {
  return str
    .replace(/ +\n/g, "\n")
    .replace(/(?: |\n)+$/, "");
}

/**
 * Unescape special characters
 *
 * @param {string} str String to unescape
 * @returns {string} Unescaped string
 */
function unescape(str) {
  return JSON.stringify(str).replace(/^"(.*)"$/, "$$'$1'");
}


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


  it("say with moo and cowsay", function() {
    var cowsay = lib.cowsay(msg);
    var moo = lib.moo(msg);
    var moosay = lib.moo(msg, { action: "say" });

    assert.strictEqual(moo, cowsay);
    assert.strictEqual(moosay, cowsay);
  });

  it("think with moo and cowthink", function() {
    var cowthink = lib.cowthink(msg, { tongue: "U " });
    var moothink = lib.moo(msg, {  tongue: "U ", action: "think" });

    assert.strictEqual(moothink, cowthink);
  });

  it("perform say and think actions in empty box without cow", function() {
    var say = trimLinesEnd(box.say());
    var think = trimLinesEnd(box.think());
    var emptySay = trimLinesEnd(" _ \n<   >\n - ");
    var emptyThink = trimLinesEnd(" _ \n(   )\n - ");

    assert.strictEqual(say, emptySay);
    assert.strictEqual(think, emptyThink);
  });


  it("emulate original cowsay and cowthink", function() {
    var cowsay = trimLinesEnd(cli("cowsay " + msg));
    var cowthink = trimLinesEnd(cli("cowthink " + msg));
    var moosay = trimLinesEnd(lib.moo(msg));
    var moothink = trimLinesEnd(lib.moo(msg, { action: "think" }));

    assert.strictEqual(moosay, cowsay);
    assert.strictEqual(moothink, cowthink);
  });
});


// Cow modes
describe("cow modes", function() {
  before(function() {
    if (process.env.SKIP_MODE_TESTS === "1") {
      this.skip();
    }
  });


  // Modes
  /** @type {("id" | "name")[]} */
  var modeIds = [ "id", "name" ];

  /** @type {(import("../lib/mode").CowModeData | undefined)[]} */
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

  // Mesage
  var argMsg = unescape(msg);

  /** @type {string[]} */
  var commands = [];


  // Build faces
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
            var escaped = prop !== undefined && unescape(prop);

            // By eyes
            if (faceId === "e" || faceId === "eT") {
              libEyes = prop;
              argEyes = prop !== undefined ? " -e " + escaped : "";
            }

            // By tongue
            if (faceId === "T" || faceId === "eT") {
              libTongue = prop;
              argTongue = prop !== undefined ? " -T " + escaped : "";
            }


            // Parse arguments and options
            var args = [ argMode, argEyes, argTongue ].join(" ").trim();
            var command = [ "echo", argMsg, "| cowsay" , args ].join(" ");
            var opt = {
              mode: libMode,
              eyes: libEyes,
              tongue: libTongue
            };

            // Test title
            var testTitle = "perform ";
            testTitle += (mode && mode.name || "undefined") + " mode";
            testTitle +=
              libEyes !== undefined ? " with eyes" + JSON.stringify(libEyes) +
                (libTongue !== undefined ? " and tongue " + JSON.stringify(libTongue) : "") :
                libTongue !== undefined ? " with tongue " + JSON.stringify(libTongue) : "";


            // Compare command
            it(testTitle, function() {
              if (!commands.includes(command)) {
                commands.push(command);
                this.skip();
              }

              var cowsay = trimLinesEnd(cli(command));
              var moosay = trimLinesEnd(lib.moo(msg, opt));

              var info = "\n\tcommand: \"" + command + "\"\n\toptions: " + JSON.stringify(opt);
              assert.strictEqual(moosay, cowsay, info);
            });
          });
        });
      });
    });
  });


  // Query modes
  describe("mode faces querying", function() {
    mode.modes.forEach(function(known) {
      it("look for the " + JSON.stringify(known.name) + " mode", function() {
        var byId = mode.modeFace(known.id);
        var byName = mode.modeFace(known.name);

        assert.strictEqual(byId.eyes, known.eyes);
        assert.strictEqual(byId.tongue, known.tongue);
        assert.strictEqual(byName.eyes, known.eyes);
        assert.strictEqual(byName.tongue, known.tongue);
      });
    });

    it("look for invalid mode", function() {
      var undef = mode.modeFace();
      var empty = mode.modeFace("");

      assert.strictEqual(undef.eyes, mode.modes[0].eyes);
      assert.strictEqual(undef.tongue, mode.modes[0].tongue);
      assert.strictEqual(empty.eyes, mode.modes[0].eyes);
      assert.strictEqual(empty.tongue, mode.modes[0].tongue);
    });
  });

  // Query modes
  describe("face modes querying", function() {
    mode.modes.forEach(function(known) {
      var eyes = JSON.stringify(known.eyes);
      var tongue = JSON.stringify(known.tongue);

      it("look the mode for the eyes " + eyes + " and tongue " + tongue, function() {
        var face = { eyes: known.eyes, tongue: known.tongue };
        var byFace = mode.faceMode(face);

        assert.strictEqual(byFace.id, known.id);
        assert.strictEqual(byFace.name, known.name);
      });
    });

    it("look mode for invalid face", function() {
      // eslint-disable-next-line no-extra-parens
      var invalid = mode.faceMode(/** @type {never} */(null));
      var undef = mode.faceMode({});
      var empty = mode.faceMode({ eyes: "", tongue: "" });

      assert.strictEqual(undef.id, mode.modes[0].id);
      assert.strictEqual(undef.name, mode.modes[0].name);
      assert.strictEqual(empty.id, mode.modes[0].id);
      assert.strictEqual(empty.name, mode.modes[0].name);
      assert.strictEqual(invalid.id, mode.modes[0].id);
      assert.strictEqual(invalid.name, mode.modes[0].name);
    });
  });
});


// Corral of cows
describe("cows templates", function() {
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

  // Faces
  /** @type {import("../lib/mode").CowFace[]} */
  var faces = [
    { eyes: undefined, tongue: undefined },
    { eyes: ""  ,      tongue: undefined },
    { eyes: "x" ,      tongue: undefined },
    { eyes: "xy",      tongue: undefined },
    { eyes: undefined, tongue: "" },
    { eyes: "",        tongue: "" },
    { eyes: "x",       tongue: "" },
    { eyes: "xy",      tongue: "" },
    { eyes: undefined, tongue: "x" },
    { eyes: "",        tongue: "x" },
    { eyes: "x",       tongue: "x" },
    { eyes: "xy",      tongue: "x" },
    { eyes: undefined, tongue: "xy" },
    { eyes: "",        tongue: "xy" },
    { eyes: "x",       tongue: "xy" },
    { eyes: "xy",      tongue: "xy" }
  ];

  // Mesage
  var argMsg = unescape(msg);


  // Compare against original commands
  corral.forEach(function(cow) {
    it("generate the " + (cow && cow.name || "undefined") + " cow", function() {
      // By cow
      var argCow = cow !== undefined ? "-f '" + cow.name + "'" : "";

      faces.forEach(function(face) {
        var libEyes = face.eyes;
        var libTongue = face.tongue;
        var argEyes = face.eyes !== undefined ? "-e " + unescape(face.eyes) : "";
        var argTongue = face.tongue !== undefined ? "-T " + unescape(face.tongue) : "";

        // By action
        var args = [ argCow, argEyes, argTongue ].join(" ").trim();
        var command = [ "echo", argMsg, "| cowsay" , args ].join(" ");
        var opt = {
          cow: cow && cow.name,
          eyes: libEyes,
          tongue: libTongue
        };


        // Compare cows
        var cowsay = trimLinesEnd(cli(command));
        var cowsayjs = trimLinesEnd(lib.moo(msg, opt));

        if (cowsay.length !== 0) {
          var info = "\n\tcommand: \"" + command + "\"\n\toptions: " + JSON.stringify(opt);
          assert.strictEqual(cowsayjs, cowsay, info);
        }
      });
    });
  });


  // Querying cows
  describe("cow templates querying", function() {
    cows.corral.forEach(function(cow) {
      it("look for the cow " + JSON.stringify(cow.name), function() {
        var byName = cows.getCow(cow.name);

        assert.strictEqual(byName.name, cow.name);
      });
    });

    it("look mode for invalid face", function() {
      // eslint-disable-next-line no-extra-parens
      var invalid = cows.getCow(/** @type {never} */(null));
      var empty = cows.getCow("");

      assert.strictEqual(empty.name, cows.corral[0].name);
      assert.strictEqual(invalid.name, cows.corral[0].name);
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
    { wrap: undefined, msg: "" },
    { wrap: undefined, msg: " x" },
    { wrap: undefined, msg: " x\n\nx\n\n" },
    { wrap: false, msg: undefined },
    { wrap: null, msg: " \t\n " },
    { wrap: 1, msg: "x" },
    { wrap: 1, msg: "x\n\nx" },
    { wrap: 3, msg: "xxx" },
    { wrap: 3, msg: "xx " },
    { wrap: 3, msg: "xxxx " },
    { wrap: 3, msg: "xxxxx" }
  ];

  msgs.forEach(function(msg) {
    // Parse wrap
    /** @type {import("../lib").CowOptions["wrap"]} */
    var argWrap;

    switch (msg.wrap) {
      case undefined: argWrap = ""; break;
      case null:
      case false: argWrap = "-n"; break;
      default: argWrap = "-W " + msg.wrap;
    }

    // Mesage and command
    var argMsg = msg.msg === undefined ? "" : unescape(msg.msg);
    var command = ["echo", argMsg, "| cowsay", argWrap].join(" ");
    var opt = { wrap: msg.wrap };

    // Test title
    var testTitle =
      "use wrap " + JSON.stringify(msg.wrap) +
      " to print " + JSON.stringify(msg.msg);


    // Compare cows
    it(testTitle, function() {
      var cowsay = trimLinesEnd(cli(command));
      var cowsayjs = trimLinesEnd(lib.moo(msg.msg, opt));
      var info = "\n\tcommand: \"" + command + "\"\n\toptions: " + JSON.stringify(opt);

      assert.strictEqual(cowsayjs, cowsay, info);
    });
  });
});
