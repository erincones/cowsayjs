"use strict";


/** @type {import(".").CowStrictRenderer} */
function render(a) {
  return (
    "  " + a + "\n" +
    "   " + a + "   \\\n" +
    "        \\ /\\\n" +
    "        ( )\n" +
    "      .( o )."
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "bunny",
  render: render
};
