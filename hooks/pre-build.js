const fs = require('fs-extra')
const jsonConcat = require('json-concat');

function setEnvironment(configPath, environment) {
    fs.writeJson(configPath, { env: environment },
        function () {
            console.log('\x1b[33m', 'Environment variable set to ' + environment);
        });
}

function mergeAndSaveJsonFiles(rootPth, dest) {
    fs.readdir(rootPth, (err, files) => {
        const localizationSourceFiles = files;
        console.log('local 118 files', localizationSourceFiles);
        const src = localizationSourceFiles.map(x => rootPth + x);
        console.log('Root path added for all files!', src);
        jsonConcat({ src: src, dest: dest },
            function (res) {
                console.log('Localization files successfully merged!');
            }
        );
    });
}

// Set environment to development
setEnvironment('./config/env.json', 'production');

// Merge all localization files into one
mergeAndSaveJsonFiles('./i18n/en/', './i18n/en.json');
mergeAndSaveJsonFiles('./i18n/ar/', './i18n/ar.json');
