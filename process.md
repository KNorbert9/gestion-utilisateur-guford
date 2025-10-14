#### Processus de création d'un projet:


- Crée une branche pour le projet à faire via gitlab
- Copier et coller le contenu du template free angular de core ui dans le projet
- faire la commande `npm install` pour installer les dependances
- Copier et coller tout le contenu du dossier `./src` du `projet VBS Fret` sauf `./app` et `test.ts`
- Modifier le contenu du fichier "index.html" pour que sa soit conforme au project 
- Copier et coller le dossier "app" dans `./src` en supprimant tout sont contenue et ne garder que la definition de `app components` avec `app config` et `app routes` proprement.
- Copier et coller le dossier "layouts" dans `./src/app`
- Copier et coller le dossier `auth` dans `./src/app`
- Copier et coller le dossier `models` dans `./src`


- Copier la partie "scripts" et `svgGenerator` du `package.json` dans le fichier `package.json` du projet


- Pour installer les deps taper la commande:<br>
```bash
npm install @casl/ability @casl/angular @ng-select/ng-select @ngneat/content-loader @ngneat/svg-icon @ngneat/until-destroy @tanstack/angular-query-experimental @tanstack/angular-table class-variance-authority clsx d3 dayjs filesize framer-motion keycloak-angular keycloak-js@25.0.6 lodash lucide-angular moment motion ng2-pdf-viewer ngx-daterangepicker-bootstrap ngx-indexed-db ngx-sonner react smooth-scroll svgson tailwind-merge tailwindcss-animate tailwindcss-animated tippy.js
```

- Pour installer les deps de dev, taper la commande:
```bash
npm install --save-dev @commitlint/cli @commitlint/config-angular @ngneat/svg-generator @types/d3 @types/react @types/smooth-scroll autoprefixer husky miragejs postcss tailwindcss@^3.4.14
```

- Copier et coller le fichier `proxy.conf.json` dans `./src` et modifier les apis.

FIN GABARIT



