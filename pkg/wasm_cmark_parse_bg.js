const bytesScript =
`const join = require('path').join;
require('fs').readFileSync(join(__dirname, 'wasm_cmark_parse_bg.wasm'));`

module.exports = resolve();
function resolve() {
    if (typeof self === 'object') {
        return require('./wasm_cmark_parse_bg.wasm');
    } else {
        let imports = {};
        imports['./wasm_cmark_parse'] = require('./wasm_cmark_parse.js');
        const bytes = eval(bytesScript);
        const wasmModule = new WebAssembly.Module(bytes);
        return new WebAssembly.Instance(wasmModule, imports).exports;
    }
}