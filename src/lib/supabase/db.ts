import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as dotenv from 'dotenv';
import * as schema from '../../../migrations/schema';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import path from 'path';
dotenv.config({ path: '.env' });

//#region Drizzle Config
if (!process.env.DATABASE_URL) {
    console.log('Cannot find database url in .env file');
}

const client = postgres(process.env.DATABASE_URL as string, { max: 1 });
const db = drizzle(client, schema);
const migrateDb = async () => {
    try {
        console.log('Migrating database...');
        const migrationsFolder = path.resolve(process.cwd(), 'migrations');
        await migrate(db, { migrationsFolder });
        console.log('Successfully Migrated');
    }
    catch (error) {
        console.error('Error Migrating client: ', error);
    }
};
migrateDb().catch((error) => console.error(error));
export default db;