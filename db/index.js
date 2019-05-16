'use strict';

const sqlite = require('sqlite');
const dbPromise = sqlite.open('./db/kontiki_zz.db', { Promise });

module.exports = { dbPromise };

// const Sequelize = require('sequelize');

// const sequelize = new Sequelize({
// 	dialect: 'sqlite',
// 	storage: './kontiki_zz.db'
// });

// sequelize.authenticate().then(
// 	function(err) {
// 		console.log('Connection has been established successfully.');
// 	},
// 	function(err) {
// 		console.log('Unable to connect to the database:', err);
// 	}
// );

// const Tour = sequalize.define('tours', {
// 	name: Sequelize.STRING,
// 	starting_loc: Sequelize.STRING,
// 	ending_loc: Sequelize.STRING,
// 	duration: Sequelize.INTEGER,
// 	travel_style: Sequelize.INTEGER,
// 	listed_price: Sequelize.INTEGER,
// 	tagline: Sequelize.TEXT,
// 	description: Sequelize.TEXT,
// 	video: Sequelize.TEXT,
// 	hashtag: Sequelize.STRING,
// 	accommodation_summary: Sequelize.TEXT,
// 	accommodation_detail: Sequelize.TEXT,
// 	breakfast_included: Sequelize.INT,
// 	lunch_included: Sequelize.INT,
// 	dinner_included: Sequelize.INT,
// 	meals_detail: Sequelize.TEXT,
// 	team_summary: Sequelize.TEXT,
// 	team_detail: Sequelize.TEXT,
// 	transport_summary: Sequelize.TEXT,
// 	transport_detail: Sequelize.TEXT,
// 	experiences_included: Sequelize.INTEGER,
// 	experiences_optional: Sequelize.INTEGER,
// 	experiences_detail: Sequelize.TEXT
// });
