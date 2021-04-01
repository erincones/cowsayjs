"use strict";


/** @type {import(".").CowStrictRenderer} */
function render(a) {
  return (
    "     " + a + "\n" +
    "      " + a + "  (__)  \n" +
    "         (\\/)  \n" +
    "  /-------\\/    \n" +
    " / | 666 ||    \n" +
    "*  ||----||      \n" +
    "   ~~    ~~      "
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "satanic",
  render: render
};
