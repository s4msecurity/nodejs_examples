var server = require("./server") //input server.js file
const readline = require('readline'); //input readline lib.

const rl = readline.createInterface({ //reading keyboard open
    input: process.stdin,
    output: process.stdout
});


rl.question("Input SQL Query ", (query) => { //keyboard take it input
    server.srvGen(query) // query send for srvGen function on server.js
    rl.close();
});
