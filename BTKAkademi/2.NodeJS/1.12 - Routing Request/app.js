const httpC = require("http")

const server = httpC.createServer(function(req, res){

    const url = req.url

    if(url === "/"){
        res.write("<html>")
        res.write("<body> <form method='POST' action = '/log'>  <input type='text' name='message'><button type='submit'>save</button> </form> </body>")
        res.write("</html>")
        res.end()
    }
})


server.listen(3000)
console.log("Server listening 3000")