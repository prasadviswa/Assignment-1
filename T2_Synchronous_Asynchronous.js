var fs = require("fs");

//Synch
var data = fs.readFileSync('./input.txt');
console.log(data.toString());
console.log("Program Ended");


//Asynch
fs.readFile('./input.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});
console.log("Program Ended");