const {Schema, model} = require('mongoose');

const productoSchema = new Schema({
producto: {type: String},
precio_venta: {type: Number},
imagePath: {type: String},
categoria: {type: Schema.Types.ObjectId, ref: 'Categoria' },
vigencia: {type: Boolean, default:true}
},
{timestamps: true});

module.exports = model('Producto',productoSchema);