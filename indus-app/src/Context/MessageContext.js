import {createContext, useState} from 'react'

export const MessageContext = createContext(null)
export const MessageProvider = ({children}) => {
    const [id, setId] = useState(0)
    const [messages, setMessages] = useState([])
    const addMessage = (message) => {
        setMessages([...messages, message])
    }
    const updateMessage = ({id}) => {
        const newMessages = messages
        newMessages.map((message) => {
            if (message.id === id) {
                message.read = false
            }

            return message
        })
        setMessages(newMessages)
    }

    return (
        <MessageContext.Provider value={{id, setId, messages, setMessages, addMessage, updateMessage}}>
            {children}
        </MessageContext.Provider>
    )
}