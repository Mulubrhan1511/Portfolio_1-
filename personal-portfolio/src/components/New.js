import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Projects } from "./Projects";
import { Skills } from "./Service";
import { Footer } from "./Footer";
import firtsimg from "../assets/img/photo-1504992963429-56f2d62fbff0.jpeg";
import secondimg from "../assets/img/photo-1622737133809-d95047b9e673.jpeg";
export const New = () => {
        const sectionStyle = {
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          height: '100vh',
          background: 'transparent',
        };
      
        const iframeStyle = {
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
        };
        const contentWrapStyle = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            textAlign: 'center',
          };
          const sectionStyle2 = {
            backgroundColor: '#ffffff', // Set the background color to white
          };
  return (
    <div>
       
        
       <section className="header18 cid-u25FX36poG mbr-fullscreen" id="hero-15-u25FX36poG" style={sectionStyle}>
      <iframe
        title="background-video"
        src="https://www.youtube.com/embed/BqFSHbzSs7U?autoplay=1&loop=1&playlist=BqFSHbzSs7U&t=20&mute=1&playsinline=1&controls=0&showinfo=0&autohide=1&allowfullscreen=true&mode=transparent"
        frameBorder="0"
        allowFullScreen
        style={iframeStyle}
      ></iframe>
      <div className="mbr-overlay" style={{ opacity: 0.3, backgroundColor: 'rgb(0, 0, 0)' }}></div>
      <div className="container-fluid">
        <div className="row">
          <div className="content-wrap col-12 col-md-8 text-center" style={contentWrapStyle}>
            <h1 className="mbr-section-title mbr-fonts-style mbr-white mb-4 display-1 animate__animated animate__delay-1s animate__fadeInUp">
              <strong>Unleash Creativity</strong>
            </h1>
            <p className="mbr-fonts-style mbr-text mbr-white mb-4 display-7 animate__animated animate__delay-1s animate__fadeInUp">
              Where Vision Meets Innovation - Join Us on the Journey to Web Development Excellence!
            </p>
            <div className="mbr-section-btn">
              {/* Your button or link here */}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="article01 cid-u25FX36Xeo" id="about-us-1-u25FX36Xeo" style={sectionStyle2}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="card col-md-12 col-lg-12">
            <div className="card-wrapper">
              <div className="row">
                <div className="image-wrapper col-12 col-sm-6 justify-content-center">
                  <img src={firtsimg} alt="First Image" />
                </div>
                <div className="image-wrapper col-12 col-sm-6 justify-content-center">
                  <img src={secondimg} alt="Second Image" />
                </div>
              </div>

              <div className="card-box align-left mb-3 card-content-text">
                <h4 className="card-title mbr-fonts-style mbr-white mb-0 display-5">
                  <strong>Our Vision</strong>
                </h4>
                <p className="mbr-text mbr-fonts-style mt-3 mb-0 display-7">
                  Welcome to the world of limitless possibilities, where code meets creativity and dreams become reality. At Visionary, we are more than just web developers - we are pioneers of the digital frontier, shaping the future one line of code at a time.
                </p>
                <p className="mbr-text mbr-fonts-style mt-3 mb-0 display-7">
                  Our mission is to revolutionize the web development industry, challenging the status quo and redefining what's possible. With a team of passionate visionaries, we strive to create immersive digital experiences that leave a lasting impact.
                </p>
                <p className="mbr-text mbr-fonts-style mt-3 mb-0 display-7">
                  Join us on this exhilarating journey as we push the boundaries of innovation and set new standards for web development excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        <Projects/>
        <Skills/>
        <div class="py-5 text-center text-info background-info">
    <div class="container">
        <div class="row">
            <div class="mx-auto col-md-12">
                <h1 class="mb-3" contenteditable="true">Meet our team</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-6 p-4"> <img  class="img-fluid d-block mb-3 mx-auto rounded-circle" alt="Card image cap" width="200" src="https://i.imgur.com/Ur43esv.jpg" />
                <h4> <b>John kandy</b> </h4>
                <p class="mb-0">CEO and founder</p>
            </div>
            <div class="col-lg-4 col-md-6 p-4"> <img  class="img-fluid d-block mb-3 mx-auto rounded-circle" alt="Card image cap" src="https://i.imgur.com/8RKXAIV.jpg"  width="200" />
                <h4> <b>Sam ilana</b> </h4>
                <p class="mb-0">Co-founder</p>
            </div>
            <div class="col-lg-4 p-4"> <img  class="img-fluid d-block mb-3 mx-auto rounded-circle" alt="Card image cap" src="https://i.imgur.com/J6l19aF.jpg" width="200" />
                <h4> <b>Maria Samantha</b> </h4>
                <p class="mb-0">HR Manager</p>
            </div>
        </div>
    </div>
</div>
<br />
<br />
<br />
<br />
<br />
<br />
<Footer />
    
    </div>
    
  )
}
