import {createContext, useState} from 'react'
import { HomeTab } from '../Components/Constants'

export const LayoutContext = createContext(null)
export const LayoutProvider = ({children}) => {
    const [tab, setTab] = useState(HomeTab)

    return (
        <LayoutContext.Provider value={{tab, setTab}}>
            {children}
        </LayoutContext.Provider>
    )
}