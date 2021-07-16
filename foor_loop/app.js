
var i;

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question("Input type: ",function(sayi){

    for(i = 0; i <= sayi; i++){    
        console.log(i)
    }
})


