"use strict";


/** @type {import(".").CowStrictRenderer} */
function render(a, e, t) {
  return (
    "       " + a + "   \\_______\n" +
    " v__v   " + a + "  \\   O   )\n" +
    " (" + e + ")      ||----w |\n" +
    " (__)      ||     ||  \\/\\\n" +
    "  " + t + ""
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "mutilated",
  render: render
};
