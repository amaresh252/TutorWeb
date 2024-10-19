"use client"
import React from 'react'
import { CourseCard } from '../../component/CourseCard';
import '../../style/home/home.css'
import { Navbar } from '@/app/component/Navbar';
import { Footer } from '@/app/component/Footer';
import Link from 'next/link';

const Courses = () => {
    const courses = [
        {
          name: "Web Development Bootcamp",
          description:
            "Learn to build responsive websites using HTML, CSS, JavaScript, and more. This course covers front-end and back-end development, including hands-on projects.",
          price: 199.99,
        },
        {
          name: "Data Science with Python",
          description:
            "Master the fundamentals of data analysis, machine learning, and statistical modeling using Python libraries like Pandas, NumPy, and Scikit-learn.",
          price: 249.99,
        },
        {
          name: "Digital Marketing MasterclassName",
          description:
            "Become proficient in SEO, social media marketing, email marketing, and online advertising to drive traffic and grow online presence.",
          price: 149.99,
        },
        {
          name: "Introduction to Graphic Design",
          description:
            "Learn the principles of design, typography, and color theory using tools like Adobe Photoshop and Illustrator. No prior experience needed.",
          price: 99.99,
        },
        {
          name: "Advanced Java Programming",
          description:
            "Enhance your Java skills by learning about multi-threading, concurrency, data structures, and algorithms through practical examples and coding challenges.",
          price: 179.99,
        },
      ];
  return (
    <>
    <Navbar/>
    <div className="mb-4">
      
    <div className="course-page-heading" style={{background:'#F973161A'}}>
            <h4 className="text-white course-text">Courses</h4>
        </div>
        <div className="course-section mt-3 px-3">
        <div className="d-flex justify-content-between align-items-center mx-2 px-5">
          <h4 className="text-white course-text">Courses</h4>
          <a href="#" className="expand">
            See all
          </a>
        </div>
        <div className="row px-5">
          {courses.map((course, index) => {
            return (
              <div className="col-lg-3 col-md-6 gx-5 gy-3 mb-5" key={index}>
              <Link href='/pages/courses'> <CourseCard course={course} /></Link> 
              </div>
            );
          })}
        </div>
        
      </div>
     
    </div>
    <Footer/>
    </>
  )
}

export default Courses;
