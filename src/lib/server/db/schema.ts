import { sqliteTable, index, text, integer } from 'drizzle-orm/sqlite-core';
import type { InferSelectModel } from "drizzle-orm";


export const user = sqliteTable('user', {
	id: text('id').primaryKey(),
	age: integer('age'),
	username: text('username').notNull().unique(),
	passwordHash: text('password_hash').notNull()
});

export const session = sqliteTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull()
});

//----------------------------

export const albums = sqliteTable("albums", {
	albumId: integer("AlbumId")
		.primaryKey({ autoIncrement: true })
		.notNull(),
	title: text("Title", { length: 160 })
		.notNull(),
	artistId: integer("ArtistId")
		.notNull()
		.references(() => artists.artistId),
},
	(table) => [
		index("IFK_AlbumArtistId")
			.on(table.artistId),
	]);

export const artists = sqliteTable("artists", {
	artistId: integer("ArtistId")
		.primaryKey({ autoIncrement: true })
		.notNull(),
	name: text("Name", { length: 120 }),
	email: text('Email',{length:100})
});


export type Session = typeof session.$inferSelect;
export type User = typeof user.$inferSelect;
//Два варианта
export type Artist = InferSelectModel<typeof artists>;
export type Album = InferSelectModel<typeof albums>;