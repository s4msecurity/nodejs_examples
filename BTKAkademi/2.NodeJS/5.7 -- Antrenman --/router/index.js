const express = require("express")
const indexPage = express.Router() //yönlendirme ile çalışması sağlandı.

const admin = require("./addStock")

indexPage.get("/",function(req,res, next){
    res.render("index", {dinamikIcreik: admin.dinamik}) //render ile index pug dosyasına dinmaikicerik isimli admin yani addstock js dosyasındaki gelen veri alındı.
})

module.exports = indexPage; //dışarı verildi bu indexPage uzantısı