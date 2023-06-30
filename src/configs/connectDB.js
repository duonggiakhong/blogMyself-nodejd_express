import mysql from "mysql2/promise"

// create the connection to pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic'
});
export default pool;