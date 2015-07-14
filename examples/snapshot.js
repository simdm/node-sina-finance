/*
 * examples/snapshot.js
 */

'use strict';

var sinaFinance = require('..');
require('colors');

var stockCodes = 'sh601006,sh601007';

sinaFinance.snapshot(stockCodes, function (err, data, url, stockInfoArray) {
  if (err) { 
  	throw err; 
  }

  for (var i = 0; i < stockInfoArray.length; ++i) {
  	var stockNode = stockInfoArray[i].split(',');
  	console.log('股票代码: '.red + stockNode[0]);
  	console.log('股票名称: '.red + stockNode[1]);
  	console.log('今日开盘价: '.red + stockNode[2]);
  	console.log('昨日收盘价: '.red + stockNode[3]);
  	console.log('当前价格: '.red + stockNode[4]);
  	console.log('今日最高价: '.red + stockNode[5]);
  	console.log('今日最低价: '.red + stockNode[6]);
  	console.log('竞买价，即“买一”报价: '.red + stockNode[7]);
  	console.log('竞卖价，即“卖一”报价: '.red + stockNode[8]);
  	console.log('成交的股票数(由于股票交易以一百股为基本单位，所以在使用时，通常把该值除以一百): '.red + stockNode[9]);
  	console.log('成交金额(单位为“元”，为了一目了然，通常以“万元”为成交金额的单位，所以通常把该值除以一万): '.red + stockNode[10]);
  	console.log('买一股数(除以100换算成手数): '.red + stockNode[11]);
  	console.log('买一报价: '.red + stockNode[12]);
  	console.log('买二股数(除以100换算成手数):: '.red + stockNode[13]);
  	console.log('买二报价: '.red + stockNode[14]);
  	console.log('买三股数(除以100换算成手数):: '.red + stockNode[15]);
  	console.log('买三报价: '.red + stockNode[16]);
  	console.log('买四股数(除以100换算成手数):: '.red + stockNode[17]);
  	console.log('买四报价: '.red + stockNode[18]);
  	console.log('买五股数(除以100换算成手数):: '.red + stockNode[19]);
  	console.log('买五报价: '.red + stockNode[20]);
  	console.log('卖一股数(除以100换算成手数): '.red + stockNode[21]);
  	console.log('卖一报价: '.red + stockNode[22]);
  	console.log('卖二股数(除以100换算成手数): '.red + stockNode[23]);
  	console.log('卖二报价: '.red + stockNode[24]);
  	console.log('卖三股数(除以100换算成手数): '.red + stockNode[25]);
  	console.log('卖三报价: '.red + stockNode[26]);
  	console.log('卖四股数(除以100换算成手数): '.red + stockNode[27]);
  	console.log('卖四报价: '.red + stockNode[28]);
  	console.log('卖五股数(除以100换算成手数): '.red + stockNode[29]);
  	console.log('卖五报价: '.red + stockNode[30]);
  	console.log('日期: '.red + stockNode[31]);
  	console.log('时间: '.red + stockNode[32]);
  	
    console.log('-------------------------------');
  }
  
});
