import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Nav from './componentes/nav/Nav'
import Home from './paginas/home/Home'
import QuemSomos from './paginas/quem-somos/QuemSomos'
import Agenda from './paginas/agenda/Agenda'
import Banda from './paginas/banda/Banda'
import Footer from './componentes/footer/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/quem-somos" component={QuemSomos} />
          <Route path="/agenda" component={Agenda} />
          <Route path="/banda" component={Banda} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App
