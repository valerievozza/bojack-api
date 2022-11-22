const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/bojackApi.db', sqlite3.OPEN_READONLY, (error) => {
    if (error){
        console.log(error.message);
    }
    console.log('DB connected successfuly')
});

module.exports = db;