"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action, eyes) {
  var a = fix.fixAction(action);
  var e = fix.fixFace(eyes, "oo");

  return (
    "         " + a + "\n" +
    "          " + a + "\n" +
    "            ^__^\n" +
    "    _______/(" + e + ")\n" +
    "/\\/(       /(__)\n" +
    "   | W----|| |~|\n" +
    "   ||     || |~|  ~~\n" +
    "             |~|  ~\n" +
    "             |_| o\n" +
    "             |#|/\n" +
    "            _+#+_\n"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "bong",
  render: render
};
