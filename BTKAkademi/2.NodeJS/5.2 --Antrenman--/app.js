const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")

const app = express()

app.use(bodyParser.urlencoded({extended : false}))
app.use(express.static("htmlFile"))


app.use(function(req, res){
    res.status(400)
    res.send("<h1>Sayfa Tanımlı değil!</h1>")
    res.location
})

app.listen(3000, function(){
    console.log("Server running...3000")
})