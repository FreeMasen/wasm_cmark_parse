# Wasm CMark Parse

A Wasm based wrapper around the rust package [pulldown-cmark](https://crates.io/crates/pulldown-cmark).

There is one entry point for this module `parse_markdown`.
This function takes a CommonMark formatted `string` and returns a valid HTML `string`.

This package can be used from either NodeJS or in the browsers. To see it working you can try running either of the projects in the example folder, after cloning the repository.

## NodeJS
This project will read in a markdown file and write it to an HTML file an example markdown file called `in.md` in that folder. To see it in action simply run the following commands.

```shell
cd ./examples/node
npm i
npm start
```

If you wanted to adjust the output you could either adjust the contents of `in.md` or you could run the command manually with the following.

```shell
node ./index.js -i [path to md file] -o [output path]
```

## Browser
This project is a simple web form with one `textarea` element. Adding markdown into this input will update the left half of the page with the generated HTML.

To run this project you will also run the following

```shell
cd ./examples/browser
npm i
npm start
```

This will use `webpack-dev-server` to compile the project and spin up a local server. Typically the application can be loaded at [http://localhost:8080](http://localhost:8080), though the console will tell you what port it is actually available on.

The `md` parsing is on a timeout that will update shortly after your last key press.