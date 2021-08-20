const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"  
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


//Llamada al método connect
const db = require("./app/models");

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Conexión a BD establecida correctamente!");
    })
    .catch(err => {
        console.log("No se pudo conectar a la BD!", err);
        process.exit();
    });


//Ruta simple
app.get("/", (req, res) => {
    res.json({ message: "Bienvenido a la Aplicación de DEIMOS" });
});

require("./app/routes/jugador.routes")(app);

//Seteamos el puerto
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

//Login Nuevo
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
