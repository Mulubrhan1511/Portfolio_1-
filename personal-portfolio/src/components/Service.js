import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import '../App.css'; // Import your CSS file for styling

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const ImageWithText = ({ imageSource, altText, textBelow }) => {
    return (
      <div className="item">
        <div className="image-container">
          <img src={imageSource} alt={altText} />
          <div className="text-below">{textBelow}</div>
        </div>
      </div>
    );
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Service</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <ImageWithText imageSource={meter1} altText="Web Development" textBelow="Web Development" />
                <ImageWithText imageSource={meter2} altText="SEO Optimization" textBelow="SEO Optimization" />
                <ImageWithText imageSource={meter3} altText="Website Design" textBelow="Website Design" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};