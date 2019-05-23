BEGIN;
UPDATE stock
SET quantity = quantity + 20
FROM citrus
WHERE stock.citrus_id = citrus.id AND name = 'lemon';
COMMIT;

BEGIN;
UPDATE stock
SET quantity = quantity + 40
FROM citrus
WHERE stock.citrus_id = citrus_id AND name = 'orange';
COMMIT;

BEGIN;
UPDATE stock
SET quantity = quantity - 20
FROM citrus
WHERE stock.citrus_id = citrus_id AND name = 'orange';
COMMIT;

BEGIN;
UPDATE stock
SET quantity = quantity + 40
FROM citrus
WHERE stock.citrus_id = citrus_id AND name = 'lime';
COMMIT;

BEGIN;
UPDATE stock
SET quantity = quantity - 30
FROM citrus
WHERE stock.citrus_id = citrus_id AND name = 'lemon';
COMMIT;

BEGIN;
UPDATE stock
SET quantity = quantity - 20
FROM citrus
WHERE stock.citrus_id = citrus_id AND name = 'lime';
COMMIT;

BEGIN;
UPDATE stock
SET quantity = quantity + 40
FROM citrus
WHERE stock.citrus_id = citrus_id AND name = 'grapefruit';
COMMIT;

BEGIN;
UPDATE stock
SET quantity = quantity - 20
FROM citrus
WHERE stock.citrus_id = citrus_id AND name = 'grapefruit';
COMMIT;