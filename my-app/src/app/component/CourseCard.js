import React from 'react'
import '../style/card/coursecard.css'

export const CourseCard = ({course}) => {

  return (
    <div className="card px-3  py-3 course-card">
    <img className="card-img-top  course-card-img"  src="https://campusmonk.in/_next/image?url=https%3A%2F%2Fcdn.campusmonk.in%2Fstrapi%2FNew_Sankalp_3_0_95045478b4.jpg&w=1080&q=75" alt="course"/>
    <div className="pt-1">
      <h5 className="card-title text-truncate course-card-title">{course.name}</h5>
     {course.description && <p className="card-text text-truncate course-card-description">{course.description}</p> }
      {course.price && <div className="d-flex justify-content-between">
      <small className="text-light  course-card-price">₹{course.price}</small>
      <p className=" learn-more-text" >Learn more</p>
      </div>}
    </div>
  </div>
  )
}
