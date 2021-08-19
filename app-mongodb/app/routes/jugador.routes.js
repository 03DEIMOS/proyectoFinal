module.exports = app => {
    const jugadores = require("../controllers/jugador.controller.js");

    var router = require("express").Router();

    router.post("/", jugadores.create);

    router.get("/", jugadores.findAll);

    router.get("/estado", jugadores.findAllActive);

    router.get("/:id", jugadores.findOne);

    router.put("/:id", jugadores.update);

    app.use('/api/jugadores', router);
};