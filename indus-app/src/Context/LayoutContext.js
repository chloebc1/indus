import {createContext, useState} from 'react'
import { Home } from '../Components/Constants'

export const LayoutContext = createContext(null)
export const LayoutProvider = ({children}) => {
    const [tab, setTab] = useState(Home)

    return (
        <LayoutContext.Provider value={{tab, setTab}}>
            {children}
        </LayoutContext.Provider>
    )
}