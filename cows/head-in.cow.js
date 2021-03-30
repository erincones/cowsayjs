"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action, eyes, tongue) {
  var a = fix.fixAction(action);
  var e = fix.fixFace(eyes, "oo");
  var t = fix.fixFace(tongue, "  ");

  return (
    "    " + a + "\n" +
    "     " + a + "\n" +
    "    ^__^         /\n" +
    "    (" + e + ")\\_______/  _________\n" +
    "    (__)\\       )=(  ____|_ \\_____\n" +
    "   " + t + "   ||----w |  \\ \\     \\_____ |\n" +
    "        ||     ||   ||           ||"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "ghostbusters",
  render: render
};
