"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action) {
  var a = fix.fixAction(action);

  return (
    "   " + a + "\n" +
    "    " + a + "\n" +
    "        .--.\n" +
    "       |o_o |\n" +
    "       |:_/ |\n" +
    "      //   \\ \\\n" +
    "     (|     | )\n" +
    "    /'\\_   _/`\\\n" +
    "    \\___)=(___/\n"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "tux",
  render: render
};
