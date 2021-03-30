"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action, eyes, tongue) {
  var a = fix.fixAction(action);
  var e = fix.fixFace(eyes, "oo");
  var t = fix.fixFace(tongue, "  ");

  return (
    "  " + a + "\n" +
    "   " + a + "   \\_\\_    _/_/\n" +
    "    " + a + "      \\__/\n" +
    "           (" + e + ")\\_______\n" +
    "           (__)\\       )\\/\\\n" +
    "            " + t + " ||----w |\n" +
    "               ||     ||"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "moose",
  render: render
};
