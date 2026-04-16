import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubUrl, liveUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} style={{ width: "100%", height: "220px", objectFit: "cover" }} />

        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>

          <div className="proj-buttons">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>

            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                Live
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};