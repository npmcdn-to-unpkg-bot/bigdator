
CREATE TABLE combined(id SERIAL, date DATE, bu_code INTEGER, name varchar(255), dumps INTEGER, fillperc INTEGER, meldingen INTEGER);
CREATE TABLE reports(id SERIAL, name varchar(255), date DATE, identification INTEGER, description varchar(255), x FLOAT(6), y FLOAT(6));


\i database.sql
\copy combined(date, bu_code, name, dumps, fillperc, meldingen) FROM './data/combined.csv' DELIMITER ';' CSV;
\copy reports(name, date, identification, description, x, y) FROM './data/reports.csv' DELIMITER ';' CSV;