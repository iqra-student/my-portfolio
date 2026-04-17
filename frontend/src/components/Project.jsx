import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/image/project-img1.png";
import projImg2 from "../assets/image/project-img2.png";
import projImg3 from "../assets/image/project-img3.png";
import projImg4 from "../assets/image/project-img4.png";
import projImg5 from "../assets/image/project-im4.png";
import projimg6 from "../assets/image/projimg6.png";
import colorSharp2 from "../assets/image/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
     {
      title: "Full Stack Ecommerce Website",
      description: "MERN STACK Ecommerce Project",
      imgUrl: projImg5,
      githubUrl: "https://ecommerce-website-neon-omega.vercel.app/"
    },
    {
      title: "React Dice Game",
      description: "Interactive dice rolling game in React.",
      imgUrl: projImg1,
      githubUrl: "https://github.com/iqra-student/React-Dice-Game"
    },
    {
      title: "Foody Zone",
      description: "Restaurant website with responsive design.",
      imgUrl: projImg2,
      githubUrl: "https://github.com/iqra-student/Foody-Zone"
    },
    {
      title: "VidelyProject",
      description: "Movies Web using ASP.NET.",
      imgUrl: projImg3,
      githubUrl: "https://github.com/iqra-student/VidelyProject"
    },
    {
      title: "Full Stack Restaurant App",
      description: "ASP.NET React Food Ordering Project",
      imgUrl: projImg4,
      githubUrl: "https://github.com/iqra-student/FullStackRestaurantApp"
    },
    {
      title: "WordPress Website Redesign",
      description: "Wordpress website redesign for a local business.",
      imgUrl: projimg6,
      githubUrl: "https://iqra.nextgendebug.com/"
    },
   
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {/* ...Nav items */}
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              title={project.title}
                              description={project.description}
                              imgUrl={project.imgUrl}
                              githubUrl={project.githubUrl}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>


                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>

          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}