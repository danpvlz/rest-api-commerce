const {Schema, model} = require('mongoose');

const categoriaSchema = new Schema(
    {
        categoria: {type: String},
        vigencia: {type: Boolean, default:true},
    },{
        timestamps: true
    }
);

module.exports = model('Categoria',categoriaSchema);