import './App.css';
import Navbar from './Component/Navbar';
import Header from './Component/Home';
import Footer from './Component/Footer';
import Contact from './Component/Contact';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {useState, useEffect} from 'react';
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";

function App() {
  const override = css`
    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  `;

  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <>
      {
        loading ?
        <HashLoader color={"#36D7B7"} css={override} loading={loading} size={70} />
        :
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
      }
      
      
    </>
  );
}

export default App;
