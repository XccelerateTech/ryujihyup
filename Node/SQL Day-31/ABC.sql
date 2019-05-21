/*A*/
CREATE TABLE stock (
    id SERIAL primary key,
    fruit VARCHAR(255) not null,
    description VARCHAR(255),
    quantity integer,
    price decimal
);

/*B*/
DROP TABLE stock;

/*C*/
/*1*/
SELECT first_name, last_name FROM company WHERE salary > 5000 AND salary < 11000;
/*2*/
SELECT first_name, last_name FROM company WHERE contract_length < 2;
/*3*/
INSERT INTO company (first_name, last_name, salary, contract_length) VALUES ('James', 'Bond', 70000, 6);
INSERT INTO company (first_name, last_name, salary, contract_length) VALUES ('Wilson', 'Football', 4, 1);
/*4*/
UPDATE company SET salary = 8000, contract_length = 2 WHERE first_name = 'Nancy';
/*5*/
SELECT * FROM company ORDER BY salary DESC;