import Navbar from "./Navbar";
import "./Project.css";
import project from "../Imagesvideos/project.jpg"
export default function Project(){
    return(
        <>
        <Navbar/>
        <div class="project">
            <br></br>
            <br></br>
            <h1>Quiz website for Tamilnadu Competitve exams</h1>
            <h4>Skills: React.js,Bootstrap,JavaScript,HTML5,CSS</h4>
            <li>This is an online practice website exclusively made for Tamilnadu exams</li>
            <li>The major functionalities are Register,Login,Dashbord,Questions with answer,Doubt section, Feedback section</li>
            <li>The Frontend part is completed for this website and Backend is in the process and expected to be completed by january 2024</li>
            <p>Dec 2023- Jan 2024(expected date)</p>
            <br></br>
            <br></br>
            <h1>Automatic Accident Detector</h1>
            <img src={project}></img>
            <br></br>
            <h4>Skills: Embedded C and Embedded Systems</h4>
            
            <li>This project is based on Arduino developed for sending message to the family members when a person met with an accident.</li>
           <li>Arduino’s limited memory and processing power required efficient code and resource management. I wrote optimized code and utilized dynamic memory allocation techniques to ensure the GPS interface didn’t strain the Arduino’s resources, making it suitable for a wide range of applications.</li>
           <p>Aug 2023- Oct 2023</p>
            <br></br>
            <br></br>
            <h1>Bus Timing management System</h1>
            <h4>Skills: Java, DBMS</h4>
            <li>This is an console based application using jdbc with the objective of  storing  bus datas in MySql database.</li>
       <li>Created an Register/Login page separately for admin and user to perform CRUD operations</li>
        <p>May 2023</p>
        </div>
        </>
    )
}