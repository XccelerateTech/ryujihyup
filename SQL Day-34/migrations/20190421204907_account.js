exports.up = function(knex, Promise) {
    return knex.schema.creatTable('accounts', (table)=>{
        table.increments();
        table.string('name');
        table.string('email');
        table.string('ID Number');
        table.timestamps(false, true);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('accounts')
};
