/*
 * lib/index.js
 */

'use strict';

var iconv = require('iconv-lite');
var BufferHelper = require('bufferhelper');
var http = require('http');

function snapshot(stockCodes, cb) {

  var url = require('url').parse('http://hq.sinajs.cn/list=' + stockCodes);

  http.get(url, function(res) {
    var bufferHelper = new BufferHelper();
    res.on('data', function (chunk) {
      bufferHelper.concat(chunk);
    });
    res.on('end',function() { 
      var buf = iconv.decode(bufferHelper.toBuffer(),'GBK');

      var stockInfoArray = new Array();
        var stockList = buf.split('\n');

        for (var i = 0; i < stockList.length - 1; ++i) {
          var stockNodeTemp  = stockList[i].split('=');
          var stockNode = stockNodeTemp[0].split('_').pop() + ',' + stockNodeTemp[1].substring(1, stockNodeTemp[1].length - 2);
          stockInfoArray.push(stockNode);
        }

        cb(null, res.buf, url, stockInfoArray);

    });
  })
}


// Public API
exports.snapshot = snapshot;
