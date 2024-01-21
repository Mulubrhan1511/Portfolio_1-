// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Service";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
// import { About } from "./components/About";
// import { Blogs} from "./components/Blogs"
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      {/* <Blogs /> */}
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      {/* <About/> */}
      
    </div>
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