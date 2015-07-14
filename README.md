#node-sina-finance

Sina Finance snapshot data downloader written in Node.js

## Installation

    $ npm install sina-finance


## Usage

```js
var sinaFinance = require('sina-finance');

sinaFinance.snapshot('sh600152', function (err, data, url, stockInfoArray) {
  //...
});
```

* [See more comprehensive examples here.](https://github.com/simdm/node-sina-finance/tree/master/examples)

## API

### Download Snapshot Data

```js
var stockCodes = 'sh601006,sh601007';

sinaFinance.snapshot(stockCodes, function (err, data, url, stockInfoArray) {
  for (var i = 0; i < stockInfoArray.length; ++i) {
  	var stockNode = stockInfoArray[i].split(',');
  	console.log('股票代码: ' + stockNode[0]);
    console.log('股票名称: ' + stockNode[1]);
  	console.log('今日开盘价: ' + stockNode[2]);
  	console.log('昨日收盘价: ' + stockNode[3]);
  	console.log('当前价格: ' + stockNode[4]);
  	console.log('今日最高价: ' + stockNode[5]);
  	console.log('今日最低价: ' + stockNode[6]);
  	console.log('竞买价，即“买一”报价: ' + stockNode[7]);
  	console.log('竞卖价，即“卖一”报价: ' + stockNode[8]);
  	console.log('成交的股票数(由于股票交易以一百股为基本单位，所以在使用时，通常把该值除以一百): ' + stockNode[9]);
  	console.log('成交金额(单位为“元”，为了一目了然，通常以“万元”为成交金额的单位，所以通常把该值除以一万): ' + stockNode[10]);
  	console.log('买一股数(除以100换算成手数): ' + stockNode[11]);
  	console.log('买一报价: ' + stockNode[12]);
  	console.log('买二股数(除以100换算成手数):: ' + stockNode[13]);
  	console.log('买二报价: ' + stockNode[14]);
  	console.log('买三股数(除以100换算成手数):: ' + stockNode[15]);
  	console.log('买三报价: ' + stockNode[16]);
  	console.log('买四股数(除以100换算成手数):: ' + stockNode[17]);
  	console.log('买四报价: ' + stockNode[18]);
  	console.log('买五股数(除以100换算成手数):: ' + stockNode[19]);
  	console.log('买五报价: ' + stockNode[20]);
  	console.log('卖一股数(除以100换算成手数): ' + stockNode[21]);
  	console.log('卖一报价: ' + stockNode[22]);
  	console.log('卖二股数(除以100换算成手数): ' + stockNode[23]);
  	console.log('卖二报价: ' + stockNode[24]);
  	console.log('卖三股数(除以100换算成手数): ' + stockNode[25]);
  	console.log('卖三报价: ' + stockNode[26]);
  	console.log('卖四股数(除以100换算成手数): ' + stockNode[27]);
  	console.log('卖四报价: ' + stockNode[28]);
  	console.log('卖五股数(除以100换算成手数): ' + stockNode[29]);
  	console.log('卖五报价: ' + stockNode[30]);
  	console.log('日期: ' + stockNode[31]);
  	console.log('时间: ' + stockNode[32]);
    console.log('-------------------------------');
  }
});
```

## Credits

  See the [contributors](https://github.com/simdm/node-sina-finance/graphs/contributors).


## License

<pre>
The MIT License (MIT)

Copyright (c) 2013-2014 De Meng

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
</pre>
