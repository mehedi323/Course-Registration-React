 
import { useState } from 'react'
import './App.css' 
import Block from './Components/Course/Block'
import Course from './Components/Course/Course'
import Header from './Components/Header/Header'
 
function App() {
    const [course, setCourse]= useState([])
    const handleAllCourse = blogs =>{ 
    const newAllCoures = [...course, blogs]; 
    setCourse(newAllCoures);
    console.log(course);
    };
    
  return (
    <> 
       <Header></Header>
       <div className='md:flex mt-8'>
        <Block handleAllCourse={handleAllCourse} ></Block> 
        <Course course={course}></Course>
       </div>
    </>
  )
}
 
export default App

 
 


 
 