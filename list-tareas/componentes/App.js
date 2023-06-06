import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Tareas from './Tareas';
import SobreNosotros from './SobreNosotros';
import Menu from './Menu';
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box p={4} bg="blue.500" color="white">
      ¡Hola, Chakra UI!
    </Box>
  );
}

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
