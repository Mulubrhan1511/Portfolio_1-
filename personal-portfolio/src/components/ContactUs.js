import React from 'react'
import { Footer } from "./Footer";
import { Contact } from "./Contact";
import TestimonialSection from './TestimonialSection';
export const ContactUs = () => {
  return (
    <div>
      <TestimonialSection />
<Contact />
<section class="contacts03 cid-u25FX3af2s" id="contacts-11-u25FX3af2s">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-4">
        <div class="col-12 col-md-12">
          <h5 class="mbr-section-title mbr-fonts-style mt-0 mb-4 display-2">
            <strong>Contact Us</strong>
          </h5>
          <p class="mbr-section-subtitle mbr-fonts-style mt-0 mb-4 display-7">
            Phone: <a href="#">+25193703555</a>
            <br /> Phone: <a href="#">+25193703555</a>

            <br />Email: info@harifsite.com
            <br />Email: contact@harifsite.com
            <br />Address:  Ethiopia
            <br />Working Hours: Mon - Fri: 9am - 6pm</p> 
        </div>
      </div>
      <div className="col-lg-8 side-features">
      <div className="google-map">
        <iframe
          title="Google Map"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3160.916694529148!2d9.03838331523853!3d38.76328897958925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1498a9a5a6a6a6a6%3A0x7fc7e3e9b4e8e4e6!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1642734370495!5m2!1sen!2sus"
          allowFullScreen=""
        ></iframe>
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
