const express = require("express");
const app = express();

// importar arquivo rotas pizza
const pizzaRoutes = require('../controllers/pizzaRoutes');

// configurar a rota que utilizara o pizzaRoutes

app.use('/pizzas',pizzaRoutes);

app.listen(3000, () =>  console.log("O servidor foi inicido!"));