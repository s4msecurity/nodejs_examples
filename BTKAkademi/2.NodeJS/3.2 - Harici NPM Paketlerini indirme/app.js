/*

npm install underscore 
underscore paketi bu projeye indiriliyor.
"node modules" klasörüne underscore modülü kurulmuş oldu



package.json dosyası içinde 
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "underscore": "^1.13.1"
  }
}
kısmı oluşmaktadır. Bu kısım neden önemli diye soracak olursanız, npm install underscore paketine ait dosyaların silindiğini varsayalımç.
proje klasöründen node_modules underscore klasörü silindi.
bu proje klasörüne gelip terminale npm install yazıp komut satırında enter yapıldığında sistem otomatik olarak dependencies içinde ki kütüphane veya paketleri görür ve indirmeye başlar.


*/




var _ = require("underscore") //underscore kütüphanesini aktif ettik.
var number = [10,2,5,1,120] //Sayı kümemiz.
console.log(_.min(number)) //underscore "_" ile içinde ki fonksiyonlardan min kullanılarak en küçük sayı keşfedilmiş ve ekrana yazılmış bulunmakta.