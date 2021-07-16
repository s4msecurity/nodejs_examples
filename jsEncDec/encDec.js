
var enDeFun = function funEncDec(deger) {
    var dt = new Date();
    var enc = deger.split("");
    var dec = [];
    var decStr, key;
    
    
    for (i = 0; i < enc.length; i++) {
        dec[i] = enc[i].charCodeAt(0);
    }
    for (i = 0; i < enc.length; i++) {
        if((dt.getSeconds() % 10) != 0){
            key = (dt.getSeconds() % 10)
            decStr += "," + (key * dec[i]).toString();
        }
        else{
            key = 10
            decStr += "," + (key * dec[i]).toString();
        }
    }
        decStr = decStr.replace("undefined", (dt.getSeconds() % 10).toString());

    return decStr;
}

module.exports.enDeFun = enDeFun;