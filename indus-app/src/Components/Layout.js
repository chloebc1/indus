import CarDetail from './CarDetail'
import CarList from './CarList'
import VehicleSearchForm from './VehicleSearchForm'
import { ViewCarContext } from '../Context/ViewCarContext'
import {useContext, useState, useEffect} from 'react'
import axios from 'axios'
import { LayoutContext } from '../Context/LayoutContext'
import { CartTab, HomeTab, MessagesTab } from './Constants'
import Cart from './Cart'
import Messages from './Messages'

const Layout = () => {
  const { tab } = useContext(LayoutContext)
  const { id } = useContext(ViewCarContext)
  const [cars, setCars] = useState([])
  const [models, setModels] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
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

    if (tab === HomeTab && !id) {
      fetchData();
    }
  }, []);

  if (tab === HomeTab) {
    if (id) {
      return <CarDetail id={id}></CarDetail>
    }

    return (<div style={{ display: 'flex', maxWidth: '100vw' }}>
      <CarList cars={cars}/>
      <VehicleSearchForm models={models}/>
    </div>)
  }

  if (tab === CartTab) {
    return <Cart />
  }

  if (tab === MessagesTab) {
    return <Messages />
  }

  return <></>

}
export default Layout