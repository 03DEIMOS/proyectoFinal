const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.jugadores = require("./jugador.model.js")(mongoose);


db.user = require("./user.model");//Nuevo

module.exports = db;