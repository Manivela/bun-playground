CREATE TABLE IF NOT EXISTS "user" (
	"id" text PRIMARY KEY NOT NULL,
	"firstName" text,
	"lastName" text,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"role" text DEFAULT 'USER',
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
