"use strict";

var assert = require("assert");
var child_process = require("child_process");

var lib = require("../lib");
var mode = require("../lib/mode");
var cows = require("../cows");


// Standard message for short tests
var msg = process.env.MSG_TEST || "moo";


// System setup
describe("environment setup", function() {
  before(function() {
    if (process.env.SKIP_ENVIRONMENT_TESTS === "1") {
      this.skip();
    }
  });


  var force = process.env.FORCE_TESTS === "1";
  var skip = false;

  // Skip all tests for not valid environment
  afterEach(function() {
    if (skip) {
      process.env.SKIP_ACTION_TESTS = "1";
      process.env.SKIP_CORRAL_TESTS = "1";
      process.env.SKIP_MODE_TESTS = "1";
      process.env.SKIP_FACE_TESTS = "1";
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


  // Built-in
  describe("packge functions comparison", function() {
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

  // Original
  describe("original commands and package functions comparison", function() {
    it("gets the same output from cowsayjs and cowsay", function() {
      var cowsay = child_process.execSync("cowsay " + msg).toString();
      var cowsayjs = lib.cowsay(msg) + "\n";

      assert.strictEqual(cowsayjs, cowsay);
    });

    it("gets the same output from cowthinkjs and cowthink", function() {
      var cowthink = child_process.execSync("cowthink " + msg).toString();
      var cowthinkjs = lib.cowthink(msg) + "\n";

      assert.strictEqual(cowthinkjs, cowthink);
    });
  });
});


// Corral of cows
describe("cows templates integrity", function() {
  before(function() {
    if (process.env.SKIP_CORRAL_TESTS === "1") {
      this.skip();
    }
  });


  cows.corral.forEach(function(cow) {
    it("match " + cow.name, function() {
      var cowsay = child_process.execSync("cowsay -f " + cow.name + " " + msg).toString();
      var cowsayjs = lib.cowsay(msg, { cow: cow.name }) + "\n";

      assert.strictEqual(cowsayjs, cowsay);
    });
  });
});


// Predefined modes
describe("predefined modes", function() {
  before(function() {
    if (process.env.SKIP_MODE_TESTS === "1") {
      this.skip();
    }
  });


  mode.modes.forEach(function(mode) {
    it("match " + mode.name, function() {
      var arg = mode.id !== "u" ? "-" + mode.id : "";
      var cowsay = child_process.execSync("cowsay " + arg + " " + msg).toString();
      var name = lib.cowsay(msg, { mode: mode.name }) + "\n";
      var id = lib.cowsay(msg, { mode: mode.id }) + "\n";

      assert.strictEqual(name, cowsay);
      assert.strictEqual(id, cowsay);
    });
  });
});


// Faces properties
describe("face properties", function() {
  before(function() {
    if (process.env.SKIP_FACE_TESTS === "1") {
      this.skip();
    }
  });


  var tests = [
    { title: "set a string of length zero",             prop: "" },
    { title: "set a string of length one",              prop: "x" },
    { title: "set a string of length two",              prop: "xy" },
    { title: "set a string of length greater than two", prop: "xyz" },
    { title: "set a string with only spaces",           prop: "  " },
    { title: "set a string with one leading space",     prop: " x" },
    { title: "set a string with one trailing space",    prop: "x " }
  ];

  // Eyes
  describe("eyes", function() {
    tests.forEach(function(test) {
      it(test.title, function() {
        var cowsay = child_process.execSync("cowsay -e \"" + test.prop + "\" " + msg).toString();
        var cowsayjs = lib.cowsay(msg, { eyes: test.prop }) + "\n";

        assert.strictEqual(cowsayjs, cowsay);
      });
    });
  });

  // Tongue
  describe("tongue", function() {
    tests.forEach(function(test) {
      it(test.title, function() {
        var cowsay = child_process.execSync("cowsay -T \"" + test.prop + "\" " + msg).toString();
        var cowsayjs = lib.cowsay(msg, { tongue: test.prop }) + "\n";

        assert.strictEqual(cowsayjs, cowsay);
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
