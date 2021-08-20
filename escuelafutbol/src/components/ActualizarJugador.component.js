import React, { Component } from 'react';
import JugadorDataService from "../services/jugador.service";
import { Link } from 'react-router-dom';

export default class ActualizarJugador extends Component {

  constructor(props){
    super(props);
    this.onChangeSearchNombre = this.onChangeSearchNombre.bind(this);
    this.retrieveJugadores = this.retrieveJugadores.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveJugador = this.setActiveJugador.bind(this);
    this.searchNombre = this.searchNombre.bind(this);
    

    /*this.onChangeNombre = this.onChangeNombre.bind(this);
        this.onChangeApellidos = this.onChangeApellidos.bind(this);
        this.onChangeTipoId = this.onChangeTipoId.bind(this);
        this.onChangeNroId = this.onChangeNroId.bind(this);
        this.onChangeFechaNac = this.onChangeFechaNac.bind(this);
        this.onChangeFechaIng = this.onChangeFechaIng.bind(this);
        this.onChangeTelefono = this.onChangeTelefono.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);

    this.updateJugador = this.updateJugador.bind(this);
    this.updateEstado = this.updateEstado.bind(this);
*/
    this.state = {
      jugadores: [],
      jugadorActual: null,
      currentIndex: -1,
      searchNombre: ""
    };
  }

  componentDidMount(){
    this.retrieveJugadores();
    //this.getJugador(this.props.match.params.id);
  }

  getJugador(id) {
    JugadorDataService.get(id)
    .then(response => {
        this.setState({
            jugadorActual: response.data
        });
        console.log(response.data)
        })
        .catch(e => {
            console.log(e);
    });

}

  onChangeSearchNombre(e){
    const searchNombre = e.target.value;

    this.setState({
      searchNombre: searchNombre
    });
  }

  retrieveJugadores(){
    JugadorDataService.getAll()
    .then(response =>{
      this.setState({
        jugadores: response.data
      });
      console.log(response.data);
    })
    .catch(e =>{
      console.log(e);
    });
  }

  refreshList(){
    this.retrieveJugadores();
    this.setState({
      jugadorActual: null,
      currentIndex: -1
    });
  }

  setActiveJugador(jugador, index){
    this.setState({
      jugadorActual: jugador,
      currentIndex: index
    });
  }

  searchNombre(){
    JugadorDataService.findByNombre(this.state.searchNombre)
    .then(response =>{
      this.setState({
        jugadores: response.data
      });
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  }

  render(){
    const { searchNombre, jugadores, jugadorActual, currentIndex } = this.state;
    
    return (
        <div className = "container fluid border bg-light">

            <h1 className="display-5">Formulario de Actualización de Jugadores</h1>
            <br/>
            <div className="row g-2">
                <div className="col-md-4">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="txtNombre" 
                        placeholder="Search..." value={searchNombre} onChange={this.onChangeSearchNombre}/>
                        <label htmlFor="txtNombre">Consultar por Nombre:</label>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="form-floating">
                    <button className="btn btn-primary" type="button" onClick={this.searchNombre}>Consultar</button>
                    </div>
                </div>    
            </div>
            <div className="row">
            <h3>Listado de Jugadores Registrados</h3>
            <p></p><p></p>
            <div className="col-md-5">
              <ul className="list-group">
                {jugadores &&
                  jugadores.map((jugador, index) => (
                    <li className={
                        "list-group-item " +
                        (index === currentIndex ? "active" : "")
                      }
                      onClick={() => this.setActiveJugador(jugador, index)}
                      key={index}
                    >
                      {jugador.nroId}{" - "}{jugador.nombre}{" "}{jugador.apellidos}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="col-md-5">
          {jugadorActual ? (
            <div>
              <h4>Jugador Seleccionado</h4>
              <div>

              <label>Nombre: </label>{" "}
                <input type="text" value={jugadorActual.nombre} id="nombre"  />
              </div>
              <div>
                <label>Apellidos:</label>{" "}
                <input type="text" value={jugadorActual.apellidos} id="apellidos" />
              </div>
              <div>
                <label>tipoId:</label>{" "}
                <input type="text" value={jugadorActual.tipoId} id="tipoId" />
              </div>
              <div>
                <label>Nro. Id:</label>{" "}
                <input type="text" value={jugadorActual.nroId} id="nroId" />
              </div>
              <div>
                <label>Fecha Nacimiento:</label>{" "}
                <input type="text" value={jugadorActual.fechaNac} id="fechaNac" />
              </div>
              <div>
                <label>Fecha Ingreso:</label>{" "}
                <input type="text" value={jugadorActual.fechaIng} id="fechaIng" />
              </div>
              <div>
                <label>Telefono:</label>{" "}
                <input type="text" value={jugadorActual.telefono} id="telefono" />
              </div>
              <div>
                <label>Email:</label>{" "}
                <input type="text" value={jugadorActual.email} id="email" />
              </div>
              <div className="form-group">
                <label>
                  <strong>Estado:</strong>
                </label>
                {jugadorActual.estado ? "Activo" : "Inactivo"}
              </div>
              <div className="form-group"><Link
                to={"/actualizar/" + jugadorActual.id}
                className="btn btn-success"
              >
                Editar
              </Link></div>

            </div>
          ) : (
            <div>
              <br />
              <p>Por favor, seleccione un Jugador del listado...</p>
            </div>
          )}
        </div>
      </div>
      </div>
    )
}

}