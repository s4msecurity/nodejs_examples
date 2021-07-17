/*
//Browser tabalı kısım
Browser tarayıcında scriptA ve scriptB içinde ki değerleri ayrı ayrı istemci (client) gönderilmesi için function ile tanımlanması gerekmektedir.
Ve return için değeri döndürmek istenn kısımları süslü parantez arasına yazılması yeterlidir.

var controllerB = (function(){
    var firstName = "Samet";
    console.log(this.firstName);
    return{
        firstName
    }
})
*/

/*
//NodeJS 
*/



var age = 30; //private gizli olan değişken

var firstName = "Samet"; //global olarak erişilebilen değişkenleri gösterme kısmı
var log = function(name){
    console.log(name);
}


module.exports.name = firstName; //exports kısmına aktarılanlar ile diğer script dosyalarına erişilebilir yapmaktadır. Örn: scriptB.js içinde firstName kısmında kullanılmaktadı.
module.exports.log = log; //module.export._verilecekIsim_ = _gelmesiGerekenDeger_ olarak tanımlanabilir.