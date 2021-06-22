import {createContext, useState} from 'react'

export const FilterContext = createContext(null)
export const FilterProvider = ({children}) => {
    const [model,setModel] = useState('')
    const [year, setYear] = useState(null)

    return (
        <FilterContext.Provider value={{model, setModel, year, setYear}}>
            {children}
        </FilterContext.Provider>
    )
}