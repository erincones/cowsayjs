"use strict";


/** @type {import(".").CowStrictRenderer} */
function render(a, e, t) {
  return (
    "      " + a + "                _\n" +
    "       " + a + "              (_)\n" +
    "        " + a + "   ^__^       / \\\n" +
    "         " + a + "  (" + e + ")\\_____/_\\ \\\n" +
    "            (__)\\       ) /\n" +
    "             " + t + " ||----w ((\n" +
    "                ||     ||>> "
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "sodomized",
  render: render
};
