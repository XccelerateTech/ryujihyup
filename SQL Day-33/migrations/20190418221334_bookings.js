
exports.up = function(knex, Promise) {
    return knex.schema.createtable('bookings', (table) =>{
        table.increments();
        table.string('date');
        table.string('remarks');
        table.timestamps(false, true);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.droptable('bookings');
};
