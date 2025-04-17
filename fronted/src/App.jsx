

import './App.css'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import About from './portfolio/About/about.jsx'
import Chenchaiah from './portfolio/Chenchaiah/Chenchaiah.jsx'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import AllProjects from './portfolio/Project/AllProjects.jsx'
import Skill from './portfolio/Skills/Skill.jsx'
import Education from './portfolio/Education/Education.jsx'
import Certificates from './portfolio/Certificates/Certificates.jsx'
import Exp from './portfolio/Experience/Exp.jsx'
import Contact from './portfolio/Contact/Contact.jsx'
import Resume from './portfolio/Resume/Resume.jsx'
import ScrollToTop from './portfolio/ScrollToTop.jsx'

import Bitcoin from './portfolio/Project/ProjectData/Bitcoin.jsx'
import Ai from './portfolio/Project/ProjectData/Ai.jsx'
import RGA from './portfolio/Project/ProjectData/RGA.jsx'
import Wonderlust from './portfolio/Project/ProjectData/Wonderlust.jsx'
import Chatgpt from './portfolio/Project/ProjectData/Chatgpt.jsx'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"



function App() {


  return (
  <>
   <BrowserRouter>
 <ScrollToTop/>
   <Navbar/>
   <Routes>


   <Route path='/project/bitcoin' element={<Bitcoin/>} />
    <Route path='/project/ai' element={<Ai/>} />
    <Route path='/project/rga' element={<RGA/>} />
    <Route path='/project/gpt' element={<Chatgpt/>} />
    <Route path='/project/wonderlust' element={<Wonderlust/>} />



    <Route path='/' element={<Chenchaiah/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/projects' element={<AllProjects/>} />
    <Route path='/skills' element={<Skill/>} />
    <Route path='/education' element={<Education/>} />

    <Route path='/certificates' element={<Certificates/>} />
    <Route path='/experience' element={<Exp/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/resume' element={<Resume/>} />



   </Routes>
   <Footer/>
   </BrowserRouter>
  </>
  )
}

export default App
