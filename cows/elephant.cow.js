"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action) {
  var a = fix.fixAction(action);

  return (
    " " + a + "     /\\  ___  /\\\n" +
    "  " + a + "   // \\/   \\/ \\\\\n" +
    "     ((    O O    ))\n" +
    "      \\\\ /     \\ //\n" +
    "       \\/  | |  \\/\n" +
    "        |  | |  |\n" +
    "        |  | |  |\n" +
    "        |   o   |\n" +
    "        | |   | |\n" +
    "        |m|   |m|  \n"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "elephant",
  render: render
};
