import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import AuthService from "./services/auth.service";

//Componentes
import RegistrarJugador from './components/RegistrarJugador.component';
import Jugador from './components/Jugador.component';
import ActualizarJugador from "./components/ActualizarJugador.component";

import Profile from './components/profile.component';
import Login from "./components/Login.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render(){
    const { currentUser } = this.state;
    return(
      <div className="App mt-5" role="group">
         <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            App Escuela Fútbol
          </Link>
          <div className="navbar-nav mr-auto">

            {currentUser && (
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  Registrar Jugador
                </Link>
              </li>
            )}
            {currentUser && (
              <li className="nav-item">
                <Link to={"/actualizar"} className="nav-link">
                 Actualizar Jugador
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/profile"]} component={Profile} />
            <Route exact path={"/actualizar"} component={ActualizarJugador}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/actualizar/:id" component={Jugador} />
            <Route path="/add" component={RegistrarJugador} />
          </Switch>
        </div>
    {/*<Router>
      
      
      <Link to="/actualizar"  className="btn btn-outline-secondary" role="button"> Actualizar </Link>
 
      <Link to="/add" className="btn btn-outline-secondary" role="button"> Registrar </Link>
           
      <Switch>
        <Route exact path={"/", "/actualizar"} component={ActualizarJugador}/>

        <Route exact path="/add" component={RegistrarJugador}/>

        <Route path='/actualizar/:id' component={Jugador}/>

    </Switch>
    </Router>*/}
      </div>

    );
  }
}

export default App;
