import React from 'react'
import '../style/card/coursecard.css'

export const VideoCard = ({course}) => {

  return (
    <div className="card px-1 py-1 course-card">
    <img className="card-img-top  course-card-img"  src="https://campusmonk.in/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F_MoXPYtum34%2Fhq720.jpg&w=1080&q=75" alt="course"/>
    <div className="pt-1">
      <h5 className="card-title text-truncate course-card-title">{course.name}</h5>
     {course.description && <p className="card-text text-truncate course-card-description">{course.description}</p> }
      {course.price && <div className="d-flex justify-content-between">
      <small className="text-light  course-card-price">₹{course.price}.00</small>
      <a className=" learn-more-text" href="#">Learn more</a>
      </div>}
    </div>
  </div>
  )
}
