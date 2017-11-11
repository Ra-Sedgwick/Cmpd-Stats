COPY officer_shooting_incidents
FROM '/media/robert/Storage/Projects/cmpd-statistics/database/csv-files/CMPD_OfficerInvolved_Shootings__Incidents.csv'
DELIMITER ','
CSV HEADER

COPY officer_shooting_individuals
FROM '/media/robert/Storage/Projects/cmpd-statistics/database/csv-files/CMPD_OfficerInvolved_Shootings__Individuals.csv'
DELIMITER ','
CSV HEADER

COPY officer_shooting_officers
FROM '/media/robert/Storage/Projects/cmpd-statistics/database/csv-files/CMPD_OfficerInvolved_Shootings__Officers.csv'
DELIMITER ','
CSV HEADER

COPY traffic_stops
FROM '/media/robert/Storage/Projects/cmpd-statistics/database/csv-files/Officer_Traffic_Stops.csv'
DELIMITER ','
CSV HEADER

COPY demographics
FROM '/media/robert/Storage/Projects/cmpd-statistics/database/csv-files/CMPD_Employee_Demographics.csv'
DELIMITER ','
CSV HEADER