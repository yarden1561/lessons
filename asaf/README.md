# asaf

## I am not good at READMEs

...but this is an Nx monorepo now, so one `node_modules` serves every lesson.

## Layout

```
asaf/
├── package.json          # npm workspaces + nx
├── nx.json
├── node_modules/         # the only one
├── 7-9-26/my-first-react     -> my-first-react-7-9-26   (port 5173)
└── 14-9-26/my-second-react   -> my-second-react-14-9-26 (port 5174)
```

Each lesson app is an npm workspace. Its package name is `<folder>-<date>`, so
both lessons can be installed and run at the same time.

## Running

From this folder:

```bash
npx nx dev my-second-react-14-9-26
```

Or from inside the lesson folder, as usual:

```bash
npm run dev
```

Both apps at once:

```bash
npx nx run-many -t dev
```

## Adding next week's lesson

1. Create `DD-M-YY/<app-name>/` (copy a previous lesson, without `node_modules`).
2. Set its `package.json` name to `<app-name>-DD-M-YY`.
3. Give it a free port in `vite.config.js`.
4. Add `"DD-M-YY/*"` to `workspaces` in the root `package.json`.
5. Run `npm install` from this folder.
