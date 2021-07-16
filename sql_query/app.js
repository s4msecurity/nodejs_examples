const sql = require('mssql')
const query=`select * from tblfatsb`;
config = {
    user: 'sa',
    password: 'Axoft*2014',
    server: '192.168.1.19:1071',
    database: 'SAM2021',
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