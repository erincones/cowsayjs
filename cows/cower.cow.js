"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action) {
  var a = fix.fixAction(action);

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
