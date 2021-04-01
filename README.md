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

Coded in pure ES5 for maximum support, but well documented with JSDoc and
TypeScript declaration files to use in modern develop environments.

Full coverage tests have been made comparing the outpus with the original
commands to ensure the maximum fidelity.


## Install

A [nodejs package](https://www.npmjs.com/package/cowsayjs) is available.

```Shell
npm i cowsayjs
```

Uses the `-g` option to install globally on your system and make available the
cli commands. Maybe you need run with `sudo` for that if you are using an unix
system.

As this is a zero dependencies package, you can also clone the repository, but
you have to setup the script manually to execute the cli commands.

```Shell
git clone https://github.com/erincones/cowsayjs.git
```


## Usage

You can use as cli commands or a dependency of your back-end or front-end
projects.

### CLI

If you install the package globaly with the `-g` option of `npm`, three commands
will be available on your system:

 - `cowsayjs`
 - `cowthinkjs`
 - `moojs`

They have exactly the same behavior of the original `cowsay` and `cowthink`
commands, if they are installed in your system, run `cowsay -h` to get details
or read the docs here [cowsay(1)](https://linux.die.net/man/1/cowsay). The
`moojs` command includes the optional argument `-r` to generate a reflexive
thinking cow, instead a talking cow.

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

Depending on your project setup, after install the package, you can import the
main three functions in two ways.

```JavaScript
// ES5
var cowsayjs = require("cowsayjs");

console.log(cowsayjs.moo("can you see me?"));
```
```JavaScript
// ES6
const { cowsay, cowthink, moo } from "cowsayjs";

console.log(cowsay(`will anyone read this?`));
```

The three functions can recieve two parameters, the message and the options. The
declaration of the options object interface can be found in
[lib/index.d.ts](lib/index.d.ts).

```JavaScript
interface CowFullOptions {
  /** Cow name */
  cow?: string;
  /** Cow face mode */
  mode?: string;
  /** Custom cow eyes */
  eyes?: string;
  /** Custom cow tongue */
  tongue?: string;
  /** Where the message should be wrapped */
  wrap?: string | number | boolean | null;
/** Cow action */
  action?: `say` | `think`;
}
```

The `action` property only works for `moo` and is ignored by `cowsay` and
`cowthink`.

To avoid wrapping the message, set `false` or `null` the `wrap` property, the
default value is `40`.

The default value for the eyes is `"oo"` and `"  "` for the tongue. Just set any
string to change it.

The cows and modes are the same of the original commands, just read the
[docs](https://linux.die.net/man/1/cowsay) to get more information. However, the
list of cows and modes is always available from the code.

```JavaScript
// List of cows
import { corral } from "cowsayjs/cows";

// List of modes
import { modes } from "cowsayjs/mode";
```

Also, you can check the [cows/](cows/) directory to see all the cows files
available. Use the basename of the files to set the cow property and print that
cow.

```JavaScript
cowsay("english is not my native language", {
  cow: "three-eyes",
  mode: "w" // You can use the full name "wired"
  tongue: "U "
});
```

## Tests

Install the dev dependencies to run the tests locally. The classic `cowsay` and
`cowthink` commands must be installed in your system to be able to run the
tests.


## License

Licensed under [the MIT license](LICENSE).

Share and enjoy!
