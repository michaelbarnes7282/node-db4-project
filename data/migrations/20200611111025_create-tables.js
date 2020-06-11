
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments();

      tbl.string('name', 128).notNullable().index();
  })
  .createTable('ingredients', tbl => {
      tbl.increments();

      tbl.string('name', 128).notNullable().index();
  })
  .createTable('ingredient_list', tbl => {
    tbl.increments();

    //foreign key
    tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipes.id')
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
  })
  .createTable('steps', tbl => {
      tbl.increments();

      tbl.string('name', 400).notNullable();

      tbl.integer('step_number').unsigned().notNullable();

      //foreign key
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipes.id')
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

  })
  .createTable('ingredient_details', tbl => {
      tbl.increments();
      tbl.float('quantity')
        .unsigned()
        .notNullable()
      tbl.string('type', 125).notNullable()

        // foreign keys
      tbl.integer('list_id')
        .unsigned()
        .references('ingredient_list.id')
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tbl.integer('ingredient_id')
        .unsigned()
        .references('ingredients.id')
        .onDelete("CASCADE")
        .onUpdate("CASCADE"); 
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("ingredient_details")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredient_list")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")
};
