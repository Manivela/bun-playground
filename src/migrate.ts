import { migrate } from "drizzle-orm/node-postgres/migrator";
import { client, db } from "./db";

await migrate(db, { migrationsFolder: "drizzle" });
client.end();
