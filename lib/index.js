/*
 * lib/index.js
 */

'use strict';

var assert = require('assert'),
    querystring = require('querystring'),
    util = require('util');

var _ = require('lodash'),
    S = require('string'),
    async = require('async'),
    moment = require('moment'),
    request = require('request');

function snapshot(stockCodes, cb) {

  var url = 'http://hq.sinajs.cn/list=' + stockCodes;

  request({
    url: url
  }, function (err, res, body) {
    if (err) { return cb(err); }

    switch (res.statusCode) {
    case 200:
      
        // console.log(res.body);
        cb(null, res.body, url, null);
      
      break;
    default:
      cb(new Error(util.format('Failed to Search. (code=%d)', res.statusCode)));
    }
  });
}

// Public API
exports.snapshot = snapshot;
