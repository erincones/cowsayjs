"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action) {
  var a = fix.fixAction(action);

  return (
    "   " + a +  "\n" +
    "    " + a + "        .\n" +
    "     .---.  //\n" +
    "    Y|o o|Y// \n" +
    "   /_(i=i)K/ \n" +
    "   ~()~*~()~  \n" +
    "    (_)-(_)   \n\n" +
    "     Darth \n" +
    "     Vader    \n" +
    "     koala        "
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "vader-koala",
  render: render
};
