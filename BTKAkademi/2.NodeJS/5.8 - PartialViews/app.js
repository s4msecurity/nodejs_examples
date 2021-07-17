const express = require("express")
const app = express()
const path = require("path")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: false })) //Genel olarak sayfa işleyişi ayarlandı.
//app.use(express.json)
app.use(express.static(path.join(__dirname, "img"))) //resimleri erişilebilir

app.set("view engine", "pug") //pug view motoru aktifleştirildi.
app.set("views", "./views") //views olarak klasör olması gerekli.

const indexPage = require("./router/index") //index dosyasında JS özelliğini aldık.
const admin = require("./router/addStock") //admin JS dsyasını özelliğini aldık
app.use(indexPage) //indexJS eklendi.
app.use(admin) //admin diye addstock js eklendi.

app.use(function (req, res, next) {
    res.status(404).render("404", {title : "Hata sayfası"}) //render pug ile gelen bir özellik direk view içinde dosyanın adını alarak okuyor.
    next()
})

app.listen(3000, function () {
    console.log("Server running")
})