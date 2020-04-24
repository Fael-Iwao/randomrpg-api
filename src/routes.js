const express = require('express');
const routes = express.Router();
const Main = require('./controllers/main');


routes.get("/rollDice", Main.rollDice);
routes.get("/randomizeAppearance", Main.randomizeAppearance);
routes.get("/randomizeColor", Main.randomizeColor);
routes.get("/randomizeRpgClass", Main.randomizeRpgClass);
routes.get("/randomizeBreed", Main.randomizeBreed);
routes.get("/randomizeWeapon1", Main.randomizeWeapon1);
routes.get("/randomizeWeapon2", Main.randomizeWeapon2);
routes.get("/randomizeItens", Main.randomizeItens);

module.exports = routes;