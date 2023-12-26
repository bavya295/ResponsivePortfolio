import"./Education.css"
import Navbar from "./Navbar";
import college from "../Imagesvideos/college.jpeg"
import school from "../Imagesvideos/school.jpeg"
export default function Edcation(){
    return(
        <>
        <Navbar/>
        
        <div class="education">
            <img src={college}></img>
            <h1>Bachelors of Engineering</h1>
            <h4>Karpagam College of Engineering, Coimbatore</h4>
            <h6>CGPA: 9.1</h6>
            <p>2021-2025</p>
            <br>
            </br>
            <img src={school}></img>
            <h1>Higher Secondary</h1>
            <h4>Sri Visweswara Vidyalaya mat.hr.sec.school, Coimbatore</h4>
            <h6>Percentage: 91</h6>
            <p>2020-2021</p>
            <br></br>
            <h1>SSLC</h1>
            <h4>Sri Visweswara Vidyalaya mat.hr.sec.school, Coimbatore</h4>
            <h6>Percentage: 90</h6>
            <p>2018-2019</p>
        </div>
        </>
    )
}