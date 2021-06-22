import './App.css';
import Header from './Components/Header'
import Navigation from './Components/Navigation'
import VehicleSearchForm from './Components/VehicleSearchForm'
import Footer from './Components/Footer'
import CarList from './Components/CarList'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {FilterProvider} from './Context/FilterContext'

function App() {
  const [cars, setCars] = useState([]) 
  const [models, setModels] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:5000/api/vehicles',
      );
  
      setCars(result.data);

      setModels(result.data.reduce((results, currentCar) => {
        results[currentCar.make] = results[currentCar.make] || []
        if (results[currentCar.make].indexOf(currentCar.model) === -1) {
          results[currentCar.make].push(currentCar.model)
        } 

        return results
      },{}))
    };
  
    fetchData();
  }, []);

  

  return (
    <div className="App">
      <FilterProvider>
        <Header className="App-header"/>
        <Navigation/>
        <div style={{display: 'flex', maxWidth: '100vw'}}>
          <CarList cars={cars} />
          <VehicleSearchForm models={models}/>
        </div>
        <Footer/>
      </FilterProvider>
    </div>
  );
}

export default App;
