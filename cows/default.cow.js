"use strict";


/** @type {import(".").CowStrictRenderer} */
function render(a, e, t) {
  return (
    "        " + a + "   ^__^\n" +
    "         " + a + "  (" + e + ")\\_______\n" +
    "            (__)\\       )\\/\\\n" +
    "             " + t + " ||----w |\n" +
    "                ||     ||"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "default",
  render: render
};
