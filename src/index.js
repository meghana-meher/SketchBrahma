import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from './Components/Main';
import Clients from './Components/Clients'


import reportWebVitals from './reportWebVitals';
import CaseStudies from './Components/CaseStudies';
import Footer from './Components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Router>
    <Main/>
    <Routes>
      <Route path='/CaseStudies' element={<CaseStudies/>}></Route>
      <Route path="/Clients" element={<Clients/>}></Route>
      <Route path='/Footer' element={<Footer/>}></Route>

    </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
