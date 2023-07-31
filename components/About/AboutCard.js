import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>

          Hello there! I'm <span className="purple">Dineshkumar M</span>, a passionate and creative <span className="purple">graphic designer</span>. Designing has always been my calling, and I thrive on turning imagination into stunning visual realities. Armed with a keen eye for detail and a deep appreciation for aesthetics, 
          I craft designs that not only captivate but also leave a lasting impression.<br/><br/> My journey as a <span className="purple">graphic designer</span> has been one of continuous growth, backed by years of experience and a commitment to staying at the forefront of design trends. Whether it's illustrating, branding, or crafting engaging user experiences, I take great pride in using my skills to make a <span className="purple">positive impact</span>. 
          <br/><br/>When I'm not pushing pixels or experimenting with new design concepts, you can find me exploring the world for inspiration or honing my craft further.  <span className="purple">Let's connect</span> and embark on an exciting creative journey together! <br/> <br/> Apart from designing, some other activities that I love to do!"
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing and Illustration
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming and Animation
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
