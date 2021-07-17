const express = require("express") //express kütüphanesini ekeldik
const userRouters = express.Router() // bu biçimde yönlendirici olarak sayfaların tmamanı farklı alanlara aktarma işlemi yapılmış olmaktadır.

userRouters.use("/", function(req,res,next){ //Ana dizin
    res.send("<h1>Ana Sayfa</h1>")
})


module.exports = userRouters //user router olarak kullanılmaktadır.