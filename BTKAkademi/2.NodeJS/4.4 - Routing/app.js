const express = require("express") //express kütüphanesini ekeldik
const app  = express() //express kütüphanesinden bir nesne üreterek kütüphanenin özelliklerine erişim hakkı hkazandık



app.use("/",function(req,res,next){ //Burada 4 tane parametre almaktadır. "/" eklenip sayfa içine girilen ne olursa olsun hepsini çalıştırmaktadır.
    //Bu şekilde yukarıda ki gibi çalştırıldığında adres kısmına ne girilirse girilsin sayfa middleware 2 aktarılmaktadır.
    console.log("middleware 1 çalıştırıldı")
    next()    
}) //middleware gelen her isteği bir sürece göre parçalama için kullanılmaktadır.

app.use("/add", function(req,res,next){ //url adresinde "/add" kısmı eklendiğinde bu adrese girişi yapıldığında sistem sadece bu kısma getirmektedir
    console.log("Sayfa eklenti kısmına geldi.")
    res.send("Sayfa eklenti kısmına geldi.")
    
})

app.use(function(req,res,next){
    console.log("middleware 2 çalıştırıldı")
    res.send("<h1>Hello From Express</h1>") //response body için send metodu ile dosya da gönderilebilir. VeVya dosya yollanabilir.
    res.end()
}) //middleware gelen her isteği bir sürece göre parçalama için kullanılmaktadır.

app.listen(3000, function(){ //express ile localhost adresinde 3000 portunda dinleme yapıldğını iletti.
    console.log("listening on port: 3000")
})