const Order = require('../models/Order');

// Criar novo pedido
exports.createOrder = async (req, res) => {
    try {
        const { numeroPedido, valorTotal, dataCriacao, items } = req.body;

        const mappedItems = items.map(item => ({
            productId: item.idItem,
            quantity: item.quantidadeItem,
            price: item.valorItem,
        }));

        const order = new Order({
            orderId: numeroPedido,
            value: valorTotal,
            creationDate: dataCriacao,
            items: mappedItems,
        });

        await order.save();
        res.status(201).json({ message: 'Pedido criado com sucesso!', order });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao criar pedido.', error: error.message });
    }
};

// Obter pedido por ID
exports.getOrder = async (req, res) => {
    try {
        const order = await Order.findOne({ orderId: req.params.id });
        if (!order) return res.status(404).json({ message: 'Pedido não encontrado.' });
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar pedido.', error: error.message });
    }
};

// Listar todos os pedidos
exports.listOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar pedidos.', error: error.message });
    }
};

// Atualizar pedido
exports.updateOrder = async (req, res) => {
    try {
        const { valorTotal, items } = req.body;

        const mappedItems = items ? items.map(item => ({
            productId: item.idItem,
            quantity: item.quantidadeItem,
            price: item.valorItem,
        })) : undefined;

        const updatedData = {
            ...(valorTotal && { value: valorTotal }),
            ...(items && { items: mappedItems }),
        };

        const order = await Order.findOneAndUpdate(
            { orderId: req.params.id },
            updatedData,
            { new: true }
        );

        if (!order) return res.status(404).json({ message: 'Pedido não encontrado.' });

        res.json({ message: 'Pedido atualizado com sucesso!', order });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar pedido.', error: error.message });
    }
};

// Deletar pedido
exports.deleteOrder = async (req, res) => {
    try {
        const order = await Order.findOneAndDelete({ orderId: req.params.id });
        if (!order) return res.status(404).json({ message: 'Pedido não encontrado.' });
        res.json({ message: 'Pedido deletado com sucesso!' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar pedido.', error: error.message });
    }
};