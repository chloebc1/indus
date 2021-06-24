import {createContext, useState} from 'react'

export const MessageContext = createContext(null)
export const MessageProvider = ({children}) => {
    const [id, setId] = useState(0)
    const [showContactModal, setShowContactModal] = useState(false)
    const [messages, setMessages] = useState([])
    const addMessage = (e, carId, message) => {
        e.preventDefault();

        setShowContactModal(false);
        setMessages([...messages, { carId, message, read: false , createdAt: new Date()}])
    }

    const updateMessage = (index) => {
        const newMessages = messages
        newMessages.map((message, i) => {
            if (index === i) {
                message.read = true
            }

            return message
        })
        setMessages(newMessages)
    }
    const toggleContactModal = () => setShowContactModal(!showContactModal);

    return (
        <MessageContext.Provider value={{id, setId, messages, setMessages, addMessage, updateMessage, showContactModal, toggleContactModal}}>
            {children}
        </MessageContext.Provider>
    )
}