const {Schema, model} = require('mongoose');

const clienteSchema = new Schema({
    nombres: {type: String, required:true},
    apellidos: {type: String, required:true},
    direccion: {type: String, required:true},
    email: {type: String, required:true},
    telefono: {type: String, required:true}
});

module.exports=model('Cliente',clienteSchema);