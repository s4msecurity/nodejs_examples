const express = require("express")
const router = express.Router()


router.use(express.json())

const dinamik = [
]


router.use("/admin", function (req, res, next) { //localhost:300/admin url adresine girildiğinde add pugını gönderdik.
    res.render("add", {title : "Resim ekle"})
})

router.post("/", function (req, res, next) { //add pug dosyasından gelen post değeri okundu. push metoduyla diziye eklendi
    
    dinamik.push({resimAciklama : req.body.fname , resimAdi : req.body.lname})

    res.redirect("/")
})

module.exports = router;
module.exports.dinamik = dinamik;