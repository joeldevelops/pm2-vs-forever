'use strict';

const fs = require('fs');
const cmd = require('child_process');

cmd.exec('start cmd.exe /K mongod --dbpath=./db');

cmd.exec('start cmd.exe /K node ./microservices/ms-express/ticketing/server.js');