const mongoose = require("mongoose");
const Schema = mongoose.Schema;


module.exports = mongoose => {
    var schema = mongoose.Schema({
        nombre: String,
        apellidos: String,
        tipoId: String,
        nroId: String,
        fechaNac: Date,
        fechaIng: Date,
        telefono: String,
        email: String,
        estado: Boolean
    },
    {timestamps: true}
    );

    schema.method("toJSON", function(){
        const{ __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Jugador = mongoose.model("jugadores", schema);
    return Jugador;
};
