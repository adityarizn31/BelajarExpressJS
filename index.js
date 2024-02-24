const express = require ('express'); // Membuat objek terlebih dahulu

const app = express(); 

app.use(() => {
  console.log('we got request');
});

app.listen(8080, ()=> { // Digunakna untuk menjalankan method main utama 
  console.log('Server is running on http://localhost:8080');
});