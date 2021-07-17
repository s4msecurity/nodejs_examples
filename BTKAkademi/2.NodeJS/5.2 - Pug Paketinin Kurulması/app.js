//unutma ALT + 96
//npm install body-parser projeye dahil edilmelidir.
const express = require("express") //express kütüphanesini ekeldik
const app  = express() //express kütüphanesinden bir nesne üreterek kütüphanenin özelliklerine erişim hakkı hkazandık
const bodyParser = require("body-parser") //body parser eklendi.
const path = require("path")

const adminRouter = require("./routes/admin")
const userRouter = require("./routes/users")

app.use(bodyParser.urlencoded({extended : false})) //Body Parserda middleware ile eklenilmesi sağlandı. Böylelikle bodyparser ile alınan değerleri takip etmemiz sağlandı.
app.use(express.static(path.join(__dirname,"img"))) //Dosyaları dışarıya vermek, örneğin css, img gibi dosyaları dışarıya verip okunabilir yapmak için "img" klasörü gösterildi. js, css vb. diğer dosyalarda bu şekidle olmaktadır.
app.use("/admin",adminRouter) //burada linkler içinde admin/add olarak otomatik olarak getirmektedir.
app.use(userRouter) //rout işlemlerini export ile dışarı vererek bu ana serverda kullanılması sağlanmıştır.//app.use(express.static(path.join(__dirname,"img")))


app.set("title", "my site") //get ile gelen değerleri almaya yaramaktadır. Pug kurulumu sonrasında get ile gönderilen değerleri global olarak alıp consoleda da yazdırılabilmektedir.
console.log(app.get("title"))


app.set("view engine", "pug") //pug kısmı dosyalarını ekleyeceğimizi gösterdik.
app.set("views","./views") //Default olarak views kısmını görmektedir. Ancak duruma göre template html için farklı bir sayfa verilebilir.
/*
views ile template kısımlarını kullanmaktadır
*/




//Hata mesajı kısmı
app.use(function(req,res){ //Gelen değerlerde artık middelware takılmadan gelen reqlerin karşılı yoksa, aşağıda ki çıktıyı vermektedir.
    res.status(404)
    res.send(`
        <h1> Sayfa tanımlı değil. </h1> 
    `)
})

app.listen(3000, function(){ //express ile localhost adresinde 3000 portunda dinleme yapıldğını iletti.
    console.log("listening on port: 3000")
})