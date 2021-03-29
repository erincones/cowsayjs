"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action) {
  var a = fix.fixAction(action);

  return (
    "   " + a + "         __------~~-,\n" +
    "    " + a + "      ,'            ,\n" +
    "          /               \\\n" +
    "         /                :\n" +
    "        |                  '\n" +
    "        |                  |\n" +
    "        |                  |\n" +
    "         |   _--           |\n" +
    "         _| =-.     .-.   ||\n" +
    "         o|/o/       _.   |\n" +
    "         /  ~          \\ |\n" +
    "       (____@)  ___~    |\n" +
    "          |_===~~~.`    |\n" +
    "       _______.--~     |\n" +
    "       \\________       |\n" +
    "                \\      |\n" +
    "              __/-___-- -__\n" +
    "             /            _ \\\n"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "beavis.zen",
  render: render
};
