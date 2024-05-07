
import {
    findAllUsers, 
    addUser, 
    findOneUser, 
    updateUser, 
    deleteUser
} from './queries.js';

const index = async (req, res) => {
    try {
        const users = await findAllUsers()
        res.status(200).json(users);
    } catch (e) {
        res.status(500).json({msg: e.message || 'Internal server error'});
    }
};

const store = async (req, res) => {
    const {name, username, password, email, phone} = req.body;

    const data = {name, username, password, email, phone}
    try {
        const user = await addUser(data)
        res.status(200).json(user)
    } catch (e) {
        res.status(500).json({msg: e.message || 'Internal server error'});
    }
};

const fetch = async (req, res) => {
    const {id} = req.params;

    try {
        const user = await findOneUser(id)
        res.status(200).json(user);
    } catch (e) {
        res.status(500).json({msg: e.message || 'Internal server error'});
    }
};

const update = async (req, res) => {
    const {id} = req.params;
    const {name, username, password, email, phone} = req.body;

    const data = {name, username, password, email, phone}

    try {
        const user = await updateUser(data, id)
        res.status(200).json(user);
    } catch (e) {
        res.status(500).json({msg: e.message || 'Internal server error'});
    }
};

const remove = async (req, res) => {
    const {id} = req.params;

    try {
        const user = await deleteUser(id)
        res.status(200).json(user);
    } catch (e) {
        res.status(500).json({msg: e.message || 'Internal server error'});
    }
}

export {index, store, fetch, update, remove};