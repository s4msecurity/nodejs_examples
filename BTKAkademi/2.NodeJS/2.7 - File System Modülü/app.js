const fs = require("fs")


//Bu kısım bir dizin içinde ki yani klasör içinde ki verileri listelemeye yarar.
const file = fs.readdir("./", function(error, data){ //readdir bu kısımda dosya okuma işlmei asenkron olarak yapılmaktadır. Asenkron okuma istersek  readdirSync komutu girilmelidir.

    if(error){
        console.log(error) //Bu şekilde eğer ki error verirse almayı sağlar.
    }
    else {
        console.log(data);
    }

})

//Dosya okuma işlemi
const data = fs.readFile("index.html","UTF-8", function(error, data){
    if(error){
        console.log(error)
    }
    else {
        console.log(data)
    }
})

//Dosyya oluşturma ve yazma işlemleri.  
const yazici = fs.writeFile("deneme.txt", "HelloWorldNaberrr!!", function(error,data){
    if(error){
        console.log(error)
    }else{
        console.log("Dosya hazır amk")
    }
})
/*
    writeFile ile appendFile arasında bir fark var. Bu fark daha önceden dosya içinde bir değer varsa üzerine ekleme işlemi yapılmasını sağlamaktadır.
*/
//Append ile dosya oluşturma işlemi
const yazici1 = fs.appendFile("deneme.txt", "HelloWorldNaberrr!!", function(error,data){
    if(error){
        console.log(error)
    }else{
        console.log("Dosya hazır amk")
    }
})


//Dosya silme işlemi
const silme = fs.unlink("app.txt", function(error, data){
    
    if(error){
        console.log(error)
    }
    else{
        console.log("Silme işlemi tamamlandı"+ data)
    }

})

//Dosya isimlendirme
const yenidenIsim = fs.rename("name.txt","name1.txt", function(error, data){

    if(error){
        console.log(error)
    }
    else{
        console.log("dosya ismi başarıyla değiştirildi.")
    }

})


/*

**************
bilgilendirme, bu kısımda her bir işlem için ayrı bir const tanımı yapıldı.
Ancak bir tane const ile örneğin "silme" ile bir kez tanımlandıktan sonra direk olarak ilgili işlemlerin yapılması sağlanabilir.

*/