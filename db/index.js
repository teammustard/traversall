'use strict';

const sqlite = require('sqlite');
const dbPromise = sqlite.open('./db/kontiki_zz.db', { Promise });

module.exports = { dbPromise };
