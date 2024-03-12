# Bun with Elysia, BiomeJS, Drizzle, PostgreSQL

## Getting Started
copy sample.env to .env:
```bash
cp sample.env .env
```
run postgresql with docker:
```bash
docker compose up -d
```
install packages:
```bash
bun install
```
migrate db:
```bash
bun db:migrate
```
seed db:
```bash
bun db:seed
```
start the development server:
```bash
bun dev
```

Open http://localhost:3000/users with your browser to see a list of seeded users.