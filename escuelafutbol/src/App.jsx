import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

//Componentes
import RegistrarJugador from './components/RegistrarJugador.component';
import Jugador from './components/Jugador.component';
import ActualizarJugador from "./components/ActualizarJugador.component";

class App extends Component {
  
  render(){
    return(
      <div className="App mt-5" role="group">

    <Router>
      <Link to="/actualizar"  className="btn btn-outline-secondary" role="button"> Actualizar </Link>
 
      <Link to="/add" className="btn btn-outline-secondary" role="button"> Registrar </Link>
           
      <Switch>
        <Route exact path={"/", "/actualizar"} component={ActualizarJugador}/>

        <Route exact path="/add" component={RegistrarJugador}/>

        <Route path='/actualizar/:id' component={Jugador}/>{/**/}
      </Switch>
    </Router>
      </div>

    );
  }
}

export default App;
