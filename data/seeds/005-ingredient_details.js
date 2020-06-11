
exports.seed = function(knex) {
  // Inserts seed entries
  return knex('ingredient_details').insert([
    {list_id: 1, quantity: 2, type: "large egg(s)", ingredient_id: 1},
    {list_id: 1, quantity: .5, type: "oz", ingredient_id: 2},
  ]);
};
