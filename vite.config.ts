import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dns from "dns";
import viteTsconfigPaths from "vite-tsconfig-paths";

dns.setDefaultResultOrder("verbatim");

export default defineConfig({ 
    plugins: [react(), viteTsconfigPaths()],
    server: {
      port: 3000,
      host: "localhost",
      open: true
    }
  }
);
