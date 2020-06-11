const express = require('express');

const rm = require('./recipes-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    rm.getRecipes()
    .then(recipes => {
        res.json(recipes);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get recipes.' });
    });
});

router.get('/:id/shoppingList', (req, res) => {
    const { id } = req.params
    rm.getShoppingList(id)
    .then(list => {
        res.json(list);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get shopping list.' });
    })
})

router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;
    rm.getInstructions(id)
    .then(list => {
        res.json(list);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get shopping list.' });
    })
})

module.exports = router;