const exrepss = require("express")
const app = exrepss()

const bodyParser = require("body-parser")
const router = require("./router/index")


app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())
app.use(router)

app.set("view engine","pug")
app.set("views", "./views")


app.use("/",function(req, res,next){
    res.status(404).render("404")
    res.end()
})


app.listen(3000, function(){
    console.log("Server run.")
})