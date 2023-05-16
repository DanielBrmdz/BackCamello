require('dotenv').config();
const mysql = require('mysql');

const config = {
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE
}
const dbconector = mysql.createConnection('mysql://6onogqbabku2ljyp2cqr:pscale_pw_s7bFFtzxkUZ5h579a8cImlqpxnFi0aWkyPrqkhE7NmL@aws.connect.psdb.cloud/elcamello?ssl={"rejectUnauthorized":true}'
);

dbconector.escape = mysql.escape;

dbconector.connect((err) =>{
    if (err) {
        console.error('Error conectando la base de datos con el servidor: ' + err.stack);
        return;
    }
    console.log('Se ha conectado exitosamente la base de datos con el servidor, id:' + dbconector.threadId);
});

module.exports = dbconector;