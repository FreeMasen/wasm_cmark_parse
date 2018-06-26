const path = require('path');

module.exports = {
    entry: "./wasm_cmark_parse.js",
    output: {
        path: path.resolve(__dirname, 'pkg'),
        filename: 'wasm_cmark_parse.js',
        library: 'wasm_cmark_parse'
    },
    mode: 'development',
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.wasm']
    }
}