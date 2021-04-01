"use strict";


/** @type {import(".").CowStrictRenderer} */
function render(a) {
  return (
    " " + a + "     /\\  ___  /\\\n" +
    "  " + a + "   // \\/   \\/ \\\\\n" +
    "     ((    O O    ))\n" +
    "      \\\\ /     \\ //\n" +
    "       \\/  | |  \\/ \n" +
    "        |  | |  |  \n" +
    "        |  | |  |  \n" +
    "        |   o   |  \n" +
    "        | |   | |  \n" +
    "        |m|   |m|  "
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "elephant",
  render: render
};
