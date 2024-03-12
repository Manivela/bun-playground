import { text, timestamp, pgTable, pgEnum } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";

export const userRoleEnum = pgEnum("userRole", ["ADMIN", "USER"]);

export const user = pgTable("user", {
	id: text("id")
		.$defaultFn(() => createId())
		.primaryKey(),
	firstName: text("firstName"),
	lastName: text("lastName"),
	email: text("email").notNull(),
	password: text("password").notNull(),
	role: userRoleEnum("userRole").default("USER"),
	createdAt: timestamp("created_at").defaultNow(),
	updatedAt: timestamp("updated_at").defaultNow(),
});

export type User = typeof user.$inferSelect;

// Use Omit to exclude fields for NewUser that are automatically generated
export type NewUser = Omit<
	typeof user.$inferInsert,
	"id" | "createdAt" | "role"
>;
