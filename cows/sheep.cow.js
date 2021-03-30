"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action, eyes) {
  var a = fix.fixAction(action);
  var e = fix.fixFace(eyes, "oo");

  return (
    "  " + a + "\n" +
    "   " + a + "\n" +
    "       __\n" +
    "      U" + e + "U\\.'@@@@@@`.\n" +
    "      \\__/(@@@@@@@@@@)\n" +
    "           (@@@@@@@@)\n" +
    "           `YY~~~~YY'\n" +
    "            ||    ||"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "sheep",
  render: render
};
