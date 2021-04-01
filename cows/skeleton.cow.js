"use strict";


/** @type {import(".").CowStrictRenderer} */
function render(a, e) {
  return (
    "          " + a + "      (__)      \n" +
    "           " + a + "     /" + e + "|  \n" +
    "            " + a + "   (_\"_)*+++++++++*\n" +
    "                   //I#\\\\\\\\\\\\\\\\I\\\n" +
    "                   I[I|I|||||I I `\n" +
    "                   I`I'///'' I I\n" +
    "                   I I       I I\n" +
    "                   ~ ~       ~ ~\n" +
    "                     Scowleton"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "skeleton",
  render: render
};
