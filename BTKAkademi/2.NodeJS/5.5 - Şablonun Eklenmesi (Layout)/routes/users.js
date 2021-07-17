const express = require("express") //express kütüphanesini ekeldik
const userRouters = express.Router() // bu biçimde yönlendirici olarak sayfaların tmamanı farklı alanlara aktarma işlemi yapılmış olmaktadır.


const path = require("path") //Gönderilecek olan HTML sayfaları için 


userRouters.get("/", function(req,res,next){ //Ana dizin ///Burada get ile gelen url kontrolü sağladı. Eğerki adres karşılığı yoksa izin vermemektedir.
    //res.sendFile(path.join(__dirname,"../","views","index.html"))
    res.render("index", {title: "Homepage"}) //sayfanın title kısmına homepage yazısı yazdırıldı.
})


module.exports = userRouters //user router olarak kullanılmaktadır.