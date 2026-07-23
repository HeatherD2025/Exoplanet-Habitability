import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Prioritize DATABASE_URL (Supabase), fallback to LOCAL_DATABASE_URL for local Docker dev
const connectionString = process.env.DATABASE_URL?.trim() || process.env.LOCAL_DATABASE_URL?.trim();

if (!connectionString) {
  throw new Error("Neither DATABASE_URL nor LOCAL_DATABASE_URL is set!");
}

// Check if connecting to Supabase or cloud
const isSupabase = connectionString.includes("supabase.co") || connectionString.includes("supabase.com");

// Configure pg.Pool with explicit SSL settings for Supabase
const pool = new pg.Pool({
  connectionString,
  ssl: isSupabase
    ? {
        rejectUnauthorized: false, // Bypasses self-signed / intermediate proxy cert chain checks
      }
    : false,
});

// Log pool errors to catch connection drops
pool.on("error", (err) => {
  console.error("Unexpected error on idle pg client", err);
});

const adapter = new PrismaPg(pool);

const prisma = globalThis.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}

export { prisma };
export default prisma;