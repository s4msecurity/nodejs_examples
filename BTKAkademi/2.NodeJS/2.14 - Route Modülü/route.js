const fs = require("fs")

const routHandler = function (req, res) {//Bu kısımda gelen değerleri export ile dışarı vereceğimiz için bir fonksiyonu değişken içine atarak dışarı verilebilir yapacağız.

    const url = req.url
    const methodDurum = req.method //Request işleminde yani istek durumunda, POST mu GET onu alıyoruz.

    res.setHeader("Content-Type", "text/html")


    if (url == "/") {
        res.write("<html> <body> <form method='POST' action = '/log'>  <input type='text' name='message'><button type='submit'>save</button> </form> </body> </html>") // Bir tane html çıktısıı veriyor submite işlemini takip ederek çalışmasını sağlar.
        res.end()
    }

    if (url == "/log" && methodDurum == "POST") { //Burada kullanıcının serverdan istediği adres /log ve methodu post ise içeriye al olarak ayarlanmış durumda


        //body parding (bodyparser)
        const body = []; //Dizi tanımlanması yapılmıştır.

        req.on("data", function (chunk) { //Gelen dataları buffer dataları kullanmaya yaramaktadır.
            body.push(chunk)
            console.log(chunk)
        })

        req.on("end", function () {
            const bodyParsed = Buffer.concat(body).toString() //Gelen veriyi stringe convert edilmesi işlemi.
            const message = bodyParsed.split("=")[1] //Burada gelen kısımda message= kısmı silinmesi sağlandı. 
            fs.appendFileSync("message.txt", message) //senkron olarak gelen değeri eklemeye yaramaktadır.

        })

        res.statusCode = 302 //Yönlendirme işlemi yapıldığı görüldü.
        res.setHeader("Location", "/") //bu kısım tarayıcıy clientı ana sayfaya yönlendirme işlemi yapılmaktadır
        res.end()
    }
}

module.exports = routHandler