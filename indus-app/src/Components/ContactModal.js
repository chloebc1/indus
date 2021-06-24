import { useContext, useState } from "react";
import { MessageContext } from "../Context/MessageContext";

const ContactModal = ({carId}) => {
    const {addMessage, toggleContactModal} = useContext(MessageContext);
    const [messageText, setMessageText] = useState('');
    
    return (
    <div className='contactModal'>
        <div className='contactModalInner'>
            <h4>Contact Us!</h4>
            <form onSubmit={e => addMessage(e, carId, messageText)}>
                <textarea name="contactTextBox" onChange={e => setMessageText(e.target.value)}></textarea>
                <div className="contactModal-actions">
                    <button className="cancel-btn" title="CancelButton" onClick={toggleContactModal}>Cancel</button>
                    <button className="submit-btn" title="SubmitButton">Send</button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default ContactModal;