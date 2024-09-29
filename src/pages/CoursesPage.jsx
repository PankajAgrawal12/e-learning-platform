import React from 'react'
import customData from '../courses.json';
import CourseCard from '../components/CourseCard';
import '../styles/CoursesPage.css';

import course1 from '../images/course1.png';
import course2 from '../images/course2.png';
import course3 from '../images/course3.png';
import course4 from '../images/course4.png';
import course5 from '../images/course5.png';
import { FaSearch } from "react-icons/fa";


function CoursesPage() {
  return (
    <div>
      <div className="search-container">
        <div className="search-bar">
          <input type='text' placeholder='Full-stack'/>
        </div>
        <button className='search-btn'>
        <FaSearch size={25}/>
        </button>
      </div>
        <div className="search-categories">
          <button>Tech</button>
          <button>Non-tech</button>
          <button>Business</button>
          <button>Communication</button>
          <button>Leadership</button>
          <button>Personal Development</button>
        </div>
      <div className="course-container">
      <CourseCard image={course2}/>
      <CourseCard image={course2}/>
      <CourseCard image={course2}/>
      <CourseCard image={course2}/>
      <CourseCard image={course2}/>
      <CourseCard image={course2}/>
      <CourseCard image={course2}/>
      <CourseCard image={course2}/>

      </div>
    </div>
  )
}

export default CoursesPage