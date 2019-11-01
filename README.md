## Portal Spa

Portal Single Page Application

## Angular SPA

`www/portal_spa` has index.html which serves angular assets
`portal-spa` has angular nodejs source code

Test, Format, Lint

```sh
npm run test
npm run e2e
npm run lint
npm run format:check
```

### Development

before starting the Angular development, start bench and sites with `portal_spa` app installed

```sh
cd apps/portal_spa/portal-spa
npm i
npm run start
```

- http://testportalspa.localhost:8000 should have running frappe/bench site
- http://testportalspa.localhost:4200 serves angular SPA and proxies to frappe/bench site

### Production

```sh
# from frappe-bench directory

bench get-app https://github.com/castlecraft/portal_spa

# optional to install erpnext
bench new-site testportalspa.localhost --install-app erpnext

bench --site testportalspa.localhost install-app portal_spa

cd apps/portal_spa
./build-spa.sh

cd ../.. # back to frappe-bench
```

This will -

- build angular app
- copy css to public/css
- copy js to public/js
- `bench build` (for creating symlink to directory)

#### License

MIT
