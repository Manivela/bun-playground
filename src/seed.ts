import { faker } from "@faker-js/faker";
import { client, db } from "./db";
import { user, type NewUser } from "./schema";
import { UniqueEnforcer } from "enforce-unique";

const uniqueEnforcerEmail = new UniqueEnforcer();

const password = faker.internet.password();
const hash = await Bun.password.hash(password);
function createRandomUser(): NewUser {
	const sex = faker.person.sexType();
	const firstName = faker.person.firstName(sex);
	const lastName = faker.person.lastName();
	const email = uniqueEnforcerEmail.enforce(() => {
		return faker.internet.email({ firstName, lastName });
	});

	return {
		email,
		firstName,
		lastName,
		password: hash,
		updatedAt: new Date(), // not supported on db level
	};
}
await db.delete(user);
await db
	.insert(user)
	.values([
		...Array.from({ length: 100 }).map(createRandomUser),
		{ ...createRandomUser(), role: "ADMIN" },
	]);

console.log("Seeding complete.");
console.log("Password for all users:", password);
client.end();
