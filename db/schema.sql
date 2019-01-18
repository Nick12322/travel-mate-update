DROP DATABASE IF EXISTS `travel_mateDB`;
CREATE DATABASE `travel_mateDB`;

USE `travel_mateDB`;

CREATE TABLE register
(
	id int NOT NULL AUTO_INCREMENT,
    name VARCHAR (255) NOT NULL,
	email VARCHAR (50) NOT NULL,
	password VARCHAR (255) NOT NULL,
	handle VARCHAR (50) NOT NULL,
    location VARCHAR (255) NOT NULL,
    interests TEXT,
	activities TEXT,
	aboutYou MEDIUMTEXT,
	profilePhoto MEDIUMTEXT,
	coverPhoto MEDIUMTEXT,
	host BOOLEAN,
	hostee BOOLEAN,
	PRIMARY KEY (id)
);

INSERT INTO register (name, email, password, handle, location, interests, activities, aboutYou, profilePhoto, coverPhoto, host, hostee)
VALUES ('Brad Stevens', 'bstevens@hotmail.com', 'password', 'bradS', 'Paris', 'Sports, Outdoors, Night Scene', 'Dancing, playing soccer', 'Excited to start a new adventure with you!', 'https://images.pexels.com/photos/45882/man-crazy-funny-dude-45882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.unsplash.com/photo-1495401246624-593eb4b920ba?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d8257fb59fbb7007ed2c200404795641&auto=format&fit=crop&w=800&q=60', false, true),
('Simon Robben', 'srobben@gmail.com', 'password', 'simonR', 'San Diego', 'Video games, music', 'Playing board games, racecars', 'Looking forward to something new!', 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.unsplash.com/photo-1504660069764-2b37e279874a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7945a4d590c31ea4887f50ab42dd6d17&auto=format&fit=crop&w=800&q=60', true, false);
