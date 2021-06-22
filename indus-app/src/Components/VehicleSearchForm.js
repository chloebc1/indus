import {Search, Model, Year} from './Constants'

const VehicleSearchForm = ({models}) => (
  <div className="vehicleSearchForm">
    <select title={Model}>
      {Object.entries(models).map(([make, modelList]) => {
        return (
          <optgroup label = {make}>
            {modelList.map(mod => <option value={mod}>{mod}</option>)}
          </optgroup>
        )
      })}
    </select> 
    <select title={Year}>
      <option value="2015">2015</option>
      <option value="2016">2016</option>
      <option value="2017">2017</option>
      <option value="2018">2018</option>
      <option value="2019">2019</option>
      <option value="2020">2020</option> 
    </select>
    <button title={Search}>{Search}</button>
  </div>
  )

export default VehicleSearchForm