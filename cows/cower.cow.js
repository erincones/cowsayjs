"use strict";


/** @type {import(".").CowStrictRenderer} */
function render(a) {
  return (
    "     " + a + "\n" +
    "      " + a + "\n" +
    "        ,__, |    | \n" +
    "        (oo)\\|    |___\n" +
    "        (__)\\|    |   )\\_\n" +
    "             |    |_w |  \\\n" +
    "             |    |  ||   *\n\n" +
    "             Cower...."
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "cower",
  render: render
};
