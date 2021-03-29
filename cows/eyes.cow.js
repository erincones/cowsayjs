"use strict";

var fix = require("./fix");


/** @type {import(".").CowRenderer} */
function render(action) {
  var a = fix.fixAction(action);

  return (
    "    " + a + "\n" +
    "     " + a + "\n" +
    "                                   .::!!!!!!!:.\n" +
    "  .!!!!!:.                        .:!!!!!!!!!!!!\n" +
    "  ~~~~!!!!!!.                 .:!!!!!!!!!UWWW$$$\n" +
    "      :$$NWX!!:           .:!!!!!!XUWW$$$$$$$$$P\n" +
    "      $$$$$##WX!:      .<!!!!UW$$$$\"  $$$$$$$$#\n" +
    "      $$$$$  $$$UX   :!!UW$$$$$$$$$   4$$$$$*\n" +
    "      ^$$$B  $$$$\\     $$$$$$$$$$$$   d$$R\"\n" +
    "        \"*$bd$$$$      '*$$$$$$$$$$$o+#\"\n" +
    "             \"\"\"\"          \"\"\"\"\"\"\" \n"
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "eyes",
  render: render
};
