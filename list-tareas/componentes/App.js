import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Tareas from './Tareas';
import SobreNosotros from './SobreNosotros';
import Menu from './Menu';

const App = () => {
  return (
    <Router>
      <div>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tareas" component={Tareas} />
          <Route path="/sobre-nosotros" component={SobreNosotros} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
