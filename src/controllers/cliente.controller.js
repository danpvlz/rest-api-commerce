const clienteCtrl = {}
const Cliente = require('../models/Cliente');

clienteCtrl.getClientes = async (req,res) => {
    try{
        const clientes = await Cliente.find();
        res.json(clientes);
    }catch(e){
        res.status(400).json({error: e});
    }
}

clienteCtrl.getCliente = async (req,res) => {
    try{
        const cliente = await Cliente.findOne({_id:req.params.id});
        res.json(cliente);
    }catch(e){
        res.status(400).json({error: e});
    }
}

clienteCtrl.createCliente = async(req,res) => {
    try{
        const {nombres,apellidos,direccion,email,telefono} = req.body;
        const createCliente = new Cliente({nombres,apellidos,direccion,email,telefono});
        await createCliente.save();
        res.json('Cliente created!');
    }catch(e){
        res.status(400).json({error: e});
    }
}

clienteCtrl.updateCliente = async(req,res) => {
    try{
        const {nombres,apellidos,direccion,email,telefono} = req.body;
        await Cliente.findByIdAndUpdate(req.params.id,{nombres,apellidos,direccion,email,telefono});
        res.json('Cliente updated!');
    }catch(e){
        res.status(400).json({error: e});
    }
}

clienteCtrl.deleteCliente = async(req,res) => {
    try{
        await Cliente.findByIdAndDelete(req.params.id);
        res.json('Cliente deleted!');
    }catch(e){
        res.status(400).json({error: e});
    }
}

module.exports = clienteCtrl;