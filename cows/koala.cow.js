"use strict";


/** @type {import(".").CowStrictRenderer} */
function render(a) {
  return (
    "  " + a + "\n" +
    "   " + a + "\n" +
    "       ___  \n" +
    "     {~._.~}\n" +
    "      ( Y )\n" +
    "     ()~*~()   \n" +
    "     (_)-(_)   "
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "koala",
  render: render
};
