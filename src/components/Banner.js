import { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/robot3Dgif.mp4";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          ¨{/*se crea el cuerpo despues los hooks col xs={12} md={6} xl={7}*/}
          <Col>
            <span className="tagline">Welcome</span>
            <h1>
              {`Hi I'm Andrea ML `}<br></br>
              <span className="wrap">{text}</span>
            </h1>
            {/**se quita web dev y se agg {text} */}
            <p> Apasionada por crear experiencias digitales únicas, siempre buscando hacer de ellas algo agradable e intuitivo. Mi objetivo es asegurarme de que cada usuario disfrute de una interacción única y dinámica, sin importar lo complejo que sea el reto.
            </p>
            <button onClick={() => console.log("connect")}>
              Let's connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <video width="100%" height="auto" autoPlay loop muted>
              <source src={headerImg} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/**
            <img src={headerImg} alt="gif" /> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
