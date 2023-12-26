import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Homepage from './components/Homepage';
import Skills from './components/Skills';
import Edcation from './components/Education';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';
function App() {
  return (
    <>
<Routes>
  <Route path="/" element={<Homepage/>}></Route>
  <Route path="/skills" element={<Skills/>}></Route>
  <Route path="/education" element={<Edcation/>}></Route>
  <Route path="/experience" element={<Experience/>}></Route>
  <Route path="/project" element={<Project/>}></Route>
  <Route path="/contact" element={<Contact/>}></Route>
<Route path="/ResponsivePortfolio" element={<Navigate to="/" />} />
      
      {/* Catch-all route */}
      <Route path="*" element={<NotFound />} /> {/* Replace NotFound with your component */}
    </Routes>
</Routes>
    </>
  );
}

export default App;
