const fs = require('fs');

// This resets all tables and is not meant to be used every time the server starts
module.exports.createTables = fs.readFileSync('./db/seed_data/createTables.sql').toString();
