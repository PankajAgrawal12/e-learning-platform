import React from 'react'
import course1 from '../images/course1.png';
import '../styles/CourseCard.css';
function CourseCard({image}) {
  return (
    <>
        <div className="card-conatiner">
            <div className='card-image'>
                <img src={image}/>
                <h5>Tech</h5>
            </div>
            <div className="card-name">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ea! Ipsa, numquam?</p>
            </div>
            <div className="card-footer">
                <h3 style={{ color: 'var(--primary-color)' }}>Rs.1000</h3>
                <button className='card-btn'>Buy Now</button>
            </div>

        </div>
    </>
  )
}

export default CourseCard