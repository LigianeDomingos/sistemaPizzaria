// Importando o express.Router
const express = require("express");
const router = express.Router();

// Importar pizzaControler
const pizzaControler = require('../controllers/pizzaController');

router.get('/',pizzaControler.listarPizzas);

// mostrar pizza
// localhost:3000/pizzas/1
router.get('/:id',pizzaControler.mostarPizza);

module.exports = router;
