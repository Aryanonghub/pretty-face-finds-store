
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Get repo name from GitHub Pages URL for base path, if applicable
  const getBase = () => {
    if (process.env.GITHUB_REPOSITORY && mode === 'production') {
      return `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`;
    }
    return '/';
  };
  
  return {
    base: mode === 'production' ? getBase() : '/',
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
