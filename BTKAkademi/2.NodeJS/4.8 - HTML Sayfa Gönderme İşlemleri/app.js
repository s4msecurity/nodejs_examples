//unutma ALT + 96
//npm install body-parser projeye dahil edilmelidir.
const express = require("express") //express kütüphanesini ekeldik
const app  = express() //express kütüphanesinden bir nesne üreterek kütüphanenin özelliklerine erişim hakkı hkazandık
const bodyParser = require("body-parser") //body parser eklendi.

const adminRouter = require("./routes/admin")
const userRouter = require("./routes/users")

app.use(bodyParser.urlencoded({extended : false})) //Body Parserda middleware ile eklenilmesi sağlandı. Böylelikle bodyparser ile alınan değerleri takip etmemiz sağlandı.

app.use("/admin",adminRouter) //burada linkler içinde admin/add olarak otomatik olarak getirmektedir.
app.use(userRouter) //rout işlemlerini export ile dışarı vererek bu ana serverda kullanılması sağlanmıştır.


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