"use strict";


/** @type {import(".").CowStrictRenderer} */
function render(a, e, t) {
  return (
    "  " + a + "   ^__^\n" +
    "   " + a + "  (" + e + ")\\_______        ________\n" +
    "      (__)\\       )\\/\\    |Super |\n" +
    "       " + t + " ||----W |       |Milker|\n" +
    "          ||    UDDDDDDDDD|______|"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "supermilker",
  render: render
};
