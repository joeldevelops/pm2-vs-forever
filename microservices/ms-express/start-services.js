'use strict';

const fs = require('fs');
const cmd = require('child_process');

fs.readdirSync('./')
.filter(file => {
    return file.indexOf('.') === -1; // filter out files.
})
.forEach(folder => {
    cmd.exec(`start cmd.exe /K node ./${folder}/server.js`);
});