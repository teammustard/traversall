const fs = require('fs');

// This resets all tables and is not meant to be used every time the server starts
// This module is used purely for testing and not used in the actual server or the component in any way
module.exports.createTables = fs.readFileSync('./db/seed_data/createTables.sql').toString();
