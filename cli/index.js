#!/usr/bin/env node
"use strict";

var cowsayjs = require("../lib/index");


// Print default cow
console.log(cowsayjs.cowsay(process.argv[2]));
