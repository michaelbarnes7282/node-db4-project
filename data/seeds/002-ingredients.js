
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {name: 'egg'},
        {name: 'butter'}
      ]);
};
