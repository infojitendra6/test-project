import mysql from 'mysql';
// const connectionPool = mysql.createPool({
//     host     : process.env.MYSQL_HOST,
//     user     : process.env.MYSQL_USER,
//     port: Number(process.env.MYSQL_PORT),
//     password : process.env.MYSQL_PWD,
//     database : process.env.MYSQL_DB
// });
const connection = mysql.createConnection({
    host     : process.env.MYSQL_HOST,
    user     : process.env.MYSQL_USER,
    port: Number(process.env.MYSQL_PORT),
    password : process.env.MYSQL_PWD,
    database : process.env.MYSQL_DB,
    multipleStatements : true,
    queryTimeout: 6000,
    connectTimeout: 60000,
});

connection.connect((err)=>{
    if (err) {
        console.log(err);
        return err;
    } else {
        console.log("DataBase connected successfully")
    }
});
module.exports = connection;
