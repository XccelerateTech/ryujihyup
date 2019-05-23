CREATE TABLE stock (
id SERIAL not null,
quantity INT not null,
price DECIMAL(4,2) not null,
citrus_id INT not null
);

INSERT INTO stock (quantity, price, citrus_id) VALUES (33, 25, 1);
INSERT INTO stock (quantity, price, citrus_id) VALUES (50, 15, 2);
INSERT INTO stock (quantity, price, citrus_id) VALUES (10, 35, 3);
INSERT INTO stock (quantity, price, citrus_id) VALUES (0, 20, 4);

SELECT * FROM stock;

CREATE TABLE citrus (
id SERIAL not null,
name VARCHAR(20) not null,
color VARCHAR(20) not null,
taste VARCHAR(20) not null
);

INSERT INTO citrus (name, color, taste) VALUES ('lemon', 'yellow', 'sour');
INSERT INTO citrus (name, color, taste) VALUES ('orange', 'orange', 'juicy');
INSERT INTO citrus (name, color, taste) VALUES ('grapefruit', 'orange', 'bitter');
INSERT INTO citrus (name, color, taste) VALUES ('lime', 'green', 'sour');

SELECT * FROM citrus;

/*A*/
SELECT citrus.color AS citrus_color, stock.quantity AS stock_quantity 
FROM citrus
JOIN stock
ON citrus.id = stock.citrus_id;

/*B*/
SELECT * FROM citrus FULL OUTER JOIN stock ON citrus.id = stock.citrus_id;
