import "./Navbar.css"
import{Link} from "react-router-dom"
import { useState } from "react";
export default function Navbar(){
  const [sfound, setSfound] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [foundSkill, setFoundSkill] = useState('');

  const searchSkill = () => {
    let skills = [
      "java", "core java", "java","C", "C programming", "HTML", "css", "jAVASCRIPT", "react.js",
      "web development", "frontend development", "communication skill", "problem solving", "Data structures","Datastructures","dsa",
      "leadership skill", "decision making skills", "Time management"
    ];
    let ips = document.getElementById("a-ip").value.toLowerCase();

    let found = skills.some((k) => k.toLowerCase() === ips);

    setSfound(found ? 'found' : 'not-found');
    setShowModal(true);

    if (found) {
      setFoundSkill(ips);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    document.getElementById("a-ip").value="";
  };





    return(
        <>
            <nav
  class="navbar navbar-expand-sm navbar-light bg-dark"
  style={{ padding: '20px', fontSize: '24px', color: 'white' }}
>
  <div class="container-fluid">
  <Link to="/" style={{textDecoration:"none"}}>
    <a class="navbar-brand" href="#" style={{ color: 'white' }}>
        Bavya R
    </a>
    </Link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarID"
      aria-controls="navbarID"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarID">
      <div class="navbar-nav">
        <Link to="/skills" style={{textDecoration:"none"}}>
        <a
          class="nav-link active"
          aria-current="page"
          href="#"
          style={{ color: 'white'}}
        >
          Skills
        </a>
        </Link>
        <Link to="/education" style={{textDecoration:"none"}}>
        <a
          class="nav-link active"
          aria-current="page"
          href="#"
          style={{ color: 'white' }}
        >
          Education
        </a>
        </Link>
        <Link to="/experience" style={{textDecoration:"none"}}>
        <a
          class="nav-link active"
          aria-current="page"
          href="#"
          style={{ color: 'white' }}
        >
          Experience
        </a>
        </Link>
        <Link to="/experience" style={{textDecoration:"none"}}>
        <a
          class="nav-link active"
          aria-current="page"
          href="#"
          style={{ color: 'white' }}
        >
          Certification
        </a>
        </Link>
        <Link to="/project" style={{textDecoration:"none"}}>

        <a
          class="nav-link active"
          aria-current="page"
          href="#"
          style={{ color: 'white' }}
        >
          Projects
        </a>
        </Link>
        <Link to="/contact" style={{textDecoration:"none"}}>
        <a
          class="nav-link active"
          aria-current="page"
          href="#"
          style={{ color: 'white' }}
        >
          Contact
        </a>
        </Link>
        <a>
        <input type="text" className="a-ip" id="a-ip"placeholder='search skills..'></input> 
      <button type="submit" onClick={searchSkill} class="search-button"><i className="fas fas-search"></i>&#x1F50D;</button>
{showModal && (
        <div className="modal" style={{ display: 'block'  }}>
          <div className="modal-content" style={{backgroundColor:'black' , position:'relative',top:'60px',color:'pink',cursor:'pointer'}}>
            <span className="close" onClick={closeModal}>&times;</span>
           
            {sfound === 'found' ? (
              <>
                <h2>Skill Found!</h2>
                <p>{foundSkill} is in the list of skills.</p>
              </>
            ) : (
              <>
                <h2>Skill Not Found</h2>
                <p>{foundSkill} will be learnt by Bavya.</p>
              </>
            )}
          </div>
        </div>
        
      )}
        </a>
      </div>
    </div>
  </div>
</nav>

        </>
    )
}