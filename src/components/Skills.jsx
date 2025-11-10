import meter1 from "../assets/image/meter1.svg";
import meter2 from "../assets/image/meter2.svg";
import meter3 from "../assets/image/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/image/arrow1.svg";
import arrow2 from "../assets/image/arrow2.svg";
import colorSharp from "../assets/image/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I am proficient in building modern web applications using <strong>React</strong> for dynamic front-end development
                and <strong>ASP.NET</strong> for back-end APIs and server-side applications.
                I also have experience with <strong>HTML, CSS, JavaScript, Bootstrap, and responsive design</strong>.
                My focus is on writing clean, maintainable code and delivering engaging user experiences.
              </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="React JS" />
                  <h5>React JS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="ASP.NET" />
                  <h5>ASP.NET</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="JavaScript" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Databases" />
                  <h5>XAMPP / MongoDB</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Bootstrap & Tailwind" />
                  <h5>Bootstrap & Tailwind</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Git & GitHub" />
                  <h5>Git & GitHub</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Responsive Design" />
                  <h5>Responsive Design</h5>
                </div>
              </Carousel>

            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}