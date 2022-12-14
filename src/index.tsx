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
import Cv from './Components/cv/cv';
import Contact from './Components/contact/contact';
import Footer from './Components/footer/footer';
import './index.module.scss';
import MyGithubRepos from './Components/github/myGithubRepo';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/projects' element={<MyGithubRepos />} /> 
      <Route path='/cv' element={<Cv />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer />
  </Router>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
