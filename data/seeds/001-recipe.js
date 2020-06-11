
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').insert([
        {
          name: "scrambled eggs"
        }
  ]);
};
