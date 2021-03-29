"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action) {
  var a = fix.fixAction(action);

  return (
    "  " + a + "\n" +
    "   " + a + "\n" +
    "      /\\_)o<\n" +
    "     |      \\\n" +
    "     | O . O|\n" +
    "      \\_____/\n"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "hellokitty",
  render: render
};
