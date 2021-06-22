import {createContext, useState} from 'react'

export const ViewCarContext = createContext(null)
export const ViewCarProvider = ({children}) => {
    const [id, setID] = useState(0)
    return (
        <ViewCarContext.Provider value={{id, setID}}>
            {children}
        </ViewCarContext.Provider>
    )
}