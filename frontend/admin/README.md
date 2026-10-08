How to install and run?
1. Clone the repo
2. Navigate to frontend/admin folder and write pnpm install in the terminal and hit enter
3. To run the project write pnpm dev and hit enter in the terminal

Scripts Overview


Frontend folder structure

frontend/
  core/
    src/auth/types.ts
  admin/
    index.html
    package.json
    tsconfig.json
    vite.config.ts
    eslint.config.js
    .prettierrc
    .env.example
    README.md
    src/
      main.tsx
      vite-env.d.ts
      app/
        App.tsx
        router.tsx
      pages/
        Home.tsx
        LoginPage.tsx
        NotFound.tsx