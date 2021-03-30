"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action) {
  var a = fix.fixAction(action);

  return (
    "  " + a + "\n" +
    "   " + a + "   \\\n" +
    "        \\ /\\\n" +
    "        ( )\n" +
    "      .( o )."
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "bunny",
  render: render
};
