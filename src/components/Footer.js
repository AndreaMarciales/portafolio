import { Container, Row, Col } from "react-bootstrap";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/icons8-github (1).svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/**sin <MailchimpForm /> */}
          <Col size={12} sm={6}>
          <h2>ANDREA ML</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/andrea-marciales-8746092b1/" target="_blank" ><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/AndreaMarciales" target="_blank" ><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/_liiitta_/"  target="_blank" ><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}