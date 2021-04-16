# cowsayjs

```Text
 _____
< moo >
 -----
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

A nodejs clone of the classic cowsay and cowthink cli commands.

Coded from scratch in pure ES5 for maximum support, zero dependencies and
well documented with JSDoc and TypeScript declaration files to use in modern
develop environments.

Full coverage tests have been made comparing the outpus with the original cowsay
commands to ensure the maximum fidelity.


## Online example

Create your custom cows without install or code anything with
[Next Moo!](https://nextmoo.vercel.app)


## Install

Just install the [nodejs package](https://www.npmjs.com/package/cowsayjs).

```Shell
npm i cowsayjs
```

Uses the `-g` option to install globally on your system and **make available the
cli commands**. Maybe you need run with `sudo` if you are using an unix system.

As this is a zero dependencies package, you can also clone the repository, but
you have to setup the scripts manually to execute the cli commands.

```Shell
git clone https://github.com/erincones/cowsayjs.git
```


## Usage

You can use it as cli commands or a dependency of your back-end or front-end
projects.


### CLI

If you install the package globaly with the `-g` option of `npm`, three commands
will be available on your system:

 - `cowsayjs`
 - `cowthinkjs`
 - `moojs`

They have exactly the same behavior of the original `cowsay` and `cowthink`
commands, once installed, run `cowsayjs -h` to print the help.

```Text
moojs, cowsayjs, cowthinkjs v1.0.3
Copyright (c) 2021 Erick Rincones
Licensed under the MIT License

  A nodejs clone of the classic cowsay and cowthink cli commands.

Usage: moojs [options] [message]

Options:
  -h           Print this message
  -e EYES      Set the first two chars of EYES as the cow eyes
  -f COW       Specify the cow to use
  -l           Show the list of available cows
  -n           No wrap and show original message
  -r           A reflexive cow will think instead say the message
  -T TONGUE    Set the first tow characters of TONGUE as the cow tongue
  -W COLUMN    Specifies where the message should be wrapped
  -bdgpstwy    Select one mode to use a predefined face

By default EYES are "oo" and COLUMN is 40. The eyes and tongue
cannot be changed for some cows specified by the -f option.

Examples:
  cowsayjs Moo world
  cowthinkjs -f small -b -T "U " -W 10 I am a reflexive little cow
  moojs -f dragon -r Another reflexive cow
  echo -e 'This message\n\nwill\tnot\n\n  be wraped' | moojs -n

Full documentation and source code: https://github.com/erincones/cowsayjs
```

You can get more details from the official documentation of the orirignal cowsay
here [cowsay(1)](https://linux.die.net/man/1/cowsay). Note that `moojs` command
includes the optional argument `-r` to generate a reflexive thinking cow,
instead a talking cow.

The `js` suffix avoid collisions with the classic commands. When you are ready,
just run the commands with the message and some options.

```Text
$ cowsayjs -f small I need a real job
 __________________
< I need a real job >
 ------------------
       \   ,__,
        \  (oo)____
           (__)    )\
              ||--|| *
```


You can also pipe the output of any command as the message for your cow.

```Text
$ echo Everything is gonna be alright | moojs -r
 ________________________________
( Everything is gonna be alright )
 --------------------------------
        o   ^__^
         o  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```


### NodeJS dependency

Depending on your project setup, you can import the main three functions in two
ways.

```JavaScript
// ES5
var cowsayjs = require("cowsayjs");

console.log(cowsayjs.moo("can you see me?"));
```
```JavaScript
// ES6
import { cowsay, cowthink, moo } from "cowsayjs";

console.log(cowsay(`will anyone read this?`));
```

The three functions can recieve one or two parameters.

```TypeScript
function moo(options?: CowAllOptions): string;
function moo(message?: string, options?: CowMooOptions): string;

function cowsay(options?: CowAllOptions): string;
function cowsay(message?: string, options?: CowOptions): string;

function cowthink(options?: CowAllOptions): string;
function cowthink(message?: string, options?: CowOptions): string;
```

The base for the cow options is a `CowOptions`.

```TypeScript
interface CowOptions {
  cow?: string;
  mode?: string;
  eyes?: string;
  tongue?: string;
  wrap?: string | number | boolean | null;
}
```

`CowMooOptions` extends the base options and adds the `action` property that
could be `say` or `think` to decide the cow action. This property only works
for the `moo` function and is ignored by the `cowsay` and `cowthink` functions.

`CowAllOption` extends the `CowMooOptions` and adds the `message` property
to pass the message to the cow. If the functions are called with two parameters,
the first one is considered the message and the second one the options, so any
value for `options.message` is ignored.

To disable the text wrapping, set `false` or `null` the `wrap` property. Default
value is `40`.

The default value for the eyes is `"oo"` and `"  "` for the tongue. Just set any
string to change it or one of the [predefined modes](lib/mode.js#L36) using
the `id` or `name` property to set the `mode` option.

```JavaScript
modes = [
  { id: "u", name: "default" },
  { id: "b", name: "borg",     eyes: "==" },
  { id: "d", name: "dead",     eyes: "xx", tongue: "U " },
  { id: "g", name: "greedy",   eyes: "$$" },
  { id: "p", name: "paranoia", eyes: "@@" },
  { id: "s", name: "stoned",   eyes: "**", tongue: "U " },
  { id: "t", name: "tired",    eyes: "--" },
  { id: "w", name: "wired",    eyes: "OO" },
  { id: "y", name: "youthful", eyes: ".." }
];
```

Unknown values falls back to the `u` mode, wich is the default face.

Check the [cows/](cows/) directory to see all the available cows files. Set the
`cow` property of the options with the name of one cow file without `.cow.js`
to use it.

### Examples

```JavaScript
cowsay("English is not my native language", {
  cow: "three-eyes",
  mode: "w",
  tongue: "U "
});
```
```Text
 ___________________________________
< English is not my native language >
 -----------------------------------
        \  ^___^
         \ (OOO)\_______
           (___)\       )\/\
            U   ||----w |
                ||     ||
```

```TypeScript
moo({
  message: `I have to sleep ${new Date().toISOString()}`,
  mode: `paranoia`,
  action: `think`,
  wrap: false
});
```
```Text
 __________________________
( I have to sleep          )
( 2021-04-08T06:27:51.776Z )
 --------------------------
        o   ^__^
         o  (@@)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

## Utilities

They are some aditional useful functions available. The modern code editors
should show you the docummentation from the JDocs or TypeScript declaration
files.

```JavaScript
// List of cows
import { corral } from "cowsayjs/cows";

import {
  modes,    // List of modes
  faceMode, // Get the mode for the given eyes and tongue
  modeFace  // Get the face for the given mode
} from "cowsayjs/lib/mode";

import {
  perform,  // Generate a say or think box
  say,      // Generate a say box
  think,    // Generate a think box
} from "cowsayjs/lib/box";
```


## Tests

Install the dev dependencies to run the tests locally. The classic `cowsay` and
`cowthink` commands must be installed in your system to be able to run the
tests.


## License

Licensed under [the MIT license](LICENSE).

Share and enjoy!
