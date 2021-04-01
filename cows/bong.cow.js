"use strict";


/** @type {import(".").CowStrictRenderer} */
function render(a, e) {
  return (
    "         " + a + "\n" +
    "          " + a + "\n" +
    "            ^__^ \n" +
    "    _______/(" + e + ")\n" +
    "/\\/(       /(__)\n" +
    "   | W----|| |~|\n" +
    "   ||     || |~|  ~~\n" +
    "             |~|  ~\n" +
    "             |_| o\n" +
    "             |#|/\n" +
    "            _+#+_"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "bong",
  render: render
};
