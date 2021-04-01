"use strict";


/** @type {import(".").CowStrictRenderer} */
function render(a) {
  return (
    "   " + a + "\n" +
    "    " + a + "\n" +
    "      _____   _________\n" +
    "     /     \\_/         |\n" +
    "    |                 ||\n" +
    "    |                 ||\n" +
    "   |    ###\\  /###   | |\n" +
    "   |     0  \\/  0    | |\n" +
    "  /|                 | |\n" +
    " / |        <        |\\ \\\n" +
    "| /|                 | | |\n" +
    "| |     \\_______/   |  | |\n" +
    "| |                 | / /\n" +
    "/||                 /|||\n" +
    "   ----------------|\n" +
    "        | |    | |\n" +
    "        ***    ***\n" +
    "       /___\\  /___\\"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "cheese",
  render: render
};
