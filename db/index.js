'use strict';
const path = require('path');

const sqlite = require('sqlite');
const dbPromise = sqlite.open(path.join(__dirname, 'traversall.db'), {
  Promise
});

module.exports = { dbPromise };
