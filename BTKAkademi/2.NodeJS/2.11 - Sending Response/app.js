/*
Response ile cevap gönderebilir ve veya durum gönderebilir ve veya html yada dosya gönderebiliriz.
Sayfaya html dosyasını çağırmak için öncelike okuma işlemi yapılması gerekmektedir.
HTML dosyasının içerği okunarak çalıştırılabilir olmalıdır.


*/

const http = require("http")
const fs = require("fs") //FileSysteö yani dosya okuma işlemleri. :) 

const server = http.createServer(function(req, res){
    
    //res.setHeader("Content-Type", "text/Plain") //Response tipi, string değeri gönderileceğini belirttik. (1)
    //res.setHeader("Content-Type","application/json") //Gönderilecek değerin JSON olduğunu yani JavaSCript çıktısı olduğu belirlendi. (2)
    //res.setHeader("Content-Type", "text/html") //Response işleminde html dosyası gönderildiğini iletiyor (3)

    //res.statusCode = 200 //Başarılı olduğunu ilettik.
    //res.statusMessage = "OK" //Tarayıcıda istek alan clienta gönderilen mesaj.

    //res.write("HelloWorld") //İle response işlemi yaparken gönderilen mesaj. (1)
    //res.write(JSON.stringify({name : "Samsung S8", price: 300})) //Responseişlemi için JSON fortmatında çıktı gönderiyoruz (2)
    //res.write("<html><head></head><body> <h1>Naber Müdür</h1> </body></html>") (3)

    fs.readFile("index.html", function(err, data){
        if(err){
            res.setHeader("Content-Type", "text/plain");
            res.statusCode = 404;
            res.statusMessage = "Not Found";
            res.end("Dosya bulunamadı.");
        }else{
            res.setHeader("Content-Type", "text/html");
            res.statusCode = 200;
            res.statusMessage = "OK";
            res.end(data);
        }
    })


    //res.end() //Gönderilecek değerler kısmının son bulduğunu ileten kısımdır. 
 })

server.listen(3000)
console.log("Server running")