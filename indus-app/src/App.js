import './App.css';
import Header from './Components/Header'
import Navigation from './Components/Navigation'
import Footer from './Components/Footer'
import {FilterProvider} from './Context/FilterContext'
import { ViewCarProvider } from './Context/ViewCarContext'
import Layout from './Components/Layout'

function App() {

  return (
    <div className="App">
      <FilterProvider>
        <ViewCarProvider>
        <Header className="App-header"/>
        <Navigation/>
          <Layout/>

        <Footer/>
        </ViewCarProvider>
      </FilterProvider>
    </div>
  );
}

export default App;
