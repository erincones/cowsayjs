"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action, eyes, tongue) {
  var a = fix.fixAction(action);
  var e = fix.fixFace(eyes, "oo");
  var t = fix.fixFace(tongue, "  ");

  return (
    "      " + a + "                _\n" +
    "       " + a + "              (_)\n" +
    "        " + a + "   ^__^       / \\\n" +
    "         " + a + "  (" + e + ")\\_____/_\\ \\\n" +
    "            (__)\\       ) /\n" +
    "             " + t + " ||----w ((\n" +
    "                ||     ||>> \n"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "sodomized",
  render: render
};
