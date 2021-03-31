"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action) {
  var a = fix.fixAction(action);

  return (
    "        " + a + "    ,-^-.\n" +
    "         " + a + "   !oYo!\n" +
    "          " + a + " /./=\\.\\______\n" +
    "               ##        )\\/\\\n" +
    "                ||-----w||\n" +
    "                ||      ||\n\n" +
    "               Cowth Vader"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "vader",
  render: render
};
