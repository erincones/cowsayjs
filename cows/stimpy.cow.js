"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action) {
  var a = fix.fixAction(action);

  return (
    "  " + a + "     .    _  .    \n" +
    "   " + a + "    |\\_|/__/|    \n" +
    "       / / \\/ \\  \\  \n" +
    "      /__|O||O|__ \\ \n" +
    "     |/_ \\_/\\_/ _\\ |  \n" +
    "     | | (____) | ||  \n" +
    "     \\/\\___/\\__/  // \n" +
    "     (_/         ||\n" +
    "      |          ||\n" +
    "      |          ||\\   \n" +
    "       \\        //_/  \n" +
    "        \\______//\n" +
    "       __ || __||\n" +
    "      (____(____)"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "stimpy",
  render: render
};
