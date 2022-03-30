#!/bin/bash
pushd portal-spa
npm i
npm run build -- --prod --base-href '/portal_spa' --output-hashing none
# rm -fr node_modules
popd
mv portal-spa/dist/portal-spa/*.js portal_spa/public/js
mv portal-spa/dist/portal-spa/*.css portal_spa/public/css
pushd ../..
bench build --app portal_spa
popd
