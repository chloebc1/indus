import './App.scss';
import Header from './Components/Header'
import Navigation from './Components/Navigation'
import Footer from './Components/Footer'
import { FilterProvider } from './Context/FilterContext'
import { ViewCarProvider } from './Context/ViewCarContext'
import { LayoutProvider } from './Context/LayoutContext'
import { CartProvider } from './Context/CartContext'
import { MessageProvider } from './Context/MessageContext';
import Layout from './Components/Layout'

function App() {

  return (
    <div className="App">
      <Header className="App-header"/>
        <LayoutProvider>
          <CartProvider>
            <MessageProvider>
              <Navigation/>
              <FilterProvider>
                <ViewCarProvider>
                    <Layout/>
                </ViewCarProvider>
              </FilterProvider>
            </MessageProvider>
          </CartProvider>
        </LayoutProvider>
      <Footer/>
    </div>
  );
}

export default App;
