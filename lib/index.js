/*
 * lib/index.js
 */

'use strict';

var request = require('request');

function snapshot(stockCodes, cb) {

  var url = 'http://hq.sinajs.cn/list=' + stockCodes;

  request({
    url: url
  }, function (err, res, body) {
    if (err) { return cb(err); }

    switch (res.statusCode) {
    case 200:

      var stockInfoArray = new Array();
      var stockList = body.split('\n');

      for (var i = 0; i < stockList.length - 1; ++i) {
        var stockNodeTemp  = stockList[i].split('=');
        var stockNode = stockNodeTemp[0].split('_').pop() + ',' + stockNodeTemp[1].substring(1, stockNodeTemp[1].length - 2);
        stockInfoArray.push(stockNode);
      }

      cb(null, res.body, url, stockInfoArray);
      
      break;
    default:
      cb(new Error(util.format('Failed to Search. (code=%d)', res.statusCode)));
    }
  });
}

// Public API
exports.snapshot = snapshot;
