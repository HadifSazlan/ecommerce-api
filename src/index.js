
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import userRoutes from './domain/user/route.js';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/api/v1/user', userRoutes);

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));