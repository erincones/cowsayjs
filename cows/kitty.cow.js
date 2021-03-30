"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action) {
  var a = fix.fixAction(action);

  return (
    "     " + a + "\n" +
    "      " + a + "\n" +
    "       (\"`-'  '-/\") .___..--' ' \"`-._\n" +
    "         ` *_ *  )    `-.   (      ) .`-.__. `)\n" +
    "         (_Y_.) ' ._   )   `._` ;  `` -. .-'\n" +
    "      _.. `--'_..-_/   /--' _ .' ,4\n" +
    "   ( i l ),-''  ( l i),'  ( ( ! .-'    "
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "kitty",
  render: render
};
