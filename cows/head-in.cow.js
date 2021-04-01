"use strict";


/** @type {import(".").CowStrictRenderer} */
function render(a, e, t) {
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
  name: "head-in",
  render: render
};
