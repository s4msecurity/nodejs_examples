const httpC = require("http")
const routes = require("./route") //route.js dosyasını aktif ettik. Ekledik. Kütüphane gibi. Ve routest işlemlerini yönlendirme işlemlerinin yapılmasını sağladık.

const server = httpC.createServer(routes)


server.listen(3000)
console.log("server listenin 3000")