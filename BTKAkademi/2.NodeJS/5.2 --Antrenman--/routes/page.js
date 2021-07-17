const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")
const path = require("path")


router.use(bodyParser.urlencoded({extended : false}))

router.use("/", function(req,res,next){
    res.sendFile(path.join(__dirname,"htmlFile","index.html"))    
    console.log(req.body)
})

module.exports = router;



