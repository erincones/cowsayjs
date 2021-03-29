"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action) {
  var a = fix.fixAction(action);

  return (
    "     " + a + "\n" +
    "      " + a + "  (__)\n" +
    "         (\\/)\n" +
    "  /-------\\/\n" +
    " / | 666 ||\n" +
    "*  ||----||\n" +
    "   ~~    ~~      \n"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "satanic",
  render: render
};
