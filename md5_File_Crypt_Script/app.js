const md5 = require('md5')
const fs = require("fs")
const path = require("path")
const readline = require("readline")

/* interface open */
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/* encrypt info */
function encInfo(flPath, flName) {
    
    fs.rename(flPath + "\\" + flName,flPath+"\\" + md5(flName), function (err) {

        if (err) {
            console.log("encInfo Error: " + err)
        }else{
            console.log("Completed :)")
        }

    })

}

function cryptOnFile(flPath, flName, info){
    fs.writeFile(flPath+"\\"+flName,info, function(err){
        if(err){
            console.log("cryptOnFile Error: "+err)
        }
        else{
            encInfo(flPath, flName)
        }
    })
}


function fileRead(flPath, flName){
    
    fs.readFile(flPath+"\\"+flName, "utf-8", function(err, data){
        if(err){
            console.log("fileRead: "+err)
        }
        else{
            var dataArray = data.split("\n")
            let cryptVal = ""
            dataArray.forEach(function(value){
                cryptVal =  md5(value)
                cryptVal = cryptVal + md5(cryptVal)
                console.log(cryptVal)
            })                    
            cryptOnFile(flPath,flName,cryptVal)
        }
    })
}


/* show on Folder  */
function showFolder(flPath) {

    fs.readdir(flPath, function (err, files) {
        if (err) {
            return console.log('showFolder Error: ' + err)
        }
        files.forEach(function (file) {
            //encInfo(flPath, file)
            fileRead(flPath, files)
        })

    })
}

/* program start */
rl.question("Where is encrypt folder?\n[Default:" + path.join(__dirname, 'test') + "]: ", function Input(folderWay) {

    var flPath

    if (folderWay.length >= 3) {
        flPath = folderWay
        showFolder(flPath)
    }
    else {
        flPath = path.join(__dirname, 'test')
        showFolder(flPath)
    }
    rl.close();
});
