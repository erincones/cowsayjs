"use strict";


/** @type {import(".").CowStrictRenderer} */
function render(a) {
  return (
    "   " + a + "\n" +
    "    " + a + "\n" +
    "    ____  \n" +
    "   /# /_\\_\n" +
    "  |  |/o\\o\\\n" +
    "  |  \\\\_/_/\n" +
    " / |_   |  \n" +
    "|  ||\\_ ~| \n" +
    "|  ||| \\/  \n" +
    "|  |||_    \n" +
    " \\//  |    \n" +
    "  ||  |    \n" +
    "  ||_  \\   \n" +
    "  \\_|  o|  \n" +
    "  /\\___/   \n" +
    " /  ||||__ \n" +
    "    (___)_)"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "ren",
  render: render
};

