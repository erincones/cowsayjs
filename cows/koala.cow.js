"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action) {
  var a = fix.fixAction(action);

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
