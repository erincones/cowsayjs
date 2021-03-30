"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action) {
  var a = fix.fixAction(action);

  return (
    " " + a + "     ____________\n" +
    "  " + a + "    |__________|\n" +
    "      /           /\\\n" +
    "     /           /  \\\n" +
    "    /___________/___/|\n" +
    "    |          |     |\n" +
    "    |  ==\\ /== |     |\n" +
    "    |   O   O  | \\ \\ |\n" +
    "    |     <    |  \\ \\|\n" +
    "   /|          |   \\ \\\n" +
    "  / |  \\_____/ |   / /\n" +
    " / /|          |  / /|\n" +
    "/||\\|          | /||\\/\n" +
    "    -------------|\n" +
    "        | |    | |\n" +
    "       <__/    \\__>"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "milk",
  render: render
};
