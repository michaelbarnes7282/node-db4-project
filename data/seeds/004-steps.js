
exports.seed = function(knex) {
  // Inserts seed entries
  return knex('steps').insert([
    {recipe_id: 1, step_number: 1, name: 'put butter in pan'},
    {recipe_id: 1, step_number: 2, name: 'beat eggs'},
    {recipe_id: 1, step_number: 3, name: 'put eggs in pan'},
    {recipe_id: 1, step_number: 4, name: 'eat eggs'}
  ]);
};
