"use strict";


/** @type {import(".").CowStrictRenderer} */
function render(a) {
  return (
    "        " + a + "    ,-^-.\n" +
    "         " + a + "   !oYo!\n" +
    "          " + a + " /./=\\.\\______\n" +
    "               ##        )\\/\\\n" +
    "                ||-----w||\n" +
    "                ||      ||\n\n" +
    "               Cowth Vader"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "vader",
  render: render
};
