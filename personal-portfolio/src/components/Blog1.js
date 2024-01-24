import React from 'react';
import '../assets/css/blog/style.css';
import '../assets/css/blog/style2.css';
import '../assets/css/blog/additional.css';
import '../assets/css/blog/blog.css';
import { Footer } from './Footer';
import firstimg from "../assets/css/blog/img/photo-1516259762381-22954d7d3ad2.jpeg";
import secondimg from "../assets/css/blog/img/photo-1592609931095-54a2168ae893.jpeg";
import thirdimg from "../assets/css/blog/img/photo-1498050108023-c5249f4df085.jpeg";
import fourthimg from "../assets/css/blog/img/photo-1627398242454-45a1465c2479.jpeg";
import fifthimg from "../assets/css/blog/img/photo-1596421250711-9ec0ef9cbba3.jpeg";
import sixthimg from "../assets/css/blog/img/photo-1567468219153-4b1dea5227ea.jpeg";
import seventhimg from "../assets/css/blog/img/photo-1564564244660-5d73c057f2d2.jpeg";
import eighthimg from "../assets/css/blog/img/photo-1589156191108-c762ff4b96ab.jpeg";
import ninthimg from "../assets/css/blog/img/photo-1671212041190-5e1c0c509f11.jpeg";
import tenthimg from "../assets/css/blog/img/photo-1615065591984-6800446436a1.jpeg";

