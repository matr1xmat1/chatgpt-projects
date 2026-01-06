# Inbox Control Center

This monorepo contains:

- `apps/web`: Next.js frontend
- `apps/api`: Express API
- `packages/shared`: shared TypeScript types

## Prerequisites

- Node.js 18+ (or 20+ recommended)
- npm 9+
- Docker (for Postgres + Redis)

## Local setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start Postgres + Redis**

   ```bash
   docker compose up -d
   ```

3. **Run the API**

   ```bash
   npm run -w @bulk-unsub/api dev
   ```

   The API will start at `http://localhost:4000`.

   Available endpoints:

   - `GET /health`
   - `GET /providers`
   - `POST /gmail/sync`
   - `POST /unsubscribe`

4. **Run the web app**

   ```bash
   npm run -w @bulk-unsub/web dev
   ```

   The web app will start at `http://localhost:3000`.

## Common scripts

From the repo root:

- `npm run dev` — run all workspace dev scripts
- `npm run build` — build all workspaces
- `npm run typecheck` — typecheck all workspaces

## Notes

- If `npm install` fails due to registry restrictions, ensure your environment allows access to `registry.npmjs.org` or configure your npm registry/proxy accordingly.
- Gmail OAuth, sync, and unsubscribe automation are stubbed and will be implemented in subsequent steps.
