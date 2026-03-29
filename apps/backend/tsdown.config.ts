import { defineConfig } from "tsdown";

export default defineConfig({
  // external diletakkan di luar deps
  external: [
    "@libsql/client",
    "@libsql/core",
    "@prisma/client",
    "@prisma/adapter-libsql",
    "@libsql/win32-x64-msvc",
  ],
  deps: {
    alwaysBundle: ["shared"],
  },
});
