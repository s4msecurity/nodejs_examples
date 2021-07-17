const express = require("express")
const router = express.Router()


router.use("/add", function(req,res,next){ //url adresinde "/add" kısmı eklendiğinde bu adrese girişi yapıldığında sistem sadece bu kısma getirmektedir
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
router.post("/stock", function(req,res, next){ //gelen stoğu yazdıracağımız ekran. Bu kısımda gelen verinin post metoduyla gelmesini filtreleyerek "use" kullanmadan sadece post gelmesi durumunda çalışması sağlndı.
//database kayıt işlemleri için yapılabilir.
console.log(req.body) //body içinde formadan gelen bilgileri alınmayı sağlayabiliriz. Express ile body bilgisi eklendi.
res.redirect("/")
})


module.exports = router;