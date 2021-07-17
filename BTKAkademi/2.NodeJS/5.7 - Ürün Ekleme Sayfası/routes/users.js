const express = require("express") //express kütüphanesini ekeldik
const userRouters = express.Router() // bu biçimde yönlendirici olarak sayfaların tmamanı farklı alanlara aktarma işlemi yapılmış olmaktadır.


const path = require("path") //Gönderilecek olan HTML sayfaları için 


userRouters.get("/", function(req,res,next){ //Ana dizin ///Burada get ile gelen url kontrolü sağladı. Eğerki adres karşılığı yoksa izin vermemektedir.
    //res.sendFile(path.join(__dirname,"../","views","index.html"))

    const resimler = [

        /*
        Bu kısımda bir dizi verilerek, index.pug dosyasında çıktısı alınmaktadır.
        */ 

        {resimAciklama : 'Resim açıklaması 1', resim : 'resim1.jpg'}, 
        {resimAciklama : 'Resim açıklaması 2', resim : 'resim2.jpg'}
    ]

    res.render("index", {title: "Homepage", dinamikAciklama : resimler /* resimler dizisinin elemanlarını aldık ve dinmaikAciklama kısmına attık.*/ }) //sayfanın title kısmına homepage yazısı yazdırıldı.
})


module.exports = userRouters //user router olarak kullanılmaktadır.