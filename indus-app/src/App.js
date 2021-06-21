import './App.css';
import Header from './Components/Header'
import Navigation from './Components/Navigation'
import VehicleSearchForm from './Components/VehicleSearchForm'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Header className="App-header"/>
      <Navigation/>
      <VehicleSearchForm/>
      <Footer/>
    </div>
  );
}

export default App;
