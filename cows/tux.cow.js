"use strict";


/** @type {import(".").CowStrictRenderer} */
function render(a) {
  return (
    "   " + a + "\n" +
    "    " + a + "\n" +
    "        .--.\n" +
    "       |o_o |\n" +
    "       |:_/ |\n" +
    "      //   \\ \\\n" +
    "     (|     | )\n" +
    "    /'\\_   _/`\\\n" +
    "    \\___)=(___/\n"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "tux",
  render: render
};
