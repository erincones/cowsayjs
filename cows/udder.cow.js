"use strict";


/** @type {import(".").CowStrictRenderer} */
function render(a, e, t) {
  return (
    "  " + a + "\n" +
    "   " + a + "    (__)               \n" +
    "        " + e.slice(0, -1) + " " + e.slice(-1) + "\\               \n" +
    "       ('') \\---------     \n" +
    "        " + t + "\\           \\    \n" +
    "           |          |\\   \n" +
    "           ||---(  )_|| *  \n" +
    "           ||    UU  ||    \n" +
    "           ==        ==    "
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "udder",
  render: render
};
