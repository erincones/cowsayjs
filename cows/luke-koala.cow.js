"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action) {
  var a = fix.fixAction(action);

  return (
    "  " + a + "\n" +
    "   " + a + "          .\n" +
    "       ___   //\n" +
    "     {~._.~}//\n" +
    "      ( Y )K/\n" +
    "     ()~*~()\n" +
    "     (_)-(_)\n" +
    "     Luke\n" +
    "     Sywalker\n" +
    "     koala   \n"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "luke-koala",
  render: render
};
