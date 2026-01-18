import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { readFileSync } from "fs";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  base: import.meta.env.VITE_BASE_PATH,
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "root-redirect-plugin",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          // Serve under-construction.html at root
          if (req.url === "/") {
            const htmlPath = resolve(
              __dirname,
              "public/under-construction.html",
            );
            try {
              const html = readFileSync(htmlPath, "utf-8");
              res.setHeader("Content-Type", "text/html");
              res.end(html);
              return;
            } catch (error) {
              console.error("Error reading under-construction.html:", error);
            }
          }
          next();
        });
      },
    },
  ],
});
