"use strict";


/** @type {import(".").CowStrictRenderer} */
function render(a, e, t) {
  return (
    "  " + a + "\n" +
    "   " + a + "   \\_\\_    _/_/\n" +
    "    " + a + "      \\__/\n" +
    "           (" + e + ")\\_______\n" +
    "           (__)\\       )\\/\\\n" +
    "            " + t + " ||----w |\n" +
    "               ||     ||"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "moose",
  render: render
};
