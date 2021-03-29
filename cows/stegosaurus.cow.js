"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action) {
  var a = fix.fixAction(action);

  return (
    a + "                             .       .\n" +
    " " + a + "                           / `.   .' \"\n" +
    "  " + a + "                  .---.  <    > <    >  .---.\n" +
    "   " + a + "                 |    \\  \\ - ~ ~ - /  /    |\n" +
    "         _____          ..-~             ~-..-~\n" +
    "        |     |   \\~~~\\.'                    `./~~~/\n" +
    "       ---------   \\__/                        \\__/\n" +
    "      .'  O    \\     /               /       \\  \"\n" +
    "     (_____,    `._.'               |         }  \\/~~~/\n" +
    "      `----.          /       }     |        /    \\__/\n" +
    "            `-.      |       /      |       /      `. ,~~|\n" +
    "                ~-.__|      /_ - ~ ^|      /- _      `..-'\n" +
    "                     |     /        |     /     ~-.     `-. _  _  _\n" +
    "                     |_____|        |_____|         ~ - . _ _ _ _ _>`\n"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "stegosaurus",
  render: render
};
