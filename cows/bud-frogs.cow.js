"use strict";


/** @type {import(".").CowStrictRenderer} */
function render(a) {
  return (
    "     " + a + "\n" +
    "      " + a + "\n" +
    "          oO)-.                       .-(Oo\n" +
    "         /__  _\\                     /_  __\\\n" +
    "         \\  \\(  |     ()~()         |  )/  /\n" +
    "          \\__|\\ |    (-___-)        | /|__/\n" +
    "          '  '--'    ==`-'==        '--'  '"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "bud-frogs",
  render: render
};
