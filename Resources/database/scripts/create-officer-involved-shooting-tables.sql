-- DROP TABLE officer_shooting_individuals;
-- DROP TABLE officer_shooting_officers;
-- DROP TABLE officer_shooting_incidents;
-- DROP TABLE traffic_stops
-- DROP TABLE demographics


CREATE TABLE officer_shooting_incidents
(
  incident_id		integer		NOT NULL,
  year_month		text,
  location		text,
  da_legal_review	text,
  narrative		text,
  id			integer		NOT NULL 	PRIMARY KEY,
  year			integer,
  month			integer,
  latitude		numeric,
  longitude		numeric,
  creation_date		date,
  creator		text,
  edit_date		date,
  editor		text	
);

CREATE TABLE officer_shooting_individuals
(
  incident_id		integer		NOT NULL,
  race			text,
  gender		text,
  age			integer,
  injury_type		text,
  id			integer		NOT NULL	PRIMARY KEY,
  year			integer,
  latitude		numeric,
  longitude		numeric,
  creation_date		date,
  creator		text,
  edit_date		date,
  editor		text	
);

CREATE TABLE officer_shooting_officers
(
  incident_id		integer		NOT NULL,
  race			text,
  gender		text,
  experience_years	numeric,
  policy_violation	text,
  id			integer		NOT NULL	PRIMARY KEY,
  year			numeric,
  latitude		numeric,
  longitude		numeric,
  creation_date		date,
  creator		text,
  edit_date		date,
  editor		text
);

CREATE TABLE traffic_stops
(
  year_month			text,
  reason			text,
  officer_race			text,
  officer_gender		text,
  officer_experiance_years	integer,
  driver_race			text,
  driver_ethnicity		text,
  driver_gender			text,
  driver_age			integer,
  search_conducted		text,
  result			text,
  cmpd_division			text,
  id				integer 	NOT NULL	PRIMARY KEY,
  creation_date			date,
  creator			text,
  edit_date			date,
  editor			text
);

CREATE TABLE demographics
(
  job_title		text,
  experiance_years	numeric,
  age			integer,
  gender		text,
  race			text,
  id			integer		NOT NULL	PRIMARY KEY,
  creation_date		date,
  creator		text,
  edit_date		date,
  editor		text  
);






