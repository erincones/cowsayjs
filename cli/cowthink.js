#!/usr/bin/env node
"use strict";

var cli = require(".");


// Parse and execute arguments
cli.execArgs(cli.parseArgs("think"));
