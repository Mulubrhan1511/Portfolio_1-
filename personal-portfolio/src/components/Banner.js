import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import headerImg from "../assets/img/header-img.svg";
import diagonalImg from "../assets/img/diagonal.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developers", "Web Designers", "UI/UX Designers","Data Analysts" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
        <Col xs={12} md={6} xl={5} className="position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center z-index-0">

<TrackVisibility>
  {({ isVisible }) =>
    <svg className={isVisible ? "diagonal-move animate__animated animate__zoomIn" : "diagonal-move"}>
      <image href={headerImg} alt="Header Img" />
    </svg>
  }
</TrackVisibility>
</Col>
        <Col xs={12} md={6} xl={7} className="position-relative z-index-1">
  <TrackVisibility>
    {({ isVisible }) =>
      <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
        <span className="tagline">Thank you for visiting Harifsite</span>
        <h1>{`we are`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developers", "Web Designers", "UI/UX Designers" ]'><span className="wrap">{text}</span></span></h1>
        <p>Harifs  developers are a team of website designers and developers with graphics design works as well any data analtics solution for all type's of customers  </p>
        <button onClick={() => console.log('connect')}>Read more<ArrowRightCircle size={25} /></button>
      </div>
    }
  </TrackVisibility>
</Col>

<Col xs={12} md={6} xl={5} className="position-relative z-index-1">
  <TrackVisibility>
    {({ isVisible }) =>
      <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
        <img src={diagonalImg} alt="Header Img" className="img-behind" />
      </div>
    }
  </TrackVisibility>
</Col>



        </Row>
      </Container>
    </section>
  )
}
