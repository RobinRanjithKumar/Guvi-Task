// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

var input = userInput[0]
var L = input.length;
var output = "";

for (var x = 0; x < L; x++){
    if (x === L-1) {
        output = output + input[x]
    }else{
        output = output + input[x] + " "
    }
    }
    console.log(output);
 
  //end-here
});