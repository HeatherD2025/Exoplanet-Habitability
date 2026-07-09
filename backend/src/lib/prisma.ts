import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Local dev: Docker Postgres (LOCAL_DATABASE_URL). Production / Supabase: DATABASE_URL.
const connectionString =
  process.env.LOCAL_DATABASE_URL?.trim() || process.env.DATABASE_URL?.trim();

if (!connectionString) {
  throw new Error('DATABASE_URL is missing. Check your .env file!');
}

// 2026 Best Practice: Initialize a Pool for better connection management
const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);

const prisma = globalThis.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma;
}

// Use named export 'prisma' alongside default for easier importing
export { prisma };
export default prisma;