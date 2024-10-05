import logo from './logo.svg';
import './App.css';
import Page1 from './components/Page1/Page1';
import Page2 from './components/Page2/Page2';

import {  Routes, Route } from "react-router-dom";
import DynamicPage from './components/DynamicPage/DynamicPage';

function App() {
  return (
    <div>
   
      <Routes>
        <Route path='/'  element={<div>ALLAHIM GOOOOOOOOOOL</div>}/>
        <Route path='/pag'  element={<div>HMMMMMMMMMMMMMMMMMMMM</div>}/>
        <Route path='/page/1'  element={<Page1/>}/>
        <Route path='/page/2'  element={<Page2/>}/>
        <Route path='/pages'  element={<DynamicPage/>}/>
      </Routes>
    </div>
  );
}

/*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/

export default App;