export const Blog1 = () => {
  return (
    <div>
       <section className="header16 cid-u2aLj7b8ns mbr-fullscreen mbr-parallax-background" id="hero-17-u2aLj7b8ns">
        <div className="mbr-overlay" style={{ opacity: 0.3, backgroundColor: 'rgb(0, 0, 0)' }}></div>
        <div className="container-fluid">
          <div className="row">
            <div className="content-wrap  col-md-10 text-center">
              <h1 className="mbr-section-title mbr-fonts-style mbr-white mb-4 display-1">
                <strong>Vibe Blog</strong>
              </h1>
              <p className="mbr-fonts-style mbr-text mbr-white mb-4 display-7">Get ready to dive into the wild world of web development 
              with our vibrant community and inspiring workspace.</p>
              <div className="mbr-section-btn"><a className="btn btn-white-outline display-7" href="#">Explore More</a></div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-2 cid-u2bKxzUROd" id="blog-2-u2bKxzUROd">
    <div className="container-fluid">
        <div className="row justify-content-center mb-5">
            <div className=" content-head">
                <div className="mbr-section-head">
                    <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                        <strong>Latest Blog Posts</strong>
                    </h4>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="item features-image   col-lg-3 active">
                <div className="item-wrapper">
                    <div className="item-img mb-3">
                        <img src={firstimg} />
                    </div>
                    <div className="item-content align-left">
                        <h5 className="item-title mbr-fonts-style mt-0 mb-3 display-7">
                            business
                        </h5>
                        <h6 className="item-subtitle mbr-fonts-style mb-3 display-5">
                            <strong>why you need website for your business</strong>
                        </h6>

                        <div className="mbr-section-btn item-footer">
                            <a href="" className="btn item-btn btn-primary display-7">
                                Read
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item features-image   col-lg-3">
                <div className="item-wrapper">
                    <div className="item-img mb-3">
                        <img src={secondimg} data-slide-to="1" data-bs-slide-to="1" />
                    </div>
                    <div className="item-content align-left">
                        <h5 className="item-title mbr-fonts-style mb-3 mt-0 display-7">
                            Tips
                        </h5>
                        <h6 className="item-subtitle mbr-fonts-style mb-3 display-5">
                            <strong>7 tips to make your website Highly ranked</strong>
                        </h6>
                        <div className="mbr-section-btn item-footer">
                            <a href="" className="btn item-btn btn-primary display-7">
                                Read
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item features-image   col-lg-3">
                <div className="item-wrapper">
                    <div className="item-img mb-3">
                        <img src={thirdimg} data-slide-to="2" data-bs-slide-to="2" />
                    </div>
                    <div className="item-content align-left">
                        <h5 className="item-title mbr-fonts-style mb-3 mt-0 display-7">
                            Innovation
                        </h5>
                        <h6 className="item-subtitle mbr-fonts-style mt-0 mb-3 display-5">
                            <strong>New Gpt model and the futures</strong>
                        </h6>
                        <div className="mbr-section-btn item-footer">
                            <a href="" className="btn item-btn btn-primary display-7">
                                Read
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item features-image   col-lg-3">
                <div className="item-wrapper">
                    <div className="item-img mb-3">
                        <img src={fourthimg} data-slide-to="3" data-bs-slide-to="4" />
                    </div>
                    <div className="item-content align-left">
                        <h5 className="item-title mbr-fonts-style mb-3 mt-0 display-7">
                            Insights
                        </h5>
                        <h6 className="item-subtitle mbr-fonts-style mt-0 mb-3 display-5">
                            <strong>
                                Behind the Scenes
                            </strong>
                        </h6>

                        <div className="mbr-section-btn item-footer">
                            <a href="" className="btn item-btn btn-primary display-7">
                                Read
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="people04 cid-u2bKxzUo1E" id="testimonials-3-u2bKxzUo1E">
	<div className="container">
		<div className="row mb-5 justify-content-center">
			<div className="col-12 mb-0 content-head">
				<h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
					<strong>Rave</strong>
				</h3>	
			</div>
		</div>
      
		<div className="row mbr-masonry" data-masonry="{&quot;percentPosition&quot;: true }">
            
			<div className="item features-without-image   col-md-4 active">
				<div className="item-wrapper">
					<div className="card-box align-left">
						<p className="card-text mbr-fonts-style display-7">
							DevBlog has revolutionized the way I approach coding. It&#x27;s a game-changer!
						</p>
						<div className="img-wrapper mt-4 mb-3">
							<img src={fifthimg} data-slide-to="0" data-bs-slide-to="0" />
						</div>
						<h5 className="card-title mbr-fonts-style display-7">
							<strong>Max Power</strong>
						</h5>
					</div>
				</div>
			</div>
			<div className="item features-without-image   col-md-4">
				<div className="item-wrapper">
					<div className="card-box align-left">
						<p className="card-text mbr-fonts-style display-7">
							I never knew coding could be this exciting and accessible. DevBlog is a game-changer!
						</p>
						<div className="img-wrapper mt-4 mb-3">
							<img src={sixthimg} data-slide-to="1" data-bs-slide-to="1" />
						</div>
						<h5 className="card-title mbr-fonts-style display-7">
							<strong>Luna Code</strong>
						</h5>
					</div>
				</div>
			</div>
			<div className="item features-without-image   col-md-4">
				<div className="item-wrapper">
					<div className="card-box align-left">
						<p className="card-text mbr-fonts-style display-7">
							DevBlog has taken my coding skills to new heights. It&#x27;s a must for any developer!
						</p>
						<div className="img-wrapper mt-4 mb-3">
							<img src={seventhimg} data-slide-to="2" data-bs-slide-to="2" />
						</div>
						<h5 className="card-title mbr-fonts-style display-7">
							<strong>Tech Guru</strong>
						</h5>
					</div>
				</div>
			</div>
			<div className="item features-without-image   col-md-4">
				<div className="item-wrapper">
					<div className="card-box align-left">
						<p className="card-text mbr-fonts-style display-7">
							I&#x27;ve found my coding tribe with DevBlog. It&#x27;s a community like no other!
						</p>
						<div className="img-wrapper mt-4 mb-3">
							<img src={eighthimg} data-slide-to="3" data-bs-slide-to="3" />
						</div>
						<h5 className="card-title mbr-fonts-style display-7">
							<strong>Code Queen</strong>
						</h5>
					</div>
				</div>
			</div>
			<div className="item features-without-image   col-md-4">
				<div className="item-wrapper">
					<div className="card-box align-left">
						<p className="card-text mbr-fonts-style display-7">
							DevBlog has inspired me to push the boundaries of what&#x27;s possible with code. It&#x27;s a game-changer!
						</p>
						<div className="img-wrapper mt-4 mb-3">
							<img src={eighthimg} data-slide-to="4" data-bs-slide-to="4" />
						</div>
						<h5 className="card-title mbr-fonts-style display-7">
							<strong>Code Maverick</strong>
						</h5>
					</div>
				</div>
			</div>
			<div className="item features-without-image   col-md-4">
				<div className="item-wrapper">
					<div className="card-box align-left">
						<p className="card-text mbr-fonts-style display-7">
							I&#x27;ve never felt more supported and inspired in my coding journey. DevBlog is a game-changer!
						</p>
						<div className="img-wrapper mt-4 mb-3">
							<img src={ninthimg} data-slide-to="5" data-bs-slide-to="5" />
						</div>
						<h5 className="card-title mbr-fonts-style display-7">
							<strong>Code Enthusiast</strong>
						</h5>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section className="features037 cid-u2bKxzVPPY" id="features-68-u2bKxzVPPY">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-4">
        <div className="col-12 col-md-12">
          <h5 className="mbr-section-title mbr-fonts-style mt-0 mb-4 display-2" style={{ color: "black" }}>
            <strong>Discover the Possibilities</strong>
          </h5>
          <h6 className="mbr-section-subtitle mbr-fonts-style mt-0 mb-4 display-7" style={{ color: "black" }}>
            Unleash Your Coding Potential with DevBlog&#x27;s Exciting Features
          </h6>
        </div>
      </div>
      <div className="col-lg-8 side-features">
        <div className="item features-without-image col-12 col-md-12 col-lg-6 item-mb active">
          <div className="item-wrapper">
            <div className="item-content align-left">
              <h5 className="card-title mbr-fonts-style display-5" style={{ color: "black" }}>
                <strong>Trending Topics</strong>
              </h5>
              <p className="card-text mbr-fonts-style display-7" style={{ color: "black" }}>
                Stay ahead of the curve with the latest trends and developments in web development.
              </p>
            </div>
          </div>
        </div>
        <div className="item features-without-image col-12 col-md-12 col-lg-6 item-mb active">
          <div className="item-wrapper">
            <div className="item-content align-left">
              <h5 className="card-title mbr-fonts-style display-5" style={{ color: "black" }}>
                <strong>Trending Topics</strong>
              </h5>
              <p className="card-text mbr-fonts-style display-7" style={{ color: "black" }}>
                Stay ahead of the curve with the latest trends and developments in web development.
              </p>
            </div>
          </div>
        </div>
        <div className="item features-without-image col-12 col-md-12 col-lg-6 item-mb active">
          <div className="item-wrapper">
            <div className="item-content align-left">
              <h5 className="card-title mbr-fonts-style display-5" style={{ color: "black" }}>
                <strong>Trending Topics</strong>
              </h5>
              <p className="card-text mbr-fonts-style display-7" style={{ color: "black" }}>
                Stay ahead of the curve with the latest trends and developments in web development.
              </p>
            </div>
          </div>
        </div>
        

        {/* Add similar styling for the remaining items */}
      </div>
    </div>
  </div>
</section>
<br />
<br />
<br />
<Footer />
    </div>
  );
};
