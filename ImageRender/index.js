const express = require('express');
const multer = require('multer'); // Para manejar archivos enviados
const path = require('path');
const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // Donde se guardarán los archivos
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })

app.post('/subir-imagen', upload.single('imagen'), (req, res) => {
  console.log('Imagen recibida:', req.file);
  // Procesa la imagen si es necesario

  const imagenURL = `http://localhost:3000/${req.file.filename}`; // Cambia la URL según tu configuración
  res.send({ imagenURL });
});

// Configura el servidor para servir archivos estáticos desde la carpeta 'build'
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Ruta de inicio
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

app.use(express.static('uploads')); // 'uploads' es el directorio donde se guardan las imágenes

app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
