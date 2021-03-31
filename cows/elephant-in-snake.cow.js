"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action) {
  var a = fix.fixAction(action);

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
