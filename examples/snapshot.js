/*
 * examples/snapshot.js
 */

'use strict';

var util = require('util');

require('colors');

var _ = require('lodash'),
    sinaFinance = require('..');

var stockCodes = 'sh601006,sh601007';

sinaFinance.snapshot(stockCodes, function (err, data, url, stockInfoArray) {
  if (err) { 
  	throw err; 
  }

  for (var i = 0; i < stockInfoArray.length; ++i) {
  	var stockNode = stockInfoArray[i].split(',');
  	console.log('股票代码: '.blue + stockNode[0]);
  	// console.log('股票名称: ' + stockNode[1]);
  	console.log('今日开盘价: '.blue + stockNode[2]);
  	console.log('昨日收盘价: '.blue + stockNode[3]);
  	console.log('当前价格: '.blue + stockNode[4]);
  	console.log('今日最高价: '.blue + stockNode[5]);
  	console.log('今日最低价: '.blue + stockNode[6]);
  	console.log('竞买价，即“买一”报价: '.blue + stockNode[7]);
  	console.log('竞卖价，即“卖一”报价: '.blue + stockNode[8]);
  	console.log('成交的股票数(由于股票交易以一百股为基本单位，所以在使用时，通常把该值除以一百): '.blue + stockNode[9]);
  	console.log('成交金额(单位为“元”，为了一目了然，通常以“万元”为成交金额的单位，所以通常把该值除以一万): '.blue + stockNode[10]);
  	console.log('买一股数(除以100换算成手数): '.blue + stockNode[11]);
  	console.log('买一报价: '.blue + stockNode[12]);
  	console.log('买二股数(除以100换算成手数):: '.blue + stockNode[13]);
  	console.log('买二报价: '.blue + stockNode[14]);
  	console.log('买三股数(除以100换算成手数):: '.blue + stockNode[15]);
  	console.log('买三报价: '.blue + stockNode[16]);
  	console.log('买四股数(除以100换算成手数):: '.blue + stockNode[17]);
  	console.log('买四报价: '.blue + stockNode[18]);
  	console.log('买五股数(除以100换算成手数):: '.blue + stockNode[19]);
  	console.log('买五报价: '.blue + stockNode[20]);
  	console.log('卖一股数(除以100换算成手数): '.blue + stockNode[21]);
  	console.log('卖一报价: '.blue + stockNode[22]);
  	console.log('卖二股数(除以100换算成手数): '.blue + stockNode[23]);
  	console.log('卖二报价: '.blue + stockNode[24]);
  	console.log('卖三股数(除以100换算成手数): '.blue + stockNode[25]);
  	console.log('卖三报价: '.blue + stockNode[26]);
  	console.log('卖四股数(除以100换算成手数): '.blue + stockNode[27]);
  	console.log('卖四报价: '.blue + stockNode[28]);
  	console.log('卖五股数(除以100换算成手数): '.blue + stockNode[29]);
  	console.log('卖五报价: '.blue + stockNode[30]);
  	console.log('日期: '.blue + stockNode[31]);
  	console.log('时间: '.blue + stockNode[32]);
  	
    console.log('-------------------------------');
  }
  
});
