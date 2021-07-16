const exrepss = require("express")
const router = exrepss.Router()

const mesajlar = [
    {mesajIcerik : ""}
]


router.post("/", function(req, res, next){
    mesajlar.push({mesajIcerik : req.body.texMessage})
    next()      
})

router.use("/", function(req, res, next){
    res.render("index", {dinamikIcerik : mesajlar})
})


module.exports = router;