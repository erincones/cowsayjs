"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action, eyes, tongue) {
  var a = fix.fixAction(action);
  var e = fix.fixFace(eyes, typeof tongue === "string" ? "oo" : "..") || "..";
  var t = fix.fixFace(tongue, "  ");

  return (
    "       " + a + "   ,__,\n" +
    "        " + a + "  (" + e + ")____\n" +
    "           (__)    )\\\n" +
    "            " + t + "||--|| *"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "small",
  render: render
};
