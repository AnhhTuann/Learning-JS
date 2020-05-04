//Node built-in modules
var fs = require('fs');

var text = fs.readFileSync('./song.txt', {encoding:'utf8'});

console.log(text);

fs.writeFileSync('.song_2.txt','I\'m Tuan');