
import passport from 'passport';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {db} from '../../config/db.js';
import {users} from '../../db/schema/users.js';

const register = async (req, res) => {
    try {
        const {name, username, password, email, phone} = req.body;
        const hashedpassword = await bcrypt.hash(password, 10);

        await db.insert(users).values({
           name,
           username,
           password: hashedpassword,
           email,
           phone
        }).execute();
        return res.status(200).json({success: true, message: 'User registered successfully.'});
    } catch (error) {
        return res.status(500).json({success: false, message: 'Failed to register user.'});
    }
};

const login = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res.status(500).json({message: 'Internal Server Error'});
        }
        if (!user) {
            return res.status(401).json({ message: info.message || 'Incorrect username or password.' });
        }
        const token = generateJWTToken(user)
        res.json({token});
    })(req, res, next);
};

const generateJWTToken = (user) => {
    const payload = {
        id: user.id,
        username: user.username,
        iss: process.env.APP_URL,
    };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};

export {register, login};