import './App.css';
import Navbar from './Component/Navbar';
import Header from './Component/Home';
import Footer from './Component/Footer';
import Contact from './Component/Contact';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>

      <BrowserRouter>
        < Navbar />

        <Switch>
          <Route exact path="/">
            <Header/>
          </Route>
          <Route exact path="/contact">
            < Contact />
          </Route>
        </Switch>

        < Footer />
      </BrowserRouter>
      
    </>
  );
}

export default App;
