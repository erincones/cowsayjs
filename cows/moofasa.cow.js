"use strict";


/** @type {import(".").CowStrictRenderer} */
function render(a, e) {
  return (
    "       " + a + "    ____\n" +
    "        " + a + "  /    \\\n" +
    "          | ^__^ |\n" +
    "          | (" + e + ") |______\n" +
    "          | (__) |      )\\/\\\n" +
    "           \\____/|----w |\n" +
    "                ||     ||\n\n" +
    "	         Moofasa"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "moofasa",
  render: render
};
