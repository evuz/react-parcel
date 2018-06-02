const fs = require('fs');
const path = require('path');

const indexPath = path.resolve(__dirname, '..', 'www', 'index.html'); 

readFile();

function readFile() {
    fs.readFile(indexPath, 'utf8', (err, html) => {
        if (err) {
            throw Error(err);
        }
        html = html.replace(/"\/src./g, '"src.');
        html = html.replace('<script', '<script type="text/javascript" src="cordova.js"></script> <script');
        html = html.replace('<head>', '<head><meta http-equiv="Content-Security-Policy" content="default-src \'self\' data: gap: https://ssl.gstatic.com \'unsafe-eval\'; style-src \'self\' \'unsafe-inline\'; media-src *; img-src \'self\' data: content:;"><meta name="format-detection" content="telephone=no"><meta name="msapplication-tap-highlight" content="no">')
        writeFile(html);
    })
}

function writeFile(txt) {
    fs.writeFile(indexPath, txt, (err) => {
        if (err) throw Error(err);
        console.log('index.html is ready!');
        process.exit();
    })
}