import React from 'react'
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import "./components/Style.css"
import Heightlight from './components/Heightlight';
import Placement from './components/Placement';
import SubjectHeading from './components/SubjectHeading';
import SubjectName from './components/SubjectName';
import Footer from './components/Footer';

const App = () => {
       
  return (
   <>
   <Navbar/>
   <Slider/>
   <Heightlight/>
   <Placement/>
   <SubjectHeading/>
   <SubjectName/>
   <Footer/>
   </>
  )
}

export default App


