const express = require("express") //express kütüphanesini ekeldik
const app  = express() //express kütüphanesinden bir nesne üreterek kütüphanenin özelliklerine erişim hakkı hkazandık


app.use(function(req,res,next){
    console.log("middleware 1 çalıştırıldı")
    next() //Bu ilk 1. middle ware kısmı çalıştırıldıktan sonra bir sonraki middleware2 gönderiliyor. next() fonksiyonu ile sıralamayı sağlamaktadır.
}) //middleware gelen her isteği bir sürece göre parçalama için kullanılmaktadır.


app.use(function(req,res,next){
    console.log("middleware 2 çalıştırıldı")
    res.send("<h1>Hello From Express</h1>") //response body için send metodu ile dosya da gönderilebilir. VeVya dosya yollanabilir.
    res.end()
}) //middleware gelen her isteği bir sürece göre parçalama için kullanılmaktadır.

app.listen(3000, function(){ //express ile localhost adresinde 3000 portunda dinleme yapıldğını iletti.
    console.log("listening on port: 3000")
})