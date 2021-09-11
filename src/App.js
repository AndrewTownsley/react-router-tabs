import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Register  from './components/Register/Register';
import Products  from './components/Products/Products'; 
import Features from './components/Features/Features';

export const RouterTabs = () => {
    return (
       <BrowserRouter>
           <div className="app">
               <header>
                 <h1>WebStuff.com</h1>
                    <nav>
                        <ul>
                            <li><Link to="/Features">Features</Link></li>
                            <li><Link to="/Register">Register</Link></li>
                            <li><Link to="/Products">Products</Link></li>
                            <li><Link to="/Features/Design">Web Design</Link></li>
                            <li><Link to="/Products/Templates">Website Templates</Link></li>
                            <li><Link to="/Register/Login">Login Page</Link></li>
                        </ul>
                    </nav>
                  </header>
               <Switch>
                  <Route path="/Features">
                    <Features/>
                  </Route>
                  <Route path="/Products">
                    <Products/>
                  </Route>
                  <Route path="/Register">
                    <Register/>
                  </Route>
                  {/* ---------------------------- */}
                  {/* <Route path="/Features/:type">
                    <Features/>
                  </Route>
                  <Route path="/Products/:type">
                    <Products/>
                  </Route>
                  <Route path="/Register/:type">
                    <Register/>
                  </Route> */}
               </Switch>
           </div>
       </BrowserRouter>
    )
}

    

export default RouterTabs;


