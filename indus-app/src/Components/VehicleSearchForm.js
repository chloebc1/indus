import {Search, Model, Year} from './Constants'

const VehicleSearchForm = () => (
  <>
    <select title={Model}/>
    <select title={Year}/>
    <button title={Search}/>
  </>
  )

export default VehicleSearchForm