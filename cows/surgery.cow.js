"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action, eyes) {
  var a = fix.fixAction(action);
  var e = fix.fixFace(eyes, "oo");

  return (
    "          " + a + "           \\  /\n" +
    "           " + a + "           \\/\n" +
    "               (__)    /\\\n" +
    "               (" + e + ")   O  O\n" +
    "               _\\/_   //\n" +
    "         *    (    ) //\n" +
    "          \\  (\\\\    //\n" +
    "           \\(  \\\\    )\n" +
    "            (   \\\\   )   /\\\n" +
    "  ___[\\______/^^^^^^^\\__/) o-)__\n" +
    " |\\__[=======______//________)__\\\n" +
    " \\|_______________//____________|\n" +
    "     |||      || //||     |||\n" +
    "     |||      || @.||     |||\n" +
    "      ||      \\/  .\\/      ||\n" +
    "                 . .\n" +
    "                '.'.`\n" +
    "            COW-OPERATION                           "
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "surgery",
  render: render
};
