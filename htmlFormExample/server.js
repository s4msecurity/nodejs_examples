const { response } = require("express")
var express = require("express")
var app = express()

app.use(express.static('wwww'))
app.get('/', function(req, res){
    res.sendFile(__dirname + "/" + "index.html")
})

app.get('/process_get', function(req, res){
    res.send("<h1>isim: "+req.query.first_name+"</h1>\n<h1>"+req.query.last_name+"</h2>")
})

var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Server sniffin : http://127.0.0.1", port)
})