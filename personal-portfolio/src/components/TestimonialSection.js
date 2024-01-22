import React, {useState, useEffect} from 'react';
import FirstImg from '../assets/img/first.jpeg';

const TestimonialSection = () => {
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
    <section className="gradient-custom">
       
      <div className="container my-5 py-5">
      
        <div className="row d-flex justify-content-center">
        
          <div className="col-md-12">
          <div className="text-center mb-4 pb-2">
          <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
              <strong>Our Clients</strong>
            </h4>
</div>

            
            
            
            <div className="card">
              <div className="card-body px-4 py-5">
                <div id="carouselDarkVariant" className="carousel slide carousel-dark" data-mdb-ride="carousel">
                  <div className="carousel-indicators mb-0">
                    
                    
                  </div>

                  <div className="carousel-inner pb-5">
                    
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
        <h4 className="mb-4" style={{ color: '#000000' }}>{testimonials[currentTestimonialIndex].name}</h4>
        <p className="mb-0 pb-3" style={{ color: '#000000' }}>
        {testimonials[currentTestimonialIndex].content}
        </p>
      </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Other carousel items */}

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

          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
