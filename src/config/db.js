
import dotenv from 'dotenv';

dotenv.config();

import {drizzle} from 'drizzle-orm/node-postgres';
import pkg from 'pg';

const {Client} = pkg;

const host = process.env.DB_HOST ?? 'localhost';
const port = process.env.DB_PORT ?? '5432';
const username = process.env.DB_USERNAME ?? 'your_username';
const password = process.env.DB_PASSWORD ?? 'your_password';
const database = process.env.DB_DATABASE ?? 'your_database';

const connectionString = `postgresql://${username}:${password}@${host}:${port}/${database}`;

const client = new Client({
    connectionString: connectionString,
});

await client.connect();

export const db = drizzle(client);