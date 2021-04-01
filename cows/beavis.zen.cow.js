"use strict";


/** @type {import(".").CowStrictRenderer} */
function render(a) {
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
    "             /            _ \\"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "beavis.zen",
  render: render
};
