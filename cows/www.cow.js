"use strict";


/** @type {import(".").CowStrictRenderer} */
function render(a, e, t) {
  return (
    "        " + a + "   ^__^\n" +
    "         " + a + "  (" + e + ")\\_______\n" +
    "            (__)\\       )\\/\\\n" +
    "             " + t + " ||--WWW |\n" +
    "                ||     ||"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "www",
  render: render
};
