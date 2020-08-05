const {Schema, model} = require('mongoose');

var utc = new Date();
utc.setHours( utc.getHours() - 5);

const pedidoSchema = new Schema({
    cliente: {type: Schema.Types.ObjectId, ref: 'Cliente' },
    productos: [{type: Schema.Types.ObjectId, ref: 'Producto' }],
    subtotal: Number,
    total: Number,
    fecha_entrega: {type: Date},
    fecha_pedido: {type: Date, default: utc},
    estado: {type: String, default: 'Pendiente'}
});

module.exports=model('Pedido',pedidoSchema);