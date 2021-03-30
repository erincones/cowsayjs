"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action) {
  var a = fix.fixAction(action);

  return (
    "     " + a + "\n" +
    "      " + a + "\n" +
    "          oO)-.                       .-(Oo\n" +
    "         /__  _\\                     /_  __\\\n" +
    "         \\  \\(  |     ()~()         |  )/  /\n" +
    "          \\__|\\ |    (-___-)        | /|__/\n" +
    "          '  '--'    ==`-'==        '--'  '"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "bud-frogs",
  render: render
};
