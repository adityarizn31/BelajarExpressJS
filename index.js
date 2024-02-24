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

// app.get('/', (req,res) => {
//   res.send('This is Homepage');
// });

app.get('/cats', (req,res) => {
  res.send('This is Cats Page');
});

// app.get('/about', (req,res) => {
//   res.send('This is About Page');
// });

// app.post('/cats', (req,res) => {

// });


app.get('/blog/:judul', (req, res) => {
  const { judul } = req.params;
  res.send(`Kita Melihat Judul Params: ${judul}`);
});

app.get('/blog/:category/:judul/:author', (req, res) => {
  const { category, judul, author } = req.params;
  res.send(`Blog dengan Kategori : ${category} | Author: ${author} | Judul: ${judul}`);
});

app.get('/search', (req, res) => {
  console.log(req.query);
  
});

// Harus ditempatkan dipaling bawah dan tidak boleh ditempat di atas
app.get('*', (req,res) => {
  res.send('Halaman tidak dapat ditemukan !!');
});






app.listen(8080, ()=> { // Digunakna untuk menjalankan method main utama 
  console.log('Server is running on http://localhost:8080');
});