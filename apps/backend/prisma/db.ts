import { PrismaLibSql } from "@prisma/adapter-libsql";
import { PrismaClient } from "../src/generated/prisma/client";

// Konfigurasi adapter agar Prisma bisa "ngobrol" dengan Turso
const adapter = new PrismaLibSql({
  url: process.env.DATABASE_URL!,
  authToken: process.env.DB_AUTH_TOKEN,
});

// Export prisma agar bisa dipakai di file index.ts atau seeder
export const prisma = new PrismaClient({ adapter });
