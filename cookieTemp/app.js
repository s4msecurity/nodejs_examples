const express = require("express")
const app = express()

app.use("/", function(req, res){
    console.log(req.headers['user-agent'])
})


app.listen(3000, function(){
    console.log("Server starting: 3000")
})