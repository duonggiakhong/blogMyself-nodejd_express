
import pool from "../configs/connectDB";

let indexController = async (req, res) => {


    return res.render('./pages/index.ejs')
}
let headerController = (req, res) => {
    res.render('./pages/header.ejs');
}

let headerUser = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM users');

    res.render('./crud/user.ejs', { dataUser: rows });
}

module.exports = {
    indexController,
    headerController,
    headerUser,
}
