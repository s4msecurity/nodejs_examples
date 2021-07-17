/*
//Browser tabalı kısım
Browser tarayıcında scriptA ve scriptB içinde ki değerleri ayrı ayrı istemci (client) gönderilmesi için function ile tanımlanması gerekmektedir.
Ve return için değeri döndürmek istenn kısımları süslü parantez arasına yazılması yeterlidir.

var controllerA = (function(){
    var lastName = "Sezgin";
    console.log(this.lastName);

    return{
        lastName
    }

})();
*/


/*
scriptA.js dosyasında bulunan değerlere erişme sağlamaktadır. 
*/
const scriptA = require('./scriptA.js'); //scriptA.js içinde bulunan değerleri okumaya yaramaktadır.
scriptA.log('Çınar');
console.log(scriptA.name); //Bu değerler script A içinden gelen değerleri okumaya yaramaktadır.