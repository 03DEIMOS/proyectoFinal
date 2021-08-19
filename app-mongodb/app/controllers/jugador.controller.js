const db = require("../models");
const Jugador = db.jugadores;

//Creamos un nuevo jugador
exports.create = (req, res) => {
    if(!req.body.nombre){
        res.status(400).send({ message: "Content can not be empty!"});
        return;
    }

    const jugador = new Jugador({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        tipoId: req.body.tipoId,
        nroId: req.body.nroId,
        fechaNac: req.body.fechaNac,
        fechaIng: req.body.fechaIng,
        telefono: req.body.telefono,
        email: req.body.email,
        estado: req.body.estado ? req.body.estado : false
    });

    jugador
        .save(jugador)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió algún error al hacer el Insert en BD!"
            });
        });
};

exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { $regex: new RegExp(nombre), $options: "i" } } : {};

    Jugador.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error consultando los Jugadores"
            });
        });
};


exports.findOne = (req, res) => {
    const id = req.params.id;

    Jugador.findById(id)
    .then(data => {
        if(!data)
            res.status(404).send({ message: "No se encontró Jugador con Id" + id});
        else res.send(data);
    })
    .catch(err => {
        res
        .status(500)
        .send({ message: "Error consultando el Jugador con Id = " + id});
    });
};

exports.update = (req, res) => {
    if(!req.body){
        return res.status(400).send({
            message: "Los datos a actualizar no pueden estar vacíos!"
        });
    }

    const id = req.params.id;

    Jugador.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
    .then(data => {
        if(!data){
            res.status(404).send({
                message: `No se puede actualizar el Jugador con id=${id}. El jugador no fue encontrado!`
            });
        }else res.send({ message: "El Jugador fue actualizado exitosamente"});
    })
    .catch(err => {
        res.status(500).send({
            message: "Error actualizando el Jugador con id" + id
        });
    });
};

//Buscar todos los jugadores activos
exports.findAllActive = (req, res) => {
    Jugador.find({estado: true})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: 
            err.message || "Ocurrió algún error al consultar la información."
        });
    });
};