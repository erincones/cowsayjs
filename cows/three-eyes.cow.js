"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action, eyes, tongue) {
  var a = fix.fixAction(action);
  var e = fix.fixFace(eyes, "oo");
  var t = fix.fixFace(tongue, "  ");

  // Next eye
  var n = e.length === 0 ? "" : e[e.length - 1];

  return (
    "        " + a + "  ^___^\n" +
    "         " + a + " (" + e + n + ")\\_______\n" +
    "           (___)\\       )\\/\\\n" +
    "            " + t + "  ||----w |\n" +
    "                ||     ||"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "three-eyes",
  render: render
};
