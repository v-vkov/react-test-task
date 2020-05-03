import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Content from './components/Content.jsx';
import MainPage from './components/MainPage';
import InfoPage from './components/Info';
import Contact from './components/Contact';
import { BrowserRouter, Route } from 'react-router-dom';




const App = () => {
return (
    <BrowserRouter>

    <div className='app-class'>
      <Header />
      <Navbar />
      <div>
      <Route path='/main' component={MainPage}/>
      <Route path='/posts' component={Content}/>
      <Route path='/info' component={InfoPage}/>
      <Route path='/contact' component={Contact}/>
      </div>
   </div>

   </BrowserRouter>
)

}

export default App;