"use strict";


/** @type {import(".").CowStrictRenderer} */
function render(a) {
  return (
    "   " + a + "\n" +
    "    " + a + "              ....       \n" +
    "           ........    .      \n" +
    "          .            .      \n" +
    "         .             .      \n" +
    ".........              .......\n" +
    "..............................\n\n" +
    "Elephant inside ASCII snake"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "elephant-in-snake",
  render: render
};
