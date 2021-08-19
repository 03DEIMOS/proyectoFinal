import React, { Component } from 'react';
import JugadorDataService from '../services/jugador.service';

export default class Reportes extends Component {

   constructor(props){
        super(props);

        this.onChangeNombre = this.onChangeNombre.bind(this);
        this.onChangeApellidos = this.onChangeApellidos.bind(this);
        this.onChangeTipoId = this.onChangeTipoId.bind(this);
        this.onChangeNroId = this.onChangeNroId.bind(this);
        this.onChangeFechaNac = this.onChangeFechaNac.bind(this);
        this.onChangeFechaIng = this.onChangeFechaIng.bind(this);
        this.onChangeTelefono = this.onChangeTelefono.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        
        this.updateJugador = this.updateJugador.bind(this);
        this.updateEstado = this.updateEstado.bind(this);

        this.state = {
            jugadorActual: {
                id: null,
                nombre : '',
                apellidos: '',
                tipo_id: '',
                nro_id: '',
                fecha_nac: '',
                fecha_ing: '',
                telefono: '',
                email: '',
                estado: true
            },
            message: ""
        };
    }

    componentDidMount(){
        this.getJugador(this.props.match.params.id);
    }

    onChangeNombre(e){
        const nombre = e.target.value;

        this.setState(function(prevState){
            return {
                jugadorActual: {
                    ...prevState.jugadorActual,
                    nombre: nombre
                }
            };
        });
    }

    onChangeApellidos(e){
        const apellidos = e.target.value;

        this.setState(prevState => ({
            jugadorActual: {
              ...prevState.jugadorActual,
              apellidos: apellidos
            }
          }));

    }

    onChangeTipoId(e){
        const tipoId = e.target.value;

        this.setState(prevState => ({
            jugadorActual: {
              ...prevState.jugadorActual,
              tipoId: tipoId
            }
          }));
    }

    onChangeNroId(e){
        const nroId = e.target.value;
        this.setState(prevState => ({
            jugadorActual: {
              ...prevState.jugadorActual,
              nroId: nroId
            }
          }));
    }

    onChangeFechaNac(e){
        const fechaNac = e.target.value;
        this.setState(prevState => ({
            jugadorActual: {
              ...prevState.jugadorActual,
              fechaNac: fechaNac
            }
          }));
    }

    onChangeFechaIng(e){
        const fechaIng = e.target.value;
        this.setState(prevState => ({
            jugadorActual: {
              ...prevState.jugadorActual,
              fechaIng: fechaIng
            }
          }));
    }

    onChangeTelefono(e){
        const telefono = e.target.value;
        this.setState(prevState => ({
            jugadorActual: {
              ...prevState.jugadorActual,
              telefono: telefono
            }
          }));
    }
    
    onChangeEmail(e){
        const email = e.target.value;
        this.setState(prevState => ({
            jugadorActual: {
              ...prevState.jugadorActual,
              email: email
            }
          }));
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

    updateEstado(status){
        var data = {
            id: this.state.jugadorActual.id,
            nombre: this.state.jugadorActual.nombre,
            apellidos: this.jugadorActual.apellidos,
            tipoId: this.jugadorActual.tipoId,
            nroId: this.jugadorActual.nroId,
            fechaNac: this.jugadorActual.fechaNac,
            fechaIng: this.jugadorActual.fechaIng,
            telefono: this.jugadorActual.telefono,
            email: this.jugadorActual.email,

            estado: status
        };

        JugadorDataService.update(this.state.jugadorActual.id, data)
            .then(response =>{
                this.setState(prevState => ({
                    jugadorActual:{
                        ...prevState.jugadorActual,
                        estado: status
                    }
                }));
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    updateJugador(){
        JugadorDataService.update(
            this.state.jugadorActual.id,
            this.state.jugadorActual

        )
        .then(response => {
            console.log(response.data);
            this.setState({
                message: "El Jugador ha sido actualizado correctamente!"
            });
        })
        .catch(e => {
            console.log(e);
        });
    }


    render(){
        const { jugadorActual } = this.state;
    return (
        <div className = "container p-3 border bg-light">
        {jugadorActual ? (
          <div className="edit-form">
            <h4>Jugador</h4>
            <form>
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" className="form-control" id="nombre"
                  value={jugadorActual.nombre}
                  onChange={this.onChangeNombre}
                />
              </div>
              <div className="form-group">
                <label htmlFor="apellidos">Apellidos</label>
                <input type="text" className="form-control" id="apellidos"
                  value={jugadorActual.apellidos}
                  onChange={this.onChangeApellidos}
                />
              </div>
              <div className="form-group">
                <label htmlFor="tipoId">Tipo Id</label>
                <input type="text" className="form-control" id="tipoId"
                  value={jugadorActual.tipoId}
                  onChange={this.onChangeTipoId}
                />
              </div>
              <div className="form-group">
                <label htmlFor="nroId">Nro. Id</label>
                <input type="text" className="form-control" id="nroId"
                  value={jugadorActual.nroId}
                  onChange={this.onChangeNroId}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fechaNac">Fecha Nacimiento</label>
                <input type="date" className="form-control" id="fechaNac"
                  value={jugadorActual.fechaNac}
                  onChange={this.onChangeFechaNac}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fechaIng">Fecha Ingreso</label>
                <input type="text" className="form-control" id="fechaIng"
                  value={jugadorActual.fechaIng}
                  onChange={this.onChangeFechaIng}
                />
              </div>
              <div className="form-group">
                <label htmlFor="telefono">Telefono</label>
                <input type="text" className="form-control" id="telefono"
                  value={jugadorActual.telefono}
                  onChange={this.onChangeTelefono}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" id="email"
                  value={jugadorActual.email}
                  onChange={this.onChangeEmail}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Estado:</strong>
                </label>
                {jugadorActual.estado ? "Activo" : "Inactivo"}
              </div>
            </form>

            {jugadorActual.estado ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updateEstado(false)}
              >
                Inactivar
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updateEstado(true)}
              >
                Activar
              </button>
            )}

            <button
              type="submit"
              className="btn btn-success"
              onClick={this.updateJugador()}
            >
              Actualizar
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Por favor, seleccione un Jugador para Editar...</p>
          </div>
        )}
      </div>
    )
}

}
