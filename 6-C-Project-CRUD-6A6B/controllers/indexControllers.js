const pool = require('../database');
const mysql = require('mysql')


exports.read = async (req, res, next) => {
    let query = 'SELECT product.id AS id, cashier.name AS cashier, product.name AS product, category.name AS category, product.price AS price FROM((product INNER JOIN category ON product.id_category = category.id) INNER JOIN cashier ON product.id_cashier = cashier.id)'
    let items = await pool.query(query);
    let itemsCashier = await pool.query('SELECT * FROM `cashier`')
    let itemsCategory = await pool.query('SELECT * FROM `category`')
    res.render('index', {
        dataTable: items,
        dataCashier: itemsCashier,
        dataCategory: itemsCategory
    });
};

exports.add = async (req, res, next) => {

    let query = mysql.format('INSERT INTO  `product`(`id`, `name`, `price`, `id_category`, `id_cashier`) VALUES (?,?,?,?,?)',
        [req.body.id, req.body.name, req.body.pice, req.body.id_category, req.body.id_cashier])
    let result = await pool.query(query);
    res.send(result);
};

exports.edit = async (req, res, next) => {};

exports.delete = async (req, res, next) => {

};