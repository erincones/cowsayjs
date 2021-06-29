"use strict";

var assert = require("assert");
var child_process = require("child_process");

var lib = require("../lib");
var box = require("../lib/box");
var mode = require("../lib/mode");
var cows = require("../cows");

var env = process.env;


// Standard message for short tests
var MSG = env.MSG_TEST || "moo";

// Cowsay command
var COWSAY = env.COWSAY || "cowsay";

// Cowthink command
var COWTHINK = env.COWTHINK || "cowthink";


/**
 * Executes a CLI command and returns its output
 *
 * @param {string} command CLI command
 * @returns {string} Command output or empty string if an error occours
 */
function cli(command) {
  return child_process.execSync(command).toString();
}

/**
 * Check if the given command exists
 *
 * @param {string} command Command to check
 * @returns Absolute command path
 */
function exists(command) {
  return cli("type -p " + command + " 2>/dev/null");
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


/**
 * Build cow with moosay and compare with the given command
 *
 * @param {lib.CowMooOptions} opt Moo options
 * @param {string | false} command CLI command
 * @param {string} info Error information
 */
function test(opt, command, info) {
  // Create cow
  try {
    var moosay = trimLinesEnd(lib.moo(opt));
  }
  catch (err) {
    process.stderr.write(info);
    throw err;
  }

  // Compare cows
  if (command) {
    var cowsay = trimLinesEnd(cli(command));

    assert.strictEqual(moosay, cowsay, info);
  }
}


// Required commands
describe("required commands", function() {
  before(function() {
    if (env.SKIP_TESTS_COMMANDS === "1") {
      this.skip();
    }
  });

  it("should exists the " + COWSAY + " command", function() {
    try {
      exists(COWSAY);
    }
    catch (err) {
      COWSAY = "";
      this.skip();
    }
  });

  it("should exists the " + COWTHINK + " command", function() {
    try {
      exists(COWTHINK);
    }
    catch (err) {
      COWTHINK = "";
      this.skip();
    }
  });
});


// Cow actions
describe("cow actions", function() {
  before(function() {
    if (env.SKIP_TESTS_ACTION === "1") {
      this.skip();
    }
  });


  it("should get the same output with moo and cowsay", function() {
    var cowsay = lib.cowsay(MSG);
    var moo = lib.moo(MSG);
    var moosay = lib.moo(MSG, { action: "say" });

    assert.strictEqual(moo, cowsay);
    assert.strictEqual(moosay, cowsay);
  });

  it("should get the same output with moo and cowthink", function() {
    var cowthink = lib.cowthink(MSG, { tongue: "U " });
    var moothink = lib.moo(MSG, { tongue: "U ", action: "think" });

    assert.strictEqual(moothink, cowthink);
  });


  it("should replace wrong arguments with valid values", function() {
    var func = function() {};

    /** @type {any[][]} */
    var args = [
      [],
      [ undefined, null ],
      [ undefined, false ],
      [ undefined, func ],
      [ undefined, [] ],
      [ undefined, 1 ],
      [ undefined, "" ],
      [ undefined, {} ],
      [ null,      {} ],
      [ false,     {} ],
      [ func,      {} ],
      [ [],        {} ],
      [ 1,         {} ],
      [ "",        {} ],
      [ { dummy: 0 } ],
      [ { cow: null, mode: null, eyes: null, tongue: null, wrap: func, action: null } ]
    ];

    // Generate cows
    args.forEach(function(arg) {
      lib.moo(arg[0], arg[1]);
      lib.cowsay(arg[0], arg[1]);
      lib.cowthink(arg[0], arg[1]);
    });
  });

  it("should perform say and think actions in empty box without cow", function() {
    var say = trimLinesEnd(box.say());
    var think = trimLinesEnd(box.think());
    var emptySay = trimLinesEnd(" _ \n<   >\n - ");
    var emptyThink = trimLinesEnd(" _ \n(   )\n - ");

    assert.strictEqual(say, emptySay);
    assert.strictEqual(think, emptyThink);
  });


  it("should emulate the original " + COWSAY + " command", function() {
    if (COWSAY) {
      var moosay = trimLinesEnd(lib.moo(MSG));
      var cowsay = trimLinesEnd(cli(COWSAY + " " + MSG));

      assert.strictEqual(moosay, cowsay);
    }
    else {
      this.skip();
    }
  });

  it("should emulate the original " + COWTHINK + " command", function() {
    if (COWTHINK) {
      var moothink = trimLinesEnd(lib.moo(MSG, { action: "think" }));
      var cowthink = trimLinesEnd(cli(COWTHINK + " " + MSG));

      assert.strictEqual(moothink, cowthink);
    }
    else {
      this.skip();
    }
  });
});


// Cow modes
describe("cow modes", function() {
  before(function() {
    if (env.SKIP_TESTS_MODE === "1") {
      this.skip();
    }
  });


  // Faces
  var faces = [
    undefined, "",
    "\t", "\n", "\t\n", "\n\t",
    "x", "xy", "yx", "xyz"
  ];

  // Mesage
  var argMsg = unescape(MSG);


  // Build faces
  mode.modes.forEach(function(mode) {
    it("should print the " + mode.name + " mode", function() {
      // By mode id and name
      var libMode = mode && mode.id;
      var argMode = mode && mode.id !== "u" ? " -" + mode.id : "";

      faces.forEach(function(prop) {
        var libEyes = prop;
        var libTongue = prop;
        var argEyes = prop !== undefined ? "-e " + unescape(prop) : "";
        var argTongue = prop !== undefined ? "-T " + unescape(prop) : "";

        // Parse arguments and options
        var args = [ argMode, argEyes, argTongue ].join(" ").trim();
        var command = [ "echo", argMsg, "|" , COWSAY, args ].join(" ");
        var opt = {
          message: MSG,
          mode: libMode,
          eyes: libEyes,
          tongue: libTongue
        };

        var info = "\n\tcommand: \"" + command + "\"\n\toptions: " + JSON.stringify(opt);

        test(opt, COWSAY && command, info);
      });
    });
  });


  // Query modes
  describe("mode faces querying", function() {
    mode.modes.forEach(function(known) {
      it("should find the right face for the " + JSON.stringify(known.name) + " mode", function() {
        var byId = mode.modeFace(known.id);
        var byName = mode.modeFace(known.name);

        assert.strictEqual(byId.eyes, known.eyes);
        assert.strictEqual(byId.tongue, known.tongue);
        assert.strictEqual(byName.eyes, known.eyes);
        assert.strictEqual(byName.tongue, known.tongue);
      });
    });

    it("should get the default face for not valid mode", function() {
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

      it("should find the mode for the eyes " + eyes + " and tongue " + tongue, function() {
        var face = { eyes: known.eyes, tongue: known.tongue };
        var byFace = mode.faceMode(face);

        assert.strictEqual(byFace.id, known.id);
        assert.strictEqual(byFace.name, known.name);
      });
    });

    it("should find the default mode for not valid face", function() {
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
    if (env.SKIP_TESTS_CORRAL === "1") {
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
  var argMsg = unescape(MSG);


  // Compare against original commands
  corral.forEach(function(cow) {
    it("should generate the " + (cow && cow.name || "undefined") + " cow", function() {
      // By cow
      var argCow = cow !== undefined ? "-f '" + cow.name + "'" : "";

      faces.forEach(function(face) {
        var libEyes = face.eyes;
        var libTongue = face.tongue;
        var argEyes = face.eyes !== undefined ? "-e " + unescape(face.eyes) : "";
        var argTongue = face.tongue !== undefined ? "-T " + unescape(face.tongue) : "";

        // By face
        var args = [ argCow, argEyes, argTongue ].join(" ").trim();
        var command = [ "echo", argMsg, "|", COWSAY, args ].join(" ");
        var opt = {
          message: MSG,
          cow: cow && cow.name,
          eyes: libEyes,
          tongue: libTongue
        };

        var info = "\n\tcommand: \"" + command + "\"\n\toptions: " + JSON.stringify(opt);

        test(opt, COWSAY && command, info);
      });
    });
  });


  // Querying cows
  describe("cow templates querying", function() {
    cows.corral.forEach(function(cow) {
      it("should find the cow " + JSON.stringify(cow.name), function() {
        var byName = cows.getCow(cow.name);

        assert.strictEqual(byName.name, cow.name);
      });
    });

    it("should get the default cow for not valid cows", function() {
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
    if (env.SKIP_TESTS_WRAP === "1") {
      this.skip();
    }
  });


  // String tests
  var msgs = [
    // eslint-disable-next-line no-extra-parens
    { wrap: /** @type {never} */({}), message: /** @type {never} */({}) },
    { wrap: undefined, message: "" },
    { wrap: undefined, message: " x" },
    { wrap: undefined, message: " x\n\nx\n\n" },
    { wrap: false,     message: undefined },
    { wrap: null,      message: " \t\n " },
    { wrap: true,      message: " \t\n " },
    { wrap: 1,         message: "x" },
    { wrap: 1,         message: "x\n\nx" },
    { wrap: 3,         message: "xxx" },
    { wrap: 3,         message: "xx " },
    { wrap: 3,         message: "xxxx " },
    { wrap: 3,         message: "xxxxx" },
    { wrap: "3",       message: MSG },
    { wrap: "{3",      message: MSG }
  ];

  msgs.forEach(function(opt) {
    // Parse wrap
    /** @type {import("../lib").CowOptions["wrap"]} */
    var argWrap;
    var invalid = false;

    switch (opt.wrap) {
      case true:
      case undefined: argWrap = ""; break;
      case null:
      case false: argWrap = "-n"; break;
      default:
        argWrap = "-W " + opt.wrap;

        switch (typeof opt.wrap) {
          case "string": invalid = isNaN(parseInt(opt.wrap)); break;
          case "number": invalid = isNaN(opt.wrap); break;
          default: invalid = true;
        }
    }


    // Mesage and command
    var argMsg = opt.message === undefined ? "" : unescape(opt.message);
    var command = [ "echo", argMsg, "|", COWSAY, argWrap ].join(" ");

    // Test information and title
    var info = "\n\tcommand: \"" + command + "\"\n\toptions: " + JSON.stringify(opt);
    var title =
      "should use wrap " + JSON.stringify(opt.wrap) +
      " to print " + JSON.stringify(opt.message);


    // Compare cows
    it(title, function() {
      test(opt, !invalid && COWSAY && command, info);
    });
  });
});
