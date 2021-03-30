"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action) {
  var a = fix.fixAction(action);

  return (
    "   " + a + "         ,        ,\n" +
    "    " + a + "       /(        )`\n" +
    "     " + a + "      \\ \\___   / |\n" +
    "            /- _  `-/  '\n" +
    "           (/\\/ \\ \\   /\\\n" +
    "           / /   | `    \\\n" +
    "           O O   ) /    |\n" +
    "           `-^--'`<     '\n" +
    "          (_.)  _  )   /\n" +
    "           `.___/`    /\n" +
    "             `-----' /\n" +
    "<----.     __ / __   \\\n" +
    "<----|====O)))==) \\) /====\n" +
    "<----'    `--' `.__,' \\\n" +
    "             |        |\n" +
    "              \\       /\n" +
    "        ______( (_  / \\______\n" +
    "      ,'  ,-----'   |        \\\n" +
    "      `--{__________)        \\/"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "daemon",
  render: render
};
