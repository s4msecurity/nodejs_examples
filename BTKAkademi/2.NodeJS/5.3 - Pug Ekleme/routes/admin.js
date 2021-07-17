const express = require("express")
const router = express.Router()

const path = require("path") //path metodu ile dosya işlemlerini koylaylaştırmaya yaradığı için sayfa işlemlerinde kullanılmaktadır.

router.use("/add", function(req,res,next){ //url adresinde "/add" kısmı eklendiğinde bu adrese girişi yapıldığında sistem sadece bu kısma getirmektedir
    //res.sendFile(path.join(__dirname,"../","views","add.html")) //Burada bir html eklenerek "/add" adresinde bir form oluşumu sağlandı.
    res.render("add") //bu sistemde otomatik olarak add.pug dosyası varsa bulur ve gönderir.
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