// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContactUs } from './components/ContactUs';
import { Banner } from "./components/Banner";
import { Skills } from "./components/Service";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Main } from "./Main";

import {New} from './components/New';
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { createContext, useReducer } from 'react';
//adding google analitics tracker
import ReactGA from 'react-ga';

ReactGA.initialize('G-G97B72FMRB');

export const UserContext = createContext();

// import { Blogs} from "./components/Blogs"
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <UserContext.Provider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
         
          <div>
            <Routes>
              <Route exact path="/" element={<Main />} />
              <Route exact path="/about" element={<New />} />
              <Route exact path="/contactus" element={<ContactUs />} />
              
            </Routes>
          </div>
         
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

// 

// function
 
// App() {
//   return (
//     <Router>

      
// <Routes>

        
// <Route
 
// path="/"
 
// element={<Banner />} />
//         <Route
 
// path="/about"
 
// element={<About />} />
//         <Route
 
// path="/contact"
 
// element={<Contact />} />
//         <Route
 
// path="/blogs"
 
// element={<Blogs />} />
//         {/* Add more routes as needed */}
//       </Routes>
//     </Router>
//   );
// }

export default App;