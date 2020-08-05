const pedidoCtrl = {}
const Pedido = require('../models/Pedido');

pedidoCtrl.getPedidos = async (req,res) => {
    try{
        const pedidos = await Pedido.find();
        res.json(pedidos);
    }catch(e){
        res.status(400).json({error: e});
    }
}

pedidoCtrl.getPedidosPendientes = async (req,res) => {
    try{
        const pedidos = await Pedido.find({estado:'Pendiente'});
        res.json(pedidos);
    }catch(e){
        res.status(400).json({error: e});
    }
}

pedidoCtrl.getPedidosPorCliente = async (req,res) => {
    try{
        const pedidos = await Pedido.find({cliente: req.params.cliente});
        res.json(pedidos);
    }catch(e){
        res.status(400).json({error: e});
    }
}

pedidoCtrl.getPedido = async (req,res) => {
    try{
        const pedido = await Pedido.findOne({_id:req.params.id});
        res.json(pedido);
    }catch(e){
        res.status(400).json({error: e});
    }
}

pedidoCtrl.createPedido = async(req,res) => {
    try{
        const {cliente,productos,subtotal,total,fecha_entrega} = req.body;
        const createPedido = new Pedido({cliente,productos,subtotal,total,fecha_entrega});
        await createPedido.save();
        res.json('Pedido created!');
    }catch(e){
        res.status(400).json({error: e});
    }
}

pedidoCtrl.updatePedido = async(req,res) => {
    try{
        const {cliente,productos,subtotal,total,fecha_entrega,estado} = req.body;
        const pedido = await Pedido.findOne({_id:req.params.id});
        pedido.cliente=cliente;
        pedido.productos=productos;
        pedido.subtotal=subtotal;
        pedido.total=total;
        pedido.fecha_entrega=fecha_entrega;
        pedido.estado=estado;
        await pedido.save();
        res.json('Pedido updated!');
    }catch(e){
        res.status(400).json({error: e});
    }
}

module.exports = pedidoCtrl;