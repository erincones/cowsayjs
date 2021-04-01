"use strict";


/** @type {import(".").CowStrictRenderer} */
function render(a) {
  return (
    "    " + a + "\n" +
    "     " + a + "\n" +
    "                                   .::!!!!!!!:.\n" +
    "  .!!!!!:.                        .:!!!!!!!!!!!!\n" +
    "  ~~~~!!!!!!.                 .:!!!!!!!!!UWWW$$$ \n" +
    "      :$$NWX!!:           .:!!!!!!XUWW$$$$$$$$$P \n" +
    "      $$$$$##WX!:      .<!!!!UW$$$$\"  $$$$$$$$# \n" +
    "      $$$$$  $$$UX   :!!UW$$$$$$$$$   4$$$$$* \n" +
    "      ^$$$B  $$$$\\     $$$$$$$$$$$$   d$$R\" \n" +
    "        \"*$bd$$$$      '*$$$$$$$$$$$o+#\" \n" +
    "             \"\"\"\"          \"\"\"\"\"\"\" "
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "eyes",
  render: render
};
