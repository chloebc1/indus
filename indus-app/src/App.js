import './App.css';
import Header from './Components/Header'
import Navigation from './Components/Navigation'
import Footer from './Components/Footer'
import { FilterProvider } from './Context/FilterContext'
import { ViewCarProvider } from './Context/ViewCarContext'
import { CartProvider } from './Context/CartContext'
import Layout from './Components/Layout'

function App() {

  return (
    <div className="App">
      <FilterProvider>
        <ViewCarProvider>
          <CartProvider>
            <Header className="App-header"/>
            <LayoutProvider>
              <Navigation/>
              <Layout/>
            </LayoutProvider>
            <Footer/>
          </CartProvider>
        </ViewCarProvider>
      </FilterProvider>
    </div>
  );
}

export default App;
