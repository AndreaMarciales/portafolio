import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/restaurante.png";
import projImg2 from "../assets/img/TecnoSoft.png";
import projImg3 from "../assets/img/CafeBlog.png";
import projImg4 from "../assets/img/coa.png";
import projImg5 from "../assets/img/crud.png";
import projImg6 from "../assets/img/port.png";

{
  /** se importa card */
}

export const Projects = () => {
  const projects = [
    {
      title: "RESTAURANTE ",
      description: "HTML || CSS || JS",
      imgUrl: projImg1,
      button: {
        text: "View Project",
        link: "https://andreamarciales.github.io/restaurant/",
      },
    },
    {
      title: "TECNOSOFT",
      description: "HTML || CSS || JS",
      imgUrl: projImg2,
      button: {
        text: "View Project",
        link: "https://andreamarciales.github.io/TecnoSoft/",
      },
    },
    {
      title: "BLOG CAFE",
      description: "HTML || CSS",
      imgUrl: projImg3,
      button: {
        text: "View Project",
        link: "http://andreamarciales.github.io/BlogCafe/",
      },
    },
    {
      title: "COA",
      description: "JS || CSS || PHP || MySQL  ",
      imgUrl: projImg4,
      button: {
        text: "View Project",
        link: "https://drive.google.com/file/d/1mjj-gSB4dDJb8PwAibBcZosfsLoJOzkm/view?usp=sharing",
      },
    },
    {
      title: "CRUD",
      description: " React || Bootstrap || Json Server",
      imgUrl: projImg5,
      button: {
        text: "View Project",
        link: "",
      },
    },

    {
      title: "PORTAFOLIO",
      description: " CSS || JS || React || Bootstrap",
      imgUrl: projImg6,
      button: {
        text: "View Project",
        link: "https://drive.google.com/file/d/1mjj-gSB4dDJb8PwAibBcZosfsLoJOzkm/view?usp=sharing",
      },
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Cada proyecto es una nueva oportunidad para aprender, crecer y
              aportar algo positivo.
            </p>

            {/** nav se react bootstrap */}

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              {/**<Nav variant="pills" defaultActiveKey="first" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav> */}
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                      {
                        /**
                                <p>{project.title}</p> */
                      }
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  Lorem ipsum dolor sit amet
                </Tab.Pane>
                <Tab.Pane eventKey="third">Lorem ipsum dolor sit amet</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
