const url = require("url")

/*
NodeJS ile dosya içinde adres uzantıları hakkında çalışma yapılmakta ve kullanılmaktadır.
Bunun için const url ile dosya yüklenip çalıştırılması yeterlidir.
*/

const address = "https://www.btkakademi.gov.tr/portal/course/player/deliver/node-js-ile-web-programlama-14301"

let result = url.parse(address, true); //true denenmesinde ki neden yıl ay, form olarak url sonuna eklemektedir.

console.log(result)