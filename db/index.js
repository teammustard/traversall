'use strict';
const path = require('path');

const sqlite = require('sqlite');
const dbPromise = sqlite.open(path.join(__dirname, 'kontiki_zz.db'), { Promise });

module.exports = { dbPromise };
