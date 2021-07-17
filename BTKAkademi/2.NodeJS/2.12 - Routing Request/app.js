const httpC = require("http")
const fs = require("fs")

const server = httpC.createServer(function(req, res){

    const url = req.url
    const methodDurum = req.method //Request işleminde yani istek durumunda, POST mu GET onu alıyoruz.
    
    res.setHeader("Content-Type", "text/html")
    
    
    if(url == "/"){
        res.write("<html> <body> <form method='POST' action = '/log'>  <input type='text' name='message'><button type='submit'>save</button> </form> </body> </html>") // Bir tane html çıktısıı veriyor submite işlemini takip ederek çalışmasını sağlar.
        res.end()
    }

    if(url=="/log" && methodDurum == "POST"){ //Burada kullanıcının serverdan istediği adres /log ve methodu post ise içeriye al olarak ayarlanmış durumda
        
        
        fs.appendFileSync("message.txt", "\ndeneme")  //Gelen veriyi almak. veya yanıtlamak.
        res.statusCode = 302 //Yönlendirme işlemi yapıldığı görüldü.
        res.setHeader("Location", "/") //bu kısım tarayıcıy clientı ana sayfaya yönlendirme işlemi yapılmaktadır
        res.end()
    }

})


server.listen(3000)
console.log("server listenin 3000")