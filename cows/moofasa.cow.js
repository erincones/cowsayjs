"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action, eyes) {
  var a = fix.fixAction(action);
  var e = fix.fixFace(eyes, "oo");

  return (
    "       " + a + "    ____\n" +
    "        " + a + "  /    \\\n" +
    "          | ^__^ |\n" +
    "          | (" + e + ") |______\n" +
    "          | (__) |      )\\/\\\n" +
    "           \\____/|----w |\n" +
    "                ||     ||\n" +
    "	         Moofasa"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "moofasa",
  render: render
};
