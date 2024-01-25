import React, {useState, useEffect} from 'react';
import { Footer } from "./Footer";
import { Contact } from "./Contact";
import '../assets/css/contact/style.css';
import '../assets/css/blog/style.css';
import '../assets/css/blog/style2.css';
import '../assets/css/blog/additional.css';
import '../assets/css/blog/blog.css';
import FirstImg from '../assets/img/first.jpeg';
import TestimonialSection from './TestimonialSection';
export const ContactUs = () => {
  const testimonials = [
    {
    img: FirstImg,
      name: 'Maria Smantha - Web Developer',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
    },
    {
        img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
      name: 'Maria Smantha - Web Developer2',
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur."
      ,
    },
    {
        img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
      name: 'Lisa Cudrow - Graphic Designer',
      content: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.',
    },
    {
        img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
      name: 'John Smith - Marketing Specialist',
      content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.',
    },
    // Add more testimonials as needed
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handlePreviousTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change testimonial every 10 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);
  return (
    <div>
      <section className="header16 cid-u2aLj7b8ns mbr-fullscreen mbr-parallax-background" id="hero-17-u2aLj7b8ns">
        <div className="mbr-overlay" style={{ opacity: 0.3, backgroundColor: 'rgb(0, 0, 0)' }}></div>
        <div className="container-fluid">
          <div className="row">
            <div className="content-wrap  col-md-10 text-center">
              <h1 className="mbr-section-title mbr-fonts-style mbr-white mb-4 display-1">
                <strong>Our Customer</strong>
              </h1>
              <div className="carousel-item active">
                      <div className="row d-flex justify-content-center">
                        <div className="col-lg-10 col-xl-8">
                          <div className="row">
                            <div className="col-lg-4 d-flex justify-content-center">
                              <img src={testimonials[currentTestimonialIndex].img}
                                className="rounded-circle shadow-1 mb-4 mb-lg-0" alt="woman avatar" width="150"
                                height="150" />
                            </div>
                            <div className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                            <h6 className="card-title mbr-fonts-style mb-3 display-5" style={{ color: 'black' }}>
                  <strong>{testimonials[currentTestimonialIndex].name}</strong>
                </h6>
        <p className="mb-0 pb-3" style={{ color: '#ffffff' }}>
        {testimonials[currentTestimonialIndex].content}
        </p>
      </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-mdb-target="#carouselDarkVariant"
                    data-mdb-slide="prev" onClick={handlePreviousTestimonial}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-mdb-target="#carouselDarkVariant"
                    data-mdb-slide="next" onClick={handleNextTestimonial}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
            </div>
          </div>
        </div>
      </section>
      
<Contact />
<section class="contacts01 cid-u2gKEHAKYQ" id="contacts-1-u2gKEHAKYQ" >
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 content-head">
                <div class="mbr-section-head mb-5">
                    <h3 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2" style={{ color: 'black' }}>
                        <strong>Contact Us</strong>
                    </h3>
                </div>
            </div>
        </div>
        <div class="row" >
        <div className="col-12 col-md-4 active" style={{ backgroundColor: 'white', borderRadius: '40px', width:'450px' ,height: '180px', padding: '35px', marginTop:'50px',marginRight:'50px' }}>
            <div className="item-wrapper">
              <div className="text-wrapper">
                <h6 className="card-title mbr-fonts-style mb-3 display-5" style={{ color: 'black' }}>
                  <strong>Phone</strong>
                </h6>
                <p className="mbr-text mbr-fonts-style display-7" style={{ color: 'black' }}>
                  <a href="tel:+1234567890" className="text-black">+1234567890</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 active" style={{ backgroundColor: 'white', borderRadius: '40px', width:'450px' ,height: '180px', padding: '35px', margin:'50px' }}>
            <div className="item-wrapper">
              <div className="text-wrapper">
                <h6 className="card-title mbr-fonts-style mb-3 display-5" style={{ color: 'black' }}>
                  <strong>Email</strong>
                </h6>
                <p className="mbr-text mbr-fonts-style display-7" style={{ color: 'black' }}>
                <a href="mailto:info@devgenius.com" class="text-black">info@devgenius.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 active" style={{ backgroundColor: 'white', borderRadius: '40px', width:'450px' ,height: '180px', padding: '35px', marginTop:'50px',marginRight:'50px' }}>
            <div className="item-wrapper">
              <div className="text-wrapper">
                <h6 className="card-title mbr-fonts-style mb-3 display-5" style={{ color: 'black' }}>
                  <strong>Address</strong>
                </h6>
                <p className="mbr-text mbr-fonts-style display-7" style={{ color: 'black' }}>
                Ethiopia
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 active" style={{ backgroundColor: 'white', borderRadius: '40px', width:'450px' ,height: '180px', padding: '35px', margin:'50px' }}>
            <div className="item-wrapper">
              <div className="text-wrapper">
                <h6 className="card-title mbr-fonts-style mb-3 display-5" style={{ color: 'black' }}>
                  <strong>Working Hours</strong>
                </h6>
                <p className="mbr-text mbr-fonts-style display-7" style={{ color: 'black' }}>
                Mon - Fri: 9am - 6pm
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
</section>
<br />
<br />
<br />
<br />
<br />
        <Footer />
    </div>
  )
}
