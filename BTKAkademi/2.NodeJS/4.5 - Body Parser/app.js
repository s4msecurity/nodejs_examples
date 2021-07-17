//unutma ALT + 96
//npm install body-parser projeye dahil edilmelidir.
const express = require("express") //express kütüphanesini ekeldik
const app  = express() //express kütüphanesinden bir nesne üreterek kütüphanenin özelliklerine erişim hakkı hkazandık
const bodyParser = require("body-parser") //body parser eklendi.

app.use(bodyParser.urlencoded({extended : false})) //Body Parserda middleware ile eklenilmesi sağlandı. Böylelikle bodyparser ile alınan değerleri takip etmemiz sağlandı.




app.use("/add", function(req,res,next){ //url adresinde "/add" kısmı eklendiğinde bu adrese girişi yapıldığında sistem sadece bu kısma getirmektedir
        res.send(`
            <html>
                <head>
                    <title>
                        Add a New ekleme
                    </title>
                </head>
                <body>
                    <form action="/stock" method="post">
                        <input type="text" value="Mesaj Gir" name="stokName">
                        <input type="submit" value="Gönder" name="stokSend">
                    </form>
                </body>
            </html>
        `) //Burada bir html eklenerek "/add" adresinde bir form oluşumu sağlandı.
})
/*
app.use("/stock", function(req,res, next){ //gelen stoğu yazdıracağımız ekran.
    //database kayıt işlemleri için yapılabilir.
    console.log(req.body) //body içinde formadan gelen bilgileri alınmayı sağlayabiliriz. Express ile body bilgisi eklendi.
    res.redirect("/")
})
*/
app.post("/stock", function(req,res, next){ //gelen stoğu yazdıracağımız ekran. Bu kısımda gelen verinin post metoduyla gelmesini filtreleyerek "use" kullanmadan sadece post gelmesi durumunda çalışması sağlndı.
    //database kayıt işlemleri için yapılabilir.
    console.log(req.body) //body içinde formadan gelen bilgileri alınmayı sağlayabiliriz. Express ile body bilgisi eklendi.
    res.redirect("/")
})



app.use("/", function(req,res,next){ //Ana dizin
    res.send("<h1>Naber Mudur?</h1>")
})


app.listen(3000, function(){ //express ile localhost adresinde 3000 portunda dinleme yapıldğını iletti.
    console.log("listening on port: 3000")
})