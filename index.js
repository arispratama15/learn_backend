const { request } = require('express');
const express = require('express')
const app = express()
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'ris',
  password: 'welcome@123',
  database: 'harga_pajak'
})

// connection.connect()

// var nama_barang = 'vibe';
// connection.query(`SELECT * from list_barang where nama_barang='${nama_barang}'`, function (err, rows, fields) {
//   if (err) throw err

//   console.log('The solution is: ', rows[0])
// })

app.get('/', function (req, res) {
  connection.connect()
  var nama_barang = req.query.id;
  connection.query(`SELECT * from list_barang where nama_barang='${nama_barang}'`, function (err, rows, fields) {
    if (err) throw err
    // console.log(`SELECT * from list_barang where nama_barang='${nama_barang}'`);
    // console.log(rows[0]);
    var harga = rows[0].harga_barang;
    var pajak = harga * 10 / 100;
    var totalHarga = harga + pajak;
    res.send('Harga Vibe + pajak: ' + totalHarga);
   })
  connection.end()
})


  app.listen(3000);
  console.log('Express started on port 3000');