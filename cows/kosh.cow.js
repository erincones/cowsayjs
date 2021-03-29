"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action) {
  var a = fix.fixAction(action);

  return (
    "    " + a + "\n" +
    "     " + a + "\n" +
    "      " + a + "\n" +
    "  ___       _____     ___\n" +
    " /   \\     /    /|   /   \\\n" +
    "|     |   /    / |  |     |\n" +
    "|     |  /____/  |  |     |\n" +
    "|     |  |    |  |  |     |\n" +
    "|     |  | {} | /   |     |\n" +
    "|     |  |____|/    |     |\n" +
    "|     |    |==|     |     |\n" +
    "|      \\___________/      |\n" +
    "|                         |\n" +
    "|                         |\n"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "kosh",
  render: render
};
