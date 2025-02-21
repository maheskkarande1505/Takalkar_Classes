import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Navbar from './navbar.jsx';
import Haomepage from './haome page.jsx';
import Aboutpage from './About page.jsx';
import Courcespage from './Cources page.jsx';
import Admission from './admission.jsx';
import Gallery from './gallery.jsx';
import Contact from './contact.jsx';

import Footer from './footer.jsx';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Router>
 <Navbar/>
 <Routes>
  <Route path='/' element={<Haomepage/>}></Route>
  <Route path='/Home' element={<Haomepage/>}></Route>
  <Route path='/about' element={<Aboutpage/>}></Route>
  <Route path='/courses' element={<Courcespage/>}></Route>
  <Route path='/admission' element={<Admission/>}></Route>
  <Route path='/gallery' element={<Gallery/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
 </Routes>
<Footer/>
 </Router>
 </>
);

reportWebVitals();
