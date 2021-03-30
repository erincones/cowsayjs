"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action) {
  var a = fix.fixAction(action);

  return (
    "   " + a + "\n" +
    "    " + a + "\n" +
    "               |    .\n" +
    "           .   |L  /|\n" +
    "       _ . |\\ _| \\--+._/| .\n" +
    "      / ||\\| Y J  )   / |/| ./\n" +
    "     J  |)'( |        ` F`.'/\n" +
    "   -<|  F         __     .-<\n" +
    "     | /       .-'. `.  /-. L___\n" +
    "     J \\      <    \\  | | O\\|.-'\n" +
    "   _J \\  .-    \\/ O | | \\  |F\n" +
    "  '-F  -<_.     \\   .-'  `-' L__\n" +
    " __J  _   _.     >-'  )._.   |-'\n" +
    " `-|.'   /_.           \\_|   F\n" +
    "   /.-   .                _.<\n" +
    "  /'    /.'             .'  `\\\n" +
    "   /L  /'   |/      _.-'-\\\n" +
    "  /'J       ___.---'\\|\n" +
    "    |\\  .--' V  | `. `\n" +
    "    |/`. `-.     `._)\n" +
    "       / .-.\\\n" +
    " VK    \\ (  `\\\n" +
    "        `.\\"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "blowfish",
  render: render
};
