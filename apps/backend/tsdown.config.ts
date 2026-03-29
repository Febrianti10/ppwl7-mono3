import { defineConfig } from "tsdown";

export default defineConfig({
  deps: {
    alwaysBundle: [
      "shared",
      "@prisma/adapter-libsql",
      "@libsql/client",
      "@libsql/core",
    ],
  },
});
