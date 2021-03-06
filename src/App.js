import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import MetalNonOxidizingAcids from './components/InorganicFormat/MetalNonOxidizingAcids';
import CO2WithOH from './components/InorganicFormat/CO2WithOH';
import IronOxideWithHNO3 from './components/InorganicFormat/IronOxideWithHNO3';
import Al3WithOH from './components/InorganicFormat/Al3WithOH';
import AlO2WithH from './components/InorganicFormat/AlO2WithH';
import HWithHCO3AndCO3 from './components/InorganicFormat/HWithHCO3AndCO3';
import GlucozoFermentation from './components/OrganicFormat/GlucozoFermentation';
import StructuralFormulaCombustion from './components/OrganicFormat/StructuralFormulaCombustion';

export default function App() {
	return (
		<BrowserRouter>
			<Container className="full-width-bar">
				<Navigation />

				<Switch>
					<Route path='/' component={Home} exact />
					<Route path='/format1' component={MetalNonOxidizingAcids} />
					<Route path='/format2' component={CO2WithOH} />
					<Route path='/format3' component={IronOxideWithHNO3} />
					<Route path='/format4' component={Al3WithOH} />
					<Route path='/format5' component={AlO2WithH} />
					<Route path='/format6' component={HWithHCO3AndCO3} />

					<Route path='/format7' component={GlucozoFermentation} />
					<Route path='/format8' component={StructuralFormulaCombustion} />
				</Switch>
			</Container>
		</BrowserRouter>
	);
}
