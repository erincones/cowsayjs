"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action, eyes, tongue) {
  var a = fix.fixAction(action);
  var e = fix.fixFace(eyes, "oo");
  var t = fix.fixFace(tongue, "  ");

  return (
    "       " + a + "   \\_______\n" +
    " v__v   " + a + "  \\   O   )\n" +
    " (" + e + ")      ||----w |\n" +
    " (__)      ||     ||  \\/\\\n" +
    "  " + t + ""
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "mutilated",
  render: render
};
