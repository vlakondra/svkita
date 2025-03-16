import { defineConfig } from 'drizzle-kit';

if (!process.env.DATABASE_URL) throw new Error('DRIZZLE не сконфигурирован');

export default defineConfig({
	///'./src/lib/server/db/schema.ts',
	schema: process.env.SCHEMA_PATH,

	dbCredentials: {
		// url: "src/lib/server/db/auth.db"
		url: process.env.DATABASE_URL,
	},

	verbose: true,
	strict: true,
	dialect: 'sqlite'
});
