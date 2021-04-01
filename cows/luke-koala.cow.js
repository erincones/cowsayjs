"use strict";


/** @type {import(".").CowStrictRenderer} */
function render(a) {
  return (
    "  " + a + "\n" +
    "   " + a + "          .\n" +
    "       ___   //\n" +
    "     {~._.~}// \n" +
    "      ( Y )K/  \n" +
    "     ()~*~()   \n" +
    "     (_)-(_)   \n" +
    "     Luke    \n" +
    "     Sywalker\n" +
    "     koala   "
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "luke-koala",
  render: render
};
