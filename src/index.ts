import { Elysia } from "elysia";
import { user } from "./schema";
import { db } from "./db";
import { getTableColumns } from "drizzle-orm";

const app = new Elysia()
	.get("/", () => "Hello Elysia")
	.get("/users", async () => {
		const { password, ...nonPwCols } = getTableColumns(user);
		const users = await db.select(nonPwCols).from(user);
		return users;
	})
	.listen(3000);

console.log(
	`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`,
);
