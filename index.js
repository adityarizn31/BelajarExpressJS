const express = require ('express'); // Membuat objek terlebih dahulu

const app = express(); 

// app.use((req, res) => { // ini merupakan object dan response
//   console.log('we got request');
  // console.dir(req);
  // console.dir(res);

  // Menampilkan Respon kepada Client
  // res.send('<h1>Hello Express </h1>');
  // res.send ({ message: 'Hello World' });
  // res.send (`Ini String dari Respon`);
// });

app.get('/', (req,res) => {
  res.send('This is Homepage');
});

app.get('/cats', (req,res) => {
  res.send('This is Cats Page');
});

app.get('/about', (req,res) => {
  res.send('This is About Page');
});

app.post('/cats', (req,res) => {

});

// Harus ditempatkan dipaling bawah dan tidak boleh ditempat di atas
app.get('*', (req,res) => {
  res.send('Halaman tidak dapat ditemukan !!');
});


app.listen(8080, ()=> { // Digunakna untuk menjalankan method main utama 
  console.log('Server is running on http://localhost:8080');
});