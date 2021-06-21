import './App.css';
import Header from './Components/Header'
import Navigation from './Components/Navigation'
import VehicleSearchForm from './Components/VehicleSearchForm'
import Footer from './Components/Footer'
import CarList from './Components/CarList'
import {cars} from './data.js'


function App() {
  return (
    <div className="App">
      <Header className="App-header"/>
      <Navigation/>
      <div style={{display: 'flex', maxWidth: '100vw'}}>
        <CarList cars={cars} />
        <VehicleSearchForm/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
