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
    interests VARCHAR(255),
	activities VARCHAR(255),
	aboutYou VARCHAR(255), 
	profilePhoto VARCHAR(255),
	coverPhoto VARCHAR(255),
	host BOOLEAN,
	hostee BOOLEAN,
	PRIMARY KEY (id)
);