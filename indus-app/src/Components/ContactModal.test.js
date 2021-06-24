import { render, screen} from '@testing-library/react'
import {MessageContext} from '../Context/MessageContext'
import ContactModal from './ContactModal'

describe('contactModal', () => {
    test('should display contactModal', () => {
        render(
            <MessageContext.Provider value={{}}>
                <ContactModal/>
              </MessageContext.Provider>
        )
        expect(screen.getByRole('textbox')).toBeInTheDocument()
    })
  })