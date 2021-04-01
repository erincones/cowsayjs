"use strict";


/** @type {import(".").CowStrictRenderer} */
function render(a) {
  return (
    "          " + a + "\n" +
    "           " + a + "\n" +
    "            " + a + "          __---__\n" +
    "                    _-       /--______\n" +
    "               __--( /     \\ )XXXXXXXXXXX\\v.\n" +
    "             .-XXX(   O   O  )XXXXXXXXXXXXXXX-\n" +
    "            /XXX(       U     )        XXXXXXX\\\n" +
    "          /XXXXX(              )--_  XXXXXXXXXXX\\\n" +
    "         /XXXXX/ (      O     )   XXXXXX   \\XXXXX\\\n" +
    "         XXXXX/   /            XXXXXX   \\__ \\XXXXX\n" +
    "         XXXXXX__/          XXXXXX         \\__---->\n" +
    " ---___  XXX__/          XXXXXX      \\__         /\n" +
    "   \\-  --__/   ___/\\  XXXXXX            /  ___--/=\n" +
    "    \\-\\    ___/    XXXXXX              '--- XXXXXX\n" +
    "       \\-\\/XXX\\ XXXXXX                      /XXXXX\n" +
    "         \\XXXXXXXXX   \\                    /XXXXX/\n" +
    "          \\XXXXXX      >                 _/XXXXX/\n" +
    "            \\XXXXX--__/              __-- XXXX/\n" +
    "             -XXXXXXXX---------------  XXXXXX-\n" +
    "                \\XXXXXXXXXXXXXXXXXXXXXXXXXX/\n" +
    "                  \"\"VXXXXXXXXXXXXXXXXXXV\"\""
  );
}


/** @type {import(".").Cow} */
module.exports = {
  name: "ghostbusters",
  render: render
};
