'use strict';

const fs = require('fs');
const cmd = require('child_process');

cmd.spawn('mongod', ['--dbpath', '../../db']);

setTimeout(startServices, 1000);

function startServices() {
    fs.readdirSync(__dirname)
    .filter(file => {
        return file.indexOf('.') === -1; // filter out files.
    })
    .forEach(folder => { // only folders remain.
        if (folder === 'tests') return;

        cmd.fork(`./${folder}/server.js`);
    });
}
