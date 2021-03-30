"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action, eyes, tongue) {
  var a = fix.fixAction(action);
  var e = fix.fixFace(eyes, "oo");
  var t = fix.fixFace(tongue, "  ");

  return (
    "      " + a + "                _\n" +
    "       " + a + "              (_)   <-- TeleBEARS\n" +
    "        " + a + "   ^__^       / \\\n" +
    "         " + a + "  (" + e + ")\\_____/_\\ \\\n" +
    "            (__)\\  you  ) /\n" +
    "             " + t + " ||----w ((\n" +
    "                ||     ||>> "
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "telebears",
  render: render
};
