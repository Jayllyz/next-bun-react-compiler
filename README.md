# To reproduce the issue

```sh
bun install
bun run build
```

```
bun run build
$ next build
   ▲ Next.js 16.0.1 (Turbopack)
   - Experiments (use with caution):
     · serverActions
     ✓ turbopackFileSystemCacheForDev

   Creating an optimized production build ...

> Build error occurred
Error: Turbopack build failed with 1 errors:
./src/app/page.tsx
Error evaluating Node.js code
ResolveMessage: Cannot find module './node_modules/.bun/babel-plugin-react-compiler@1.0.0/node_modules/babel-plugin-react-compiler' from '/Users/jayllyz/code/my-app/node_modules/.bun/next@16.0.0+f98dd74b6b4c2783/node_modules/next/dist/compiled/babel/bundle.js'

Make sure that all the Babel plugins and presets you are using
are defined as dependencies or devDependencies in your package.json
file. It's possible that the missing plugin is loaded by a preset
you are using that forgot to add the plugin to its dependencies: you
can workaround this problem by explicitly adding the missing package
to your top-level package.json.


Import traces:
  Client Component Browser:
    ./src/app/page.tsx [Client Component Browser]
    ./src/app/page.tsx [Server Component]

  Client Component SSR:
    ./src/app/page.tsx [Client Component SSR]
    ./src/app/page.tsx [Server Component]


    at <unknown> (file. It's possible that the missing plugin is loaded by a preset)
    at processTicksAndRejections (null)
error: script "build" exited with code 1
```