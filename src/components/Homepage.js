import Navbar from "./Navbar";
import "./Homepage.css";
import Myimg from "../Imagesvideos/BavyaImage.png"; // Adjust the path accordingly
// Adjust the path accordingly

export default function Homepage() {
  return (
    <>
      <Navbar />
      <div className="background-animation">
      <div class="intro">
        <h1 class="name">Bavya R</h1>
        <h4 class="intro-spec">Web developer intern & Engineering student</h4>

        <img  class="bavya"src={Myimg} alt="Professional Photo" /> 
        <p class="para">Hello, I'm Bavya R, an enthusiastic and adaptive individual deeply passionate about web development. I reside in Coimbatore and am presently gaining hands-on experience as a web developer intern at Baoiam Innovations Pvt Limited.

I'm currently pursuing my Bachelor of Engineering at Karpagam College of Engineering, Coimbatore. I'm thrilled to have you visit my website. Feel free to explore my profile and accomplishments. Your feedback is always appreciated!
    </p>
      </div>

      <div class="tcs">
        <h1>TCS NQT- IT scores</h1>
        <h5>Completed TCS NQT-IT examination held on October 2023-valid till 2025</h5>
       <br></br>
        <h6><b>Foundation Section: </b>77.97 %</h6>
        <h6><b>Advanced Section: </b>74.21 %</h6>
        <h6><b>Programming Section: </b>72.77 %
</h6>
      </div>
      <br></br>
      <br></br>
      <div class="acheivements">
        <h1>Best Presentation Award</h1>
        <h5>Topic- Manufacturing of Computer chip in India- issued by Karpagam college of Engineering</h5>
        <h1>Academic Excellence Award</h1>
      <h5>Secured First Place in Second End Semester Examination</h5>
      </div>
<div class="home-div2">
  <h1><u>Languages</u></h1>
  
  <h2>English </h2>
  <p>Fluent</p>
  <h2>Tamil</h2>
  <p>Native</p>
  <h2>Hindi</h2>
  <p>Beginner</p>
</div>
</div>
    </>
  );
}
