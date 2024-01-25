import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Banner } from "./components/Banner";
import { Skills } from "./components/Service";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import firstimg from "./assets/css/blog/img/Blog1.jfif";
import secondimg from "./assets/css/blog/img/Blog2.jfif";
import thirdimg from "./assets/css/blog/img/Blog3.jfif";
import fourthimg from "./assets/css/blog/img/Blog4.jfif";
import fifthimg from "./assets/css/blog/img/Blog5.jfif";
import sixthimg from "./assets/css/blog/img/Blog6.jfif";

import React from 'react'

export const Main = () => {
  return (
    <div>
       
      <Banner />
      {/* <Blogs /> */}
      <Skills />
      <Projects />
      <div class="container my-4">
      <div className="row justify-content-center mb-5">
            <div className=" content-head">
                <div className="mbr-section-head">
                    <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2" style={{ color: 'black' }}>
                        <strong>Latest Blog Posts</strong>
                    </h4>
                </div>
            </div>
        </div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
            <img src={firstimg} class="bd-placeholder-img card-img-top" width="100%" height="225" />
            <div class="card-body">
              <p class="card-text">Best free Python resources for beginners to learn for free.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondry">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondry">Edit</button>
                </div>
                <small class="text-muted">5 mins</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <img src={secondimg} class="bd-placeholder-img card-img-top" width="100%" height="225" />
            <div class="card-body">
              <p class="card-text">Fullstack Development Complete Roadmap in 2023.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondry">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondry">Edit</button>
                </div>
                <small class="text-muted">32 mins</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <img src={thirdimg} class="bd-placeholder-img card-img-top" width="100%" height="225" />
            <div class="card-body">
              <p class="card-text">5 Amazing Websites Useful For Web Developers.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondry">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondry">Edit</button>
                </div>
                <small class="text-muted">1 hr</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <img src={fourthimg} class="bd-placeholder-img card-img-top" width="100%" height="225" />
            <div class="card-body">
              <p class="card-text">How to Upload a Website for Free on Github.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondry">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondry">Edit</button>
                </div>
                <small class="text-muted">4 hrs</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <img src={fifthimg} class="bd-placeholder-img card-img-top" width="100%" height="225" />
            <div class="card-body">
              <p class="card-text">5 Amazing Backend Frameworks for Web Developers.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondry">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondry">Edit</button>
                </div>
                <small class="text-muted">8 hrs</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <img src={sixthimg} class="bd-placeholder-img card-img-top" width="100%" height="225" />
            <div class="card-body">
              <p class="card-text">Top 10 Github Repositories for Web Developers.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondry">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondry">Edit</button>
                </div>
                <small class="text-muted">18 hrs</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Contact />
      <Footer />
      {/* <About/> */}
    </div>
  )
}
