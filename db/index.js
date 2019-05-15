const sqlite = require('sqlite');
const db = sqlite.open('./database.sqlite', { Promise });

exports.modules = { db };
