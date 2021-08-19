import React, { Component } from 'react'
import JugadorDataService from "../services/jugador.service";


export default class RegistrarJugador extends Component {

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
        
        this.saveJugador = this.saveJugador.bind(this);
        this.newJugador = this.newJugador.bind(this);

        this.state = {
            id: null,
            nombre : '',
            apellidos: '',
            tipoId: '',
            nroId: '',
            fechaNac: '',
            fechaIng: '',
            telefono: '',
            email: '',
            estado: true,//Al registrar al Jugador, el estado es Activo    

            submitted: false
        };
    }

    onChangeNombre(e){
        this.setState({
            nombre: e.target.value
        });
    }

    onChangeApellidos(e){
        this.setState({
            apellidos: e.target.value
        });
    }

    onChangeTipoId(e){
        this.setState({
            tipoId: e.target.value
        });
    }

    onChangeNroId(e){
        this.setState({
            nroId: e.target.value
        });
    }

    onChangeFechaNac(e){
        this.setState({
            fechaNac: e.target.value
        });
    }

    onChangeFechaIng(e){
        this.setState({
            fechaIng: e.target.value
        });
    }

    onChangeTelefono(e){
        this.setState({
            telefono: e.target.value
        });
    }
    
    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    }


    saveJugador(){
        var data = {
            nombre : this.state.nombre,
            apellidos: this.state.apellidos,
            tipoId: this.state.tipoId,
            nroId: this.state.nroId,
            fechaNac: this.state.fechaNac,
            fechaIng: this.state.fechaIng,
            telefono: this.state.telefono,
            email: this.state.email,
            estado: true
        };

        JugadorDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    nombre: response.data.nombre,
                    apellidos: response.data.apellidos,
                    tipoId: response.data.tipoId,
                    nroId: response.data.nroId,
                    fechaNac: response.data.fechaNac,
                    fechaIng: response.data.fechaIng,
                    telefono: response.data.telefono,
                    email: response.data.email,
                    estado: response.data.estado,

                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    newJugador(){
        this.setState({
            id: null,
            nombre : '',
            apellidos: '',
            tipoId: '',
            nroId: '',
            fechaNac: '',
            fechaIng: '',
            telefono: '',
            email: '',
            estado: true,

            submitted: false
        });
    }

    render(){

    return (

        <div className = "container p-3 border bg-light">
            <br/>
            <h1 className="display-5">Formulario de Registro de Jugadores</h1><p></p>
                {this.state.submitted ? (
                     <div>
                     <h4>Jugador Registrado Exitosamente!</h4>
                     <button className="btn btn-success" onClick={this.newJugador}>
                       Registrar Nuevo
                     </button>
                   </div>
                ) : (
                    <div>
                    <div className="row g-2">
                        <div className="col-md">
                            <div className="form-floating">
                        <input type="text" className="form-control" id="txtNombre" placeholder="Nombre Jugador" required
                        value={this.state.nombre} onChange={this.onChangeNombre}/>
                        <label htmlFor="txtNombre">Nombre</label>
                    </div>
                </div>
                <div className="col-md">
                    <div className="form-floating">
                        <input type="text" className="form-control" id = "txtApellido" placeholder="Apellidos Jugador"
                        value={this.state.apellidos} onChange={this.onChangeApellidos}/>
                        <label htmlFor="txtApellido">Apellidos</label>
                    </div>
                </div>    
            </div>
            <p></p>
            <div className="row g-2">
                <div className="col-md">
                    <div className="form-floating">
                        <select className="form-select" id="selTipoId" aria-label="Floating label select example">
                            <option value="0" selected={this.state.tipoId === "0"} onChange={this.onChangeTipoId}>R.C.</option>
                            <option value="1" selected={this.state.tipoId === "1"} onChange={this.onChangeTipoId}>T.I.</option>
                            <option value="2" selected={this.state.tipoId === "2"} onChange={this.onChangeTipoId}>C.C.</option>
                        </select>
                        <label htmlFor="selTipoId">Tipo Id.</label>
                    </div>
                </div>
                <div className="col-md">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="txtNroId" placeholder="Identificación"
                        value={this.state.nroId} onChange={this.onChangeNroId}/>
                        <label htmlFor="txtNroId">Nro. Id.</label>
                    </div>
                </div>
            </div>
            <p></p>
            <div className="row g-2">
                <div className="col-md">
                    <div className="form-floating">
                        <input type="date" className="form-control" id = "txtFecNac"
                        value={this.state.fechaNac} onChange={this.onChangeFechaNac}/>
                        <label htmlFor="txtFecNac">Fecha Nacimiento</label>
                    </div>
                </div>
                <div className="col-md">
                    <div className="form-floating">
                        <input type="date" className="form-control" id="txtFecIng"
                        value={this.state.fechaIng} onChange={this.onChangeFechaIng}/>
                        <label htmlFor="txtFecIng">Fecha Ingreso</label>
                    </div>
                </div>
            </div>
            <p></p>
            <div className="row g-3">
                <div className="col-md-4">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="txtTel" placeholder="6000000"
                        value={this.state.telefono} onChange={this.onChangeTelefono}/>
                        <label htmlFor="txtTel">Teléfono</label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-floating">
                        <input type="email" className="form-control" id="txtEmail" placeholder="mdo@example.com"
                        value={this.state.email} onChange={this.onChangeEmail}/>
                        <label htmlFor="txtEmail">E-Mail</label>
                    </div>
                </div>
                <div className="col-auto">
                    <div className="form-floating">
                        <button className="btn btn-success" onClick={this.saveJugador}>Guardar</button>
                    </div>
                </div>
               
            </div> 
        </div>
            )}                      
        </div>


    );//End Return
}

}