"use strict";


/** @type {import(".").CowStrictRenderer} */
function render(a, e, t) {
  return (
    "       " + a + "   ,__,\n" +
    "        " + a + "  (" + e + ")____\n" +
    "           (__)    )\\\n" +
    "            " + t + "||--|| *"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "small",
  eyes: "..",
  render: render
};
