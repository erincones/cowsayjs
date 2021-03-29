"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action, eyes) {
  var a = fix.fixAction(action);
  var e = fix.fixFace(eyes, "oo");

  return (
    "          " + a + "      (__)\n" +
    "           " + a + "     /" + e + "|\n" +
    "            " + a + "   (_\"_)*+++++++++*\n" +
    "                   //I#\\\\\\\\\\\\\\\\I\\\n" +
    "                   I[I|I|||||I I `\n" +
    "                   I`I'///'' I I\n" +
    "                   I I       I I\n" +
    "                   ~ ~       ~ ~\n" +
    "                     Scowleton\n"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "skeleton",
  render: render
};
