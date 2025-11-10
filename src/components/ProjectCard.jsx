import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
  return (
    <Col sm={6} md={4} className="mb-4">
      <div
        className="project-card shadow rounded overflow-hidden cursor-pointer hover-scale"
        onClick={() => window.open(githubUrl, "_blank")}
        style={{ transition: "transform 0.3s" }}
      >
        <img
          src={imgUrl}
          alt={title}
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <div className="p-3 bg-white">
          <h5 style={{ fontWeight: "bold", fontSize: "1.1rem" }}>{title}</h5>
          <p style={{ color: "#555", fontSize: "0.9rem" }}>{description}</p>
        </div>
      </div>
    </Col>
  );
};
