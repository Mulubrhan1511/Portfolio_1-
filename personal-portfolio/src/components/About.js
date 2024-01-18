import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Particles from "react-tsparticles"; 
import { loadFull } from "tsparticles";
// what is the purpose of loadFull here ?????
export const About = () => {
  return (
    <section className="contact" id="connect">
        <Container>
        <Row>
          <Col size={12}>
            {/* About */}
          </Col>
          </Row>
          </Container>
        <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
    </section>
    
  )
}
