# Deployment to GitHub Pages

This guide will walk you through deploying the osw-community-website to GitHub Pages.

## 1. Install `gh-pages`

First, you need to install the `gh-pages` package as a dev-dependency.

```bash
npm install gh-pages --save-dev
```

## 2. Update `package.json`

You need to add a `homepage` field and `predeploy` and `deploy` scripts to your `package.json`.

Open `package.json` and add the `homepage` field. Replace `<your-github-username>` with your actual GitHub username.

```json
{
  "homepage": "https://<your-github-username>.github.io/osw-helloworld-website",
  "name": "vite_react_shadcn_ts",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
    "build:dev": "vite build --mode development",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  // ... rest of the file
}
```

## 3. Update `vite.config.ts`

You need to set the `base` option in your `vite.config.ts` to the name of your repository.

Open `vite.config.ts` and add the `base` property:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/osw-helloworld-website/", // Add this line
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
```

## 4. Deploy

Now you can deploy your website by running the following command:

```bash
npm run deploy
```

This command will create a `gh-pages` branch on your repository and push the contents of the `dist` folder to it.

## 5. Configure GitHub Pages

The final step is to configure your repository on GitHub to use the `gh-pages` branch for GitHub Pages.

1.  Go to your repository on GitHub.
2.  Click on the "Settings" tab.
3.  In the left sidebar, click on "Pages".
4.  Under "Build and deployment", for the "Source", select "Deploy from a branch".
5.  Under "Branch", select the `gh-pages` branch and the `/(root)` folder.
6.  Click "Save".

Your website should now be live at the URL you specified in the `homepage` field in `package.json`.
