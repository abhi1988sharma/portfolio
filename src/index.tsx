import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./index.module.scss"
//import Main from './Components/main/main';
import Navbar from './Components/navbar/navbar';
import Projects from './Components/projects/projects';
import Cv from './Components/cv/cv';
import Contact from './Components/contact/contact';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/projects' element={<Projects />} />
      <Route path='/cv' element={<Cv />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </Router>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
