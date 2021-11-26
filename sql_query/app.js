const sql = require('mssql')
const query=`select * from tblfatsb`;
config = {
    user: '_UserName_',
    password: '_Password_',
    server: '_ServerAdres_',
    database: '_DataBaseName_',
    options: {           
        encrypt: false        
    }
  };

 
sql.on('error', err => {
    // ... error handler
})
 
sql.connect(config).then(pool => {
    return pool.request()
        .query(query)
}).then(result => {
    console.log(result.recordset)
}).catch(err => {
    console.log(err)
});
