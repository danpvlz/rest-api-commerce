const {Router} = require('express');
const router = Router();

const {getCategorias,getCategoriasVigentes,createCategoria,updateCategoria,deleteCategoria} = require('../controllers/categoria.controller');

router.route('/')
.get(getCategorias)
.post(createCategoria);

router.route('/vigentes')
.get(getCategoriasVigentes);

router.route('/:id')
.post(updateCategoria)
.delete(deleteCategoria);

module.exports = router;