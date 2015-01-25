#!/usr/bin/env node
'use strict';
var meow = require('meow');
var cloche = require('./');

var cli = meow({
  help: [
    'Usage',
    '  cloche <input>',
    '',
    'Example',
    '  cloche Unicorn'
  ].join('\n')
});

cloche(cli.input[0]);
