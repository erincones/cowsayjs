"use strict";


/** @type {import(".").CowStrictRenderer} */
function render(a, e, t) {
  return (
    "        " + a + "  ^___^\n" +
    "         " + a + " (" + e + e.slice(-1) + ")\\_______\n" +
    "           (___)\\       )\\/\\\n" +
    "            " + t + "  ||----w |\n" +
    "                ||     ||"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "three-eyes",
  render: render
};
