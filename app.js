const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const nUsuario = require('./models/Post');

app.use(bodyParser.json());
const postRoute = require('./routes/post');
const Post = require('./models/Post');
app.use('/servicios',postRoute);

app.get('/', (req, res) => {
    res.send('pruba 1 respueta del sevidor');
});

mongoose.connect('mongodb+srv://4m12:fGEmr40qu7lZasn4@cluster0.gqxfffm.mongodb.net/srca');
mongoose.connection.on('connected', () => {
    console.log('Conectado a la base de datos');
});

mongoose.connection.on('error', (err) => {
    console.error('Error al conectar a la base de datos:', err);
});

// const nuevoUsuario = new nUsuario({
//     username:'4m14',
//     password:"abcd1234",
//     nombre:'marcelo ortega',
//     telefono:'3137830818'
// })

// nuevoUsuario.save()
// .then(resultado => {
//     console.log('Usuario creado:', resultado);
//     // Realizar cualquier otra lógica después de la inserción
// })
// .catch(error => {
//     console.error('Error al crear usuario:', error);
// });

app.listen(10000);