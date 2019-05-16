DROP TABLE IF EXISTS travel_styles;

create table travel_styles (
	id INT,
	name TEXT,
	description TEXT,
	logo VARCHAR(50),
	video VARCHAR(50)
);
insert into travel_styles (id, name, description, logo, video) values (1, 'dui maecenas tristique est', 'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.', 'http://dummyimage.com/100x100.png/ff4444/ffffff', 'http://dummyimage.com/400x300.png/dddddd/000000');
insert into travel_styles (id, name, description, logo, video) values (2, 'duis aliquam convallis nunc proin', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.', 'http://dummyimage.com/100x100.png/dddddd/000000', 'http://dummyimage.com/400x300.png/cc0000/ffffff');
insert into travel_styles (id, name, description, logo, video) values (3, 'viverra eget congue eget semper', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 'http://dummyimage.com/100x100.png/dddddd/000000', 'http://dummyimage.com/400x300.png/dddddd/000000');
insert into travel_styles (id, name, description, logo, video) values (4, 'luctus et ultrices posuere cubilia', 'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.', 'http://dummyimage.com/100x100.png/ff4444/ffffff', 'http://dummyimage.com/400x300.png/5fa2dd/ffffff');
insert into travel_styles (id, name, description, logo, video) values (5, 'id nulla ultrices aliquet maecenas', 'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.', 'http://dummyimage.com/100x100.png/5fa2dd/ffffff', 'http://dummyimage.com/400x300.png/cc0000/ffffff');
insert into travel_styles (id, name, description, logo, video) values (6, 'commodo vulputate justo in blandit', 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.', 'http://dummyimage.com/100x100.png/cc0000/ffffff', 'http://dummyimage.com/400x300.png/5fa2dd/ffffff');