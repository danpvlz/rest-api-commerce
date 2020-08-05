const {Router} = require('express');
const router = Router();

const {getClientes,getCliente,createCliente,updateCliente,deleteCliente} = require('../controllers/cliente.controller');

router.route('/')
.get(getClientes)
.post(createCliente);

router.route('/:id')
.post(getCliente)
.put(updateCliente)
.delete(deleteCliente);

module.exports = router;