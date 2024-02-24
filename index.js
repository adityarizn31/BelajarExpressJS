const express = require ('express'); // Membuat objek terlebih dahulu

const app = express(); 

app.use((req, res) => { // ini merupakan object dan response
  console.log('we got request');
  // console.dir(req);
  // console.dir(res);
  res.send('<h1>Hello Express </h1>');
  res.send ({ message: 'Hello World' });
  res.send ("Ini String dari Respon");
});

app.listen(8080, ()=> { // Digunakna untuk menjalankan method main utama 
  console.log('Server is running on http://localhost:8080');
});