// database.ts
import { openDatabaseSync } from 'expo-sqlite';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import * as schema from '@/db/schema';
import { DATABASE_NAME } from '@/app/_layout';


// Open or create the SQLite database
const expoDb = openDatabaseSync(DATABASE_NAME);

// Initialize Drizzle ORM with the database and schema
const db = drizzle(expoDb, { schema });

export default db;
