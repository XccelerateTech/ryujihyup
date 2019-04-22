
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Dennis', email: 'Dennis@d.com', age: 24},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'},
        
      ]);
    });
};
