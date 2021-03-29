"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action) {
  var a = fix.fixAction(action);

  return (
    "  " + a + "            .    .     .\n" +
    "   " + a + "      .  . .     `  ,\n" +
    "    " + a + "    .; .  : .' :  :  : .\n" +
    "     " + a + "   i..`: i` i.i.,i  i .\n" +
    "      " + a + "   `,--.|i |i|ii|ii|i:\n" +
    "           U${eyes}U\\.'@@@@@@`.||'\n" +
    "           \\__/(@@@@@@@@@@)'\n" +
    "                (@@@@@@@@)\n" +
    "                `YY~~~~YY'\n" +
    "                 ||    ||     \n"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "flaming-sheep",
  render: render
};
