# Nova Learn

Academic resource navigation platform for engineering students.

## Tech
- Frontend: Next.js 15 (App Router) + TypeScript + TailwindCSS + Framer Motion
- Backend: Express + TypeScript + PostgreSQL (schema-ready)

## Repo layout
- `/frontend` - Next.js web app
- `/backend` - Express API + admin auth + resource CRUD

## Quick start
1. Copy env templates:
   - `cp backend/.env.example backend/.env`
   - `cp frontend/.env.example frontend/.env`

2. Install dependencies:
   - `cd backend && npm i`
   - `cd frontend && npm i`

3. Run:
   - `cd backend && npm run dev`
   - `cd frontend && npm run dev`

## Admin
- Admin is non-public.
- Use `/admin/login` in the frontend.
- Backend endpoints under `/api/admin/*` require JWT.

## Notes
This is an MVP scaffold focused on production-like structure and scalability.

