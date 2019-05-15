const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./kontiki_zz.db', err => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the kontiki_zz database.');
});
