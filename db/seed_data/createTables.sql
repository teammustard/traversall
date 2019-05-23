DROP TABLE IF EXISTS countries;

CREATE TABLE countries (id INTEGER PRIMARY KEY, country_code TEXT NOT NULL, full_name TEXT NOT NULL);

DROP TABLE IF EXISTS tour_countries;

create table tour_countries (
	id INT,
	tour_id INT,
	country_id INT
);

DROP TABLE IF EXISTS tours;

create table tours (
	id INT,
	name TEXT,
	starting_loc TEXT,
	ending_loc TEXT,
	duration INT,
	travel_style INT,
	listed_price INT,
	tagline TEXT,
	description TEXT,
	video TEXT,
	hashtag TEXT,
	accommodation_summary TEXT,
	accommodation_detail TEXT,
	breakfast_included INT,
	lunch_included INT,
	dinner_included INT,
	meals_detail TEXT,
	team_summary TEXT,
	team_detail TEXT,
	transport_summary TEXT,
	transport_detail TEXT,
	experiences_included INT,
	experiences_optional INT,
	experiences_detail TEXT
);

DROP TABLE IF EXISTS travel_styles;

create table travel_styles (
	id INT,
	name TEXT,
	description TEXT,
	logo TEXT,
	video TEXT
);

DROP TABLE IF EXISTS trips;

create table trips (
	id INT,
	tour_id INT,
	start_date DATE,
	end_date INT,
	start_time TEXT,
	end_time TEXT,
	capacity INT,
	booked INT,
	discount INT
);