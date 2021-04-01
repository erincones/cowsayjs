"use strict";


/** @type {import(".").CowStrictRenderer} */
function render(a, e, t) {
  return (
    "      " + a + "                _\n" +
    "       " + a + "              (_)   <-- TeleBEARS\n" +
    "        " + a + "   ^__^       / \\\n" +
    "         " + a + "  (" + e + ")\\_____/_\\ \\\n" +
    "            (__)\\  you  ) /\n" +
    "             " + t + " ||----w ((\n" +
    "                ||     ||>> "
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "telebears",
  render: render
};
