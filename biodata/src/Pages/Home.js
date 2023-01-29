import { Link } from "react-router-dom";
import Babavaraprasad from "../Images/Babavaraprasad.jpg";
import "./Home.css";
import { NextButton } from "../Components/NextButton";
//style={{height:'85%', width:'35%',margin:'60px'}}
function Home() {
  return (
    <>
      <div className="navigation-bar">
        <Link to="/Projects">Projects</Link>
        <Link to="/WorkExperience">work experince & Education</Link>
        <Link to="/Skills">skills</Link>
        <Link to="/Contact">contact</Link>
      </div>
      <div className="main-container">
        <div className="left-container">
          <img
            style={{ height: "82%", width: "62%", margin: "70px" }}
            src={Babavaraprasad}
            alt="No picture for the resource"
          />
        </div>
        <div className="right-container">
          <h1>
            <i>About me</i>
          </h1>
          <h4>
            <div>
            I'm Baba, a master's graduate at IT University of Copenhagen in software design
            and development specializing in Technical Interaction Design. By
            god's grace, pursuing my master's has had a profoundly good effect
            on my life. Throughout my studies, I have acquired life skills such
            as Time Management, Communication, Team Collaboration, Punctuality,
            Presentations, and Documentation. 
            </div>
            <br/>
            <div>
            I'm a full stack developer passionate about programming with 3 year's
            of professional expertise working in agile environment. I'm interested in applying my
            knowledge and shaping my career toward technology that makes human
            lives digitalize and sustainable. I enjoy working in a team and am a
            good communicator. I'm more committed to the work that I wouldn't
            mind extending my personal space to achieve the desired goal and do
            not compromise on the quality of my delivery.
            </div>
            <br/>
            <div>
            Being a professional
            Software Developer for 3 years, I enjoy writing clean
            code following Industry standards and maintaining consistent quality
            of the build. My biggest strength is concentrating on delivering
            products that are high-performing, bug-free, and deliverable on time
            to the client.
            </div>  <br/>
            <div>
             I make sure to conduct several testing techniques,
            such as Unit Testing, Manual Testing, Regression Testing, and Smoke
            Testing to assure the accuracy of the developed software.
            </div>  <br/>
            </h4>
            <div>
            <NextButton/>
            </div>
        </div>
      </div>
    </>
  );
}
export default Home;
