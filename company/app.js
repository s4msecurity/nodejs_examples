const express = require("express")
const app = express()
const path = require("path")
const bodyParser = require("body-parser")

app.use(express.static(path.join(__dirname,"pageFile")))
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  })); 


app.use("/", function(req, res, next){
    res.sendFile(path.join(__dirname+"/pageFile/index.html"))
    console.log(req.url)
    next()
})

app.use("/post", function(req, res){
    console.log(req.query.name)
})

app.listen(3000, function(){
    console.log("Servis start...3000")
})  