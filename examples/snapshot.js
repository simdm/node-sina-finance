/*
 * examples/snapshot.js
 */

'use strict';

var util = require('util');

require('colors');

var _ = require('lodash'),
    sinaFinance = require('..');

var stockCodes = 'sh601006,sh601007';

sinaFinance.snapshot(
  stockCodes
, function (err, data, url, fields) {
  if (err) { throw err; }

  console.log(url.green);
  console.log(data.red);
  
});
