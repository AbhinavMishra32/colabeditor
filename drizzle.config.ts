import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

if (!process.env.DATABASE_URL) {
    console.log('Cannot find database url in .env file');
}

// export default {
//     schema: './src/lib/supabase/schema.ts',
//     out: './migrations',
//     driver: 'pg',
//     dbCredentials: {
//         connectionString: process.env.DATABASE_URL,
//     }
// } satisfies Config;

export default {
    dialect: 'postgresql',
    // driver: 'pglite',
    schema: './src/lib/supabase/schema.ts',
    out: './migrations',
    dbCredentials: {
        url: process.env.DATABASE_URL as string || '',
    },
} satisfies Config;