
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import passport from 'passport';
import './config/passport.js';

import authRoutes from './domain/auth/route.js';
import productRoutes from './domain/product/route.js';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(passport.initialize());
app.use(bodyParser.json());

app.use('/api/v1/', authRoutes);
app.use('/api/v1/product', productRoutes);

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));