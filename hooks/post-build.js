var fs = require('fs-extra');
var foldersToCopy = [
    { src: './i18n', dest: './dist/InstantRemit/assets/i18n' }
];

// copies directory, even if it has subdirectories or files
function copyDir(src, dest) {
    fs.copy(src, dest, function (err) {
        if (err) return console.error(err)
        console.log(src + ' folder successfully copied')
    });
}

for (var i = foldersToCopy.length - 1; i >= 0; i--) {
    copyDir(foldersToCopy[i].src, foldersToCopy[i].dest);
}