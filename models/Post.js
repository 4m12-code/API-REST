const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
    // title:{
    //     type:String,
    //     require:true
    // },description:{
    //     type:String,
    //     require:true
    // },date:{
    //     type:Date,
    //     default:Date.now
    // }
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    telefono: {
        type: String, // Puedes ajustar el tipo de dato según lo que uses para almacenar números de teléfono
        required: true
    }
});
module.exports =  mongoose.model('Post',PostSchema);