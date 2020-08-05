const categoriaCtrl = {}
const Categoria = require('../models/Categoria');

categoriaCtrl.getCategorias = async (req,res) => {
    try{
        const categorias = await Categoria.find();
        res.json(categorias);
    }catch(e){
        res.status(400).json({error: e});
    }
}

categoriaCtrl.getCategoriasVigentes = async (req,res) => {
    try{
        const categorias = await Categoria.find({vigencia:true});
        res.json(categorias);
    }catch(e){
        res.status(400).json({error: e});
    }
}

categoriaCtrl.createCategoria = async(req,res) => {
    try{
        const {categoria} = req.body;
        const createCategoria = new Categoria(
            {categoria});
        await createCategoria.save();
        res.json('Categoria created!');
    }catch(e){
        res.status(400).json({error: e});
    }
}

categoriaCtrl.updateCategoria = async(req,res) => {
    try{
        const {categoria,vigencia} = req.body;

        await Categoria.findByIdAndUpdate(req.params.id,{categoria,vigencia});
        res.json('Categoria updated!');
    }catch(e){
        res.status(400).json({error: e});
    }
}

categoriaCtrl.deleteCategoria = async(req,res) => {
    try{
        await Categoria.findByIdAndDelete(req.params.id);
        res.json('Categoria deleted!');
    }catch(e){
        res.status(400).json({error: e});
    }
}

module.exports = categoriaCtrl;