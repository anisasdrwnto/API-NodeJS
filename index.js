const express = require('express') 
const app = express() 
const port = 3000   
const db = require("./connection"); 
app.use(express.json());


app.get('/products', (req, res) => { 
   const sqlQuery =  "SELECT * FROM products";  
   db.query(sqlQuery, (err, result)=>{    
    if(result.length > 0){  
        res.json({ 
            status: 200, 
            data: result, 
            message: "sukses ambil semua products!", 
        });
    }else{
        res.json({
            status: 400,     
            data: result,    
            message: "gagal ambil semua products!",   
        });
    }
   });
});



app.get('/products/:id', (req, res) => {
  const id = req.params.id; 
  const sqlQuery = `SELECT * FROM products WHERE id = '${id}'`; 
  db.query(sqlQuery, (err, result)=> {
    if(result.length > 0){    
      res.json({
        status: 200,
        data: result,
        message: "sukses ambil detail products",
      });
    }else{ 
      res.json({
        status: 400,
        data: result,
        message: "gagal ambil detail products",
      });
    }
  });
});

app.post('/products', (req, res)=> {
  const body = req.body;
  const sqlQuery =  `INSERT INTO products SET nama =
      '${req.body.nama}',  stok =
      ${req.body.stok}, kategori = '${req.body.kategori}', deskripsi =
      '${req.body.deskripsi}'`;
  db.query(sqlQuery, (err, result)=> {
    if(result){
      res.json({
        status: 201,
        data: result,
        message: "sukses tambah data products!",
      });

    }else{
      res.json({
        status: 400,
        data: err,
        message: "gagal tambah data products",
      });
    }
  });

});

app.put('/products/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const sqlQuery =  `UPDATE products SET nama =
      '${req.body.nama}',  stok =
      ${req.body.stok}, kategori = '${req.body.kategori}', deskripsi =
      '${req.body.deskripsi}' WHERE id = ${id}`;
  db.query(sqlQuery, (err, result)=> {
    if(result){
      res.json({
        status: 200,
        data: result,
        message: "sukses update data products!",
      });

    }else{
      res.json({
        status: 400,
        data: err,
        message: "gagal update data products",
      });
    }
  });
});

app.delete('/products/:id', (req, res) => {
  const id = req.params.id;
  const sqlQuery = `DELETE FROM products WHERE id = ${id}`;
  db.query(sqlQuery, (err, result) => {
    if(result.affectedRows > 0){  
      res.json({
        status: 200,
        data: result,
        message: "sukses hapus data products",
      });
    }else{
      res.json({
        status: 400,
        data: err,
        message: "gagal hapus data products",
      })
    }
  });
});


app.listen(port, () => {
  console.log(`service - api jalan di port: ${port}`)
})