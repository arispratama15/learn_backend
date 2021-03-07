const { request } = require('express');
const express = require('express')
const app = express()


app.get('/', function(req, res){
  var harga = Number(req.query.id);
  var pajak = harga * 10 / 100;
  var totalHarga = harga + pajak;
  res.send('Harga Vibe + pajak: ' + totalHarga);
});

app.listen(3000);
console.log('Express started on port 3000');

tes