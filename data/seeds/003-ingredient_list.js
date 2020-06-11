
exports.seed = function(knex) {
  // Inserts seed entries
  return knex('ingredient_list').insert([
    {recipe_id: 1}
  ]);
};
