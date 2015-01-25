#!/usr/bin/env node

'use strict';

var meow = require('meow');
var cloche = require('./');

var cli = meow({
  help: [
    'Usage',
    '  cloche <flag>',
    '',
    'Example',
    '  cloche show',
    '  cloche hide'
  ].join('\n')
});

if (cli.input.length !== 1 || !/show|hide/.test(cli.input[0])) {
	cli.showHelp();
	exit(-1);
}

cloche(cli.input[0]);
