import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, button }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {/* Si el objeto button existe, mostramos el botón */}
          {button && (
            <a href={button.link} target="_blank" className="btn btn-primary">
              {button.text}
            </a>
          )}
        </div>
      </div>
    </Col>
  );
};
