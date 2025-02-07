import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import meter1 from "../assets/img/html.png";
import meter2 from "../assets/img/css.png";
import meter4 from "../assets/img/react.png";
import meter3 from "../assets/img/javascript.png";
import meter5 from "../assets/img/mysql.png";
import meter6 from "../assets/img/mongo-db.png";
import meter7 from "../assets/img/git.png";
import colorSharp from "../assets/img/color-sharp.png";

{/**
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg"; */}

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <br></br>
              <p>
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={meter2} />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter3} />
                  <h5>JAVASCRIPT</h5>
                  <div className="item"></div>
                </div>
                <div className="item">
                  <img src={meter4} />
                  <h5>REACT</h5>
                  <div className="item"></div>
                </div>
                
                <div className="item">
                  <img src={meter5} />
                  <h5>MYSQL</h5>
                  <div className="item"></div>
                </div>


                <div className="item">
                  <img src={meter6} />
                  <h5>MONGODB</h5>
                  <div className="item"></div>
                </div>
                
                
                <div className="item">
                  <img src={meter7} />
                  <h5>GIT</h5>
                  <div className="item"></div>
                </div>              
                </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
