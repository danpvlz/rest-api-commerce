const {Router} = require('express');
const router = Router();

const {getPedidos,
    getPedidosPendientes,
    getPedidosPorCliente,
    getPedido,
    createPedido,
    updatePedido} = require('../controllers/pedido.controller');

router.route('/')
.get(getPedidos)
.post(createPedido);

router.route('/pendientes')
.get(getPedidosPendientes);

router.route('/:cliente')
.get(getPedidosPorCliente);

router.route('/:id')
.post(getPedido)
.put(updatePedido);

module.exports = router;