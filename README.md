#node-sina-finance
=================

Sina Finance historical quotes and snapshot data downloader written in Node.js

## Installation

    $ npm install sina-finance


## Usage

```js
var sinaFinance = require('sina-finance');

sinaFinance.snapshot('sh600152', function (err, data, url, symbol) {
  //...
});
```

* [See more comprehensive examples here.](https://github.com/simdm/node-sina-finance/tree/master/examples)

## API


### Download Snapshot Data

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
