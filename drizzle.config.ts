
import 'dotenv/config';
import type {Config} from 'drizzle-kit';

const host = process.env.DB_HOST ?? 'localhost';
const port = process.env.DB_PORT ?? '5432';
const database = process.env.DB_DATABASE ?? 'your_database';
const username = process.env.DB_USERNAME ?? 'your_username';
const password = process.env.DB_PASSWORD ?? 'your_password';

const connectionString = `postgresql://${username}:${password}@${host}:${port}/${database}`;

const config: Config = {
    schema: './src/db/schema/*',
    out: './src/db/migrations',
    driver: 'pg',
    dbCredentials: {
        connectionString: connectionString
    },
}

export default config;