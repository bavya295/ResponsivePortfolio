import"./Contact.css"
import Navbar from "./Navbar";
import resume from "../Imagesvideos/Bavya R_Resume..pdf"
export default function Contact(){
    return(
        <>
        <Navbar/>
        <div class="contact">
            <br></br>
            <br></br>
            <h1>Contact me! and Hire me!</h1>
            <br></br>
            <br></br>
            <h2>Coimbatore,Tamilnadu, India</h2>
            <br></br>
            <h2>Mail me at: <a href="mailto:bavya295@gmail.com">bavya295@gmail.com</a></h2>
            <h2>phone <a href="tel:+919791460973">9791460973</a></h2>
    <h2>Linkedin <a href="https://www.linkedin.com/in/bavya295/
">www.linkedin.com/in/bavya295
</a></h2>
<h2>Github: <a href="https://github.com/bavya295">https://github.com/bavya295</a></h2>
<br></br>
<br></br>
<h1>Review my Resume</h1>
<embed  id="pdfEmbed" src={resume} type="application/pdf" width="100%" height="600px" />

        </div>
        </>
    )
}