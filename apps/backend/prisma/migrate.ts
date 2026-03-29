import { prisma } from "./db";
import { readFileSync } from "fs";
import { join } from "path";

// Membaca file SQL yang digenerate oleh Prisma
const sql = readFileSync(join(__dirname, "../baseline.sql"), "utf-8");

// Memecah file SQL menjadi perintah-perintah terpisah
const statements = sql
  .split(";")
  .map((s) => s.trim())
  .filter((s) => s.length > 0);

console.log("🚀 Memulai migrasi ke Turso...");

// Menjalankan setiap perintah SQL satu per satu ke Turso
for (const statement of statements) {
  try {
    await prisma.$executeRawUnsafe(statement);
  } catch (err) {
    console.error("❌ Gagal menjalankan statement:", statement);
    console.error(err);
  }
}

console.log("✅ Migrasi selesai!");
await prisma.$disconnect();
