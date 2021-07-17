/*

npm init ile projeye paket dosyasını ekledikten sonra yapılması gereken
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
kısmına gelip, 
 "scripts": {
	"start" : "node app.js",
	"test": "echo \"Error: no test specified\" && exit 1"
  },

kısmı eklendikten sonra terminalde proje klasörünje gelip, 
npm start yazılması yeterlidir, sistem otomatik olarak node app.js olarak konsolda çalıştırır gibi çalıştıracaktır.

 "scripts": {
	"start" : "node app.js",
	"start-server" : "node app.js",
	"test": "echo \"Error: no test specified\" && exit 1"
  },

ile eklenildiğinde, npm start-server yapıldığında hataya düşecektir. Bunun için npm run start-server olarak çalıştırılmaktadır...

*/

/*

nodemon ile uygulamaları anlık olarak üzerinde çalışma gösterirken düzenleme yapabiliriz.
bunun için: "npm install nodemon --save-dev" yazılması yeterlidir. 
"--save-dev" parametresi sadece uygulama geliştirme kısmında çalışması sağlanmıştır.

 "scripts": {
	"start" : "nodemon app.js",
	"start-server" : "node app.js",
	"test": "echo \"Error: no test specified\" && exit 1"
  },
olarak değiştirilmesi gerekmektedir.

*/