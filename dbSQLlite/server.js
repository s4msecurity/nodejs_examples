const sqlite3 = require('sqlite3').verbose()
const fs = require("fs")



module.exports.srvGen = function (query) {

    fs.readFile("test.db", function (err, data) {

        if (err) {
            let db = new sqlite3.Database('./test.db', function (err) {
                if (err) {
                    return console.log(err.message)
                }
                else {
                    console.log("Created DB")
                    ServerStart()
                }
            })
        }
        else {
            ServerStart()
        }
    })

    function ServerStart() {

        let db = new sqlite3.Database('./test.db', sqlite3.OPEN_READWRITE, function (err) {
            if (err) {
                return console.log(err.message)
            }
            else {
                console.log("Connected DB")
            }
        })

        db.serialize(function () {

            db.each(query, function (err, row) {
                if (err) {
                    console.error(err.message)
                }
                else {
                    console.log("Sorgu Çalıştırıldı\n" + row)
                }

            })
        })

        db.close(function (err) {
            if (err) {
                console.error(err)
            }
            else {
                console.log("SQL Server Closed")
            }
        })
    }

}

