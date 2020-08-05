const {Router} = require('express')
const router = Router();

const {getProductos,getProductosVigentes,createProducto,updateProducto,deleteProducto} = require('../controllers/producto.controller');

router.route('/')
.get(getProductos)
.post(createProducto);

router.route('/all')
.get(getProductosVigentes);

router.route('/:id')
.post(updateProducto)
.delete(deleteProducto);

module.exports = router;