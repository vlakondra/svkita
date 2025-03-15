CREATE TABLE `albums` (
	`AlbumId` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`Title` text(160) NOT NULL,
	`ArtistId` integer NOT NULL,
	FOREIGN KEY (`ArtistId`) REFERENCES `artists`(`ArtistId`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE INDEX `IFK_AlbumArtistId` ON `albums` (`ArtistId`);--> statement-breakpoint
CREATE TABLE `artists` (
	`ArtistId` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`Name` text(120),
	`Email` text(100)
);
--> statement-breakpoint
CREATE TABLE `session` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`expires_at` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` text PRIMARY KEY NOT NULL,
	`age` integer,
	`username` text NOT NULL,
	`password_hash` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_username_unique` ON `user` (`username`);