import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const configuredSiteUrl =
    process.env.VITE_SITE_URL ?? env.VITE_SITE_URL ?? "";
  const usesProjectPagesUrl =
    configuredSiteUrl === "" ||
    configuredSiteUrl.includes("github.io/hidden-cove-adventures");
  const isProjectGitHubPages =
    process.env.GITHUB_ACTIONS === "true" && usesProjectPagesUrl;

  return {
    base: isProjectGitHubPages ? "/hidden-cove-adventures/" : "/",
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
    },
  };
});
