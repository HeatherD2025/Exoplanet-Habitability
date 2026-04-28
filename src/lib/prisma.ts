import { PrismaClient } from '../../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Optimization: Use the Pooler for the application logic
const connectionString = process.env.DATABASE_URL;

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