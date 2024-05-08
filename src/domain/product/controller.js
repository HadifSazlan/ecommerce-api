
import {
    findAllProducts, 
    addProduct, 
    findOneProduct, 
    updateProduct, 
    deleteProduct
} from './queries.js';

const index = async (req, res) => {
    try {
        const products = await findAllProducts()
        res.status(200).json(products);
    } catch (e) {
        res.status(500).json({msg: e.message || 'Internal server error'});
    }
};

const store = async (req, res) => {
    const {brand, name, image, price, stock} = req.body;

    const data = {brand, name, image, price, stock}
    try {
        const product = await addProduct(data)
        res.status(200).json(product)
    } catch (e) {
        res.status(500).json({msg: e.message || 'Internal server error'});
    }
};

const fetch = async (req, res) => {
    const {id} = req.params;

    try {
        const product = await findOneProduct(id)
        res.status(200).json(product);
    } catch (e) {
        res.status(500).json({msg: e.message || 'Internal server error'});
    }
};

const update = async (req, res) => {
    const {id} = req.params;
    const {brand, name, image, price, stock} = req.body;

    const data = {brand, name, image, price, stock}

    try {
        const product = await updateProduct(data, id)
        res.status(200).json(product);
    } catch (e) {
        res.status(500).json({msg: e.message || 'Internal server error'});
    }
};

const remove = async (req, res) => {
    const {id} = req.params;

    try {
        const product = await deleteProduct(id)
        res.status(200).json(product);
    } catch (e) {
        res.status(500).json({msg: e.message || 'Internal server error'});
    }
}

export {index, store, fetch, update, remove};