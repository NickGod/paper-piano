var fs = require('fs');
var file = GrowingFile.open('test.txt', options);
var wstream = fs.createWriteStream('testoutput.txt');
file.pipe(wstream);