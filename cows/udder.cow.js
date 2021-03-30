"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action, eyes, tongue) {
  var a = fix.fixAction(action);
  var e = fix.fixFace(eyes, "oo");
  var t = fix.fixFace(tongue, "  ");

  return (
    "  " + a + "\n" +
    "   " + a + "    (__)\n" +
    "        " + e[0] + " " + e[1] + "\\\n" +
    "       ('') \\---------\n" +
    "        " + t + "\\           \\\n" +
    "           |          |\\\n" +
    "           ||---(  )_|| *\n" +
    "           ||    UU  ||\n" +
    "           ==        ==    "
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "udder",
  render: render
};
