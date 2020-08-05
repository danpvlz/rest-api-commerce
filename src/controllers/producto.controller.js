const productoCtrl = {};
const Producto = require('../models/Producto');
const fs = require('fs-extra');
const path = require('path');

productoCtrl.getProductos = async(req,res)=>{
    try {
        const productos = await Producto.find().populate('categoria');
        res.json(productos);
    } catch (error) {
        res.status(400).json({error: error});
    }
}

productoCtrl.getProductosVigentes = async(req,res)=>{
    try {
        const productos = await Producto.find({vigencia:true});
        res.json(productos);
    } catch (error) {
        res.status(400).json({error: error});
    }
}

productoCtrl.createProducto = async(req,res)=>{
    try {
        const {producto, precio_venta,categoria} = req.body;
        var imagePath = req.file ? '/uploads/'+req.file.filename : 'null';
        const newProducto = new Producto(
            {
                producto, 
                precio_venta,
                imagePath,
                categoria}
        );
        await newProducto.save();
        res.json('Producto saved!');
    } catch (error) {
        res.status(400).json(error);
    }
}

productoCtrl.updateProducto = async(req,res)=>{
    try {
        const {producto, precio_venta,imagePath,categoria,vigencia} = req.body;
        await Producto.findByIdAndUpdate(
            req.params.id,
            {producto, precio_venta,imagePath,categoria,vigencia}
        );
        res.json('Producto updated!');
    } catch (error) {
        res.status(400).json({error: error});
    }
}

productoCtrl.deleteProducto = async(req,res)=>{
    try {
        const productDeleted = await Producto.findByIdAndDelete(req.params.id);
        fs.unlink(path.resolve('./public'+productDeleted.imagePath));
        res.json('Producto deleted!');
    } catch (error) {
        res.status(400).json({error: error});
    }
}

module.exports = productoCtrl;