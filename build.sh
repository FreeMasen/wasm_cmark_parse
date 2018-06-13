#! /bin/sh

mkdir ./pkg

wasm-pack init --target nodejs

cp -r ./pkg ./pkg-browser

rm ./pkg-browser/*.js
rm ./pkg-browser/*.wasm
rm ./pkg-browser/*.ts

wasm-bindgen ./target/wasm32-unknown-unknown/release/wasm_cmark_parse.wasm --out-dir ./pkg-browser

# need to deal with package names....