"use strict";


/** @type {import(".").CowStrictRenderer} */
function render(a) {
  return (
    "    " + a + "\n" +
    "     " + a + "\n" +
    "      " + a + "\n" +
    "  ___       _____     ___\n" +
    " /   \\     /    /|   /   \\\n" +
    "|     |   /    / |  |     |\n" +
    "|     |  /____/  |  |     |     \n" +
    "|     |  |    |  |  |     |\n" +
    "|     |  | {} | /   |     |\n" +
    "|     |  |____|/    |     |\n" +
    "|     |    |==|     |     |\n" +
    "|      \\___________/      |\n" +
    "|                         |\n" +
    "|                         |"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "kosh",
  render: render
};
