const db = require('../data/db-config.js');

function getRecipes() {
    return db("recipes")
}

function getShoppingList(id) {
    return db('recipes as r')
        .join('ingredient_list as il', "il.recipe_id", "r.id")
        .where("r.id", id)
        .join('ingredient_details as ing_d', "ing_d.list_id", "il.id")
        .join('ingredients as i', "i.id", "ing_d.ingredient_id")
        .select("i.name", "ing_d.quantity", "ing_d.type");
}

function getInstructions(id) {
    return db('recipes as r')
        .join('steps as s', 's.recipe_id', 'r.id')
        .where('r.id', id)
        .select("s.step_number", "s.name")
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}