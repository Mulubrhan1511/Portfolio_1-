import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Banner } from "./components/Banner";
import { Skills } from "./components/Service";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

import React from 'react'

export const Main = () => {
  return (
    <div>
       
      <Banner />
      {/* <Blogs /> */}
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      {/* <About/> */}
    </div>
  )
}
