const path = require('path');
const fs = require('fs');
const md_parser = require('wasm_cmark_parse');

function readMDFile(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, contents) => {
            if (err) return reject(err);
            if (typeof contents != 'string') contents = contents.toString();
            resolve(contents);
        });
    });
}

function writeHTMLFile(file, contents) {
    return new Promise((res, rej) => {
        fs.writeFile(file, contents, err => {
            if (err) return rej(err);
            res();
        });
    });
}

function parseArgs() {
    let args = process.argv;
    if (args[2] == 'h' ||  args[2] == '--help') {
        printHelp();
        process.exit();
    }
    let ret = ['', ''];
    for (var i = 2; i < args.length; i += 2) {
        if (i >= args.length) break;
        if (args[i] == '-i' || args[i] == '--input') {
            let inputPath = path.resolve(args[i+1])
            ret[0] = inputPath;
        }
        if (args[i] == '-o' || args[i] == '--output') {
            let outputPath = path.resolve(args[i+1]);
            ret[1] = outputPath;
        }
    }
    if (ret[0] == '' || ret[1] == '') {
        console.error('input and output arguments are required');
        printHelp();
        process.exit();
    }
    return ret;
}

function printHelp() {
    console.log('node ./index.js -i|--input [input path] -o|--output [output path]');
}

async function main() {
    let args = parseArgs();
    try {
        let md = await readMDFile(args[0]);
        let html = md_parser.parse_markdown(md);
        await writeHTMLFile(args[1], html);
    } catch (e) {
        return console.error('Error processing markdown to html\n', e);
    }
    console.log('Successfully processed markdown to html');
}
main();
