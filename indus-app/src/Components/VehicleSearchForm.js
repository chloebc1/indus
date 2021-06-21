import {Search, Model, Year, CarModels} from './Constants'

const VehicleSearchForm = () => (
  <div className="vehicleSearchForm">
    <select title={Model}>
      <optgroup label="Toyota">
        <option value="Tundra">Tundra</option>
        <option value="Tacoma">Tacoma</option>
        <option value="Camry">Camry</option>
      </optgroup>
      <optgroup label="Honda">
        <option value="Pilot">Pilot</option>
        <option value="CR-V">CR-V</option>
        <option value="Civic">Civic</option>
      </optgroup>
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