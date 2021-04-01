"use strict";


/** @type {import(".").CowStrictRenderer} */
function render(a) {
  return (
    "  " + a + "\n" +
    "   " + a + "\n" +
    "      /\\_)o<\n" +
    "     |      \\\n" +
    "     | O . O|\n" +
    "      \\_____/"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "hellokitty",
  render: render
};
