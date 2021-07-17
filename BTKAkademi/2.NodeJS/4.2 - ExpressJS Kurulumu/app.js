const express = require("express") //express kütüphanesini ekeldik
const app  = express() //express kütüphanesinden bir nesne üreterek kütüphanenin özelliklerine erişim hakkı hkazandık


app.get("/", function(req, res){ //bu GET metodu ile kullanıcıya ait  istekleri düzenleyerek, localhost adresine gelindiğinde ne yapılacağı hakknda bilgi verildi.
    res.send("hello world")
})

app.get("/api/product", function(req, res){
    res.send("API adresine gelindi.")
})

app.listen(3000, function(){ //express ile localhost adresinde 3000 portunda dinleme yapıldğını iletti.
    console.log("listening on port: 3000")
})