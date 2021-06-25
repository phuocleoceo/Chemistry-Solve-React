import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/Home';
import Navigation from './components/Navigation';
import MetalNonOxidizingAcids from './components/ExerciseFormat/MetalNonOxidizingAcids';
import CO2WithOH from './components/ExerciseFormat/CO2WithOH';
import IronOxideWithHNO3 from './components/ExerciseFormat/IronOxideWithHNO3';
import Al3WithOH from './components/ExerciseFormat/Al3WithOH';
import AlO2WithH from './components/ExerciseFormat/AlO2WithH';
import HWithHCO3AndCO3 from './components/ExerciseFormat/HWithHCO3AndCO3';

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <Navigation />

        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/format1' component={MetalNonOxidizingAcids} />
          <Route path='/format2' component={CO2WithOH} />
          <Route path='/format3' component={IronOxideWithHNO3} />
          <Route path='/format4' component={Al3WithOH} />
          <Route path='/format5' component={AlO2WithH} />
          <Route path='/format6' component={HWithHCO3AndCO3} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}
