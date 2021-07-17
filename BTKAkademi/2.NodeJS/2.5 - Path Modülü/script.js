const path = require("path")

/*
Path modülü ile dosya uzantısını almak veya dosyanın türü gibi konularda bilgi toplamak için kullanılmaktadır.
*/
let result = path.parse(__filename);

console.log("Root ismi: "+result.root); //Root klasörü yoluna gitme
console.log("Klasör ismi: "+result.dir) // klasör adı
console.log("Dosya ismi: "+result.base) //dosya ismi
console.log(":Uzanti ismi "+result.ext) //uzantı ismi
console.log("Dosya uzantı adı olmadan: "+result.name) // dosya uzantısı olmadan adı