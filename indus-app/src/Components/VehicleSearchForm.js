import { FilterContext } from '../Context/FilterContext'
import {Search, Model, Year} from './Constants'
import {useContext} from 'react'

const VehicleSearchForm = ({models}) => {
  const {setModel, setYear} = useContext(FilterContext)

  return (<div className="vehicleSearchForm">
    <select title={Model} onChange={(event) => {setModel(event.target.value)}}>
      <option value="">model</option>
      {Object.entries(models).map(([make, modelList]) => {
        return (
          <optgroup key={make} label={make}>
            {modelList.map(mod => <option key={mod} value={mod}>{mod}</option>)}
          </optgroup>
        )
      })}
    </select> 
    <select title={Year} onChange = {(event) => {setYear(event.target.value)}}>
      <option value="">year</option>
      <option value={2015}>2015</option>
      <option value={2016}>2016</option>
      <option value={2017}>2017</option>
      <option value={2018}>2018</option>
      <option value={2019}>2019</option>
      <option value={2020}>2020</option> 
    </select>
  </div>)
}

export default VehicleSearchForm