
import Babavaraprasad from '../Images/Babavaraprasad.jpg';
import "./Home.css";
//style={{height:'85%', width:'35%',margin:'60px'}}
function Home() {
  return (
    <div className='main-container'>
      <div className='left-container'>
        <img style={{height:'82%', width:'62%',margin:'70px'}} src={Babavaraprasad} alt='No picture for the resource'/>

      </div>
      <div className="right-container">
       <h1><i>About me</i></h1>
       <h4>I'm a full stack developer passionate about programming with 3 years of professional expertise working in agile environment

       </h4>
      </div>
    </div>
  );
}
export default Home;
