import mysql from 'mysql2';

require("dotenv").config();

const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'gging00100!',
    database: 'test',
});

const promisePool = pool.promise();

// select query
export const selectSql = {
    getUser: async () => {
        const sql = `select * from Users`;
        const [result] = await promisePool.query(sql);
        return result;
    },
};
