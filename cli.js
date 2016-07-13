#!/usr/bin/env node

'use strict';

const meow = require('meow');
const cloche = require('./');

const cli = meow({
	help: [`
  Usage
    cloche <flag>

  Example
    cloche show
    cloche hide`]
});

if (cli.input.length !== 1 || !/show|hide/.test(cli.input[0])) {
	cli.showHelp(-1);
}

cloche(cli.input[0]);
