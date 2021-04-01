"use strict";


/** @type {import(".").CowStrictRenderer} */
function render(a, e) {
  return (
    "  " + a + "\n" +
    "   " + a + "\n" +
    "       __     \n" +
    "      U" + e + "U\\.'@@@@@@`.\n" +
    "      \\__/(@@@@@@@@@@)\n" +
    "           (@@@@@@@@)\n" +
    "           `YY~~~~YY'\n" +
    "            ||    ||"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "sheep",
  render: render
};
