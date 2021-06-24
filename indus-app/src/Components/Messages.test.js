import { screen, render } from '@testing-library/react'
import { MessageContext } from '../Context/MessageContext';
import Messages from './Messages';

describe('Messages', () => {
  test("should display 'no messages' text", () => {
    render(
        <MessageContext.Provider value={{messages: []}}>
            <Messages />
        </MessageContext.Provider>
    )
    expect(screen.getByText(/No messages to display/i)).toBeInTheDocument()
  });
})