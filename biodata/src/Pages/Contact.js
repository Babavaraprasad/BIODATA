import "./Contact.css";
import Gmail from "../Images/Gmail.png";
import LinkedIn from "../Images/LinkedIn.png";
import Github from "../Images/Github.png";
import { useNavigate } from "react-router";

export const Contact=()=>{
    const navigate=useNavigate();
    const gmail="https://gmail.google.com/inbox/";
    function navigatetoGmail(){
        navigate(gmail);}
    return(
    
<div className="conatct-info">
<h2>Contact Info</h2>
   <h4><p>Mobile : +45 28157743</p></h4>
   <h4><p>Address : Egedalsvaenge 33, 1 mf, 2980, kokkedal, Denmark</p></h4>  
   <img src={Gmail} onClick={navigatetoGmail}></img>
   <img src={LinkedIn}></img>
   <img src={Github}></img>
</div>
);}