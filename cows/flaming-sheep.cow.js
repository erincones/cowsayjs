"use strict";


/** @type {import(".").CowStrictRenderer} */
function render(a, e) {
  return (
    "  " + a + "            .    .     .   \n" +
    "   " + a + "      .  . .     `  ,     \n" +
    "    " + a + "    .; .  : .' :  :  : . \n" +
    "     " + a + "   i..`: i` i.i.,i  i . \n" +
    "      " + a + "   `,--.|i |i|ii|ii|i: \n" +
    "           U" + e + "U\\.'@@@@@@`.||' \n" +
    "           \\__/(@@@@@@@@@@)'  \n" +
    "                (@@@@@@@@)    \n" +
    "                `YY~~~~YY'    \n" +
    "                 ||    ||     "
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "flaming-sheep",
  render: render
};
