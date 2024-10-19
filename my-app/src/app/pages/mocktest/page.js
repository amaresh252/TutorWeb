"use client"

import React from 'react'
import '../../style/home/home.css'
import { CourseCard } from '@/app/component/CourseCard'
import { Navbar } from '@/app/component/Navbar'
import { Footer } from '@/app/component/Footer'
import Link from 'next/link'

 const  Mocktest = () => {
    const tests = [
        {
          name: "Test1: Intro to Programming",
          price: 49.99,
        },
        {
          name: "Test2: Advanced Python Techniques",
          price: 79.99,
        },
        {
          name: "Test3: Full Stack Web Development",
          price: 129.99,
        },
        {
          name: "Test4: Machine Learning Basics",
          price: 99.99,
        },
        {
          name: "Test5: Data Structures & Algorithms",
          price: 59.99,
        },
        {
          name: "Test6: Mobile App Development",
          price: 89.99,
        },
        {
          name: "Test7: Cybersecurity Fundamentals",
          price: 109.99,
        },
      ];
  return (
    <>
    <Navbar/>
    <div className="mb-4">
    <div className="course-page-heading" style={{background:'#F973161A'}}>
            <h4 className="text-white course-text">Mocktests</h4>
        </div>
        <div className="course-section mt-3 px-3">
        <div className="d-flex justify-content-between align-items-center mx-2 px-5">
          <h4 className="text-white course-text">Mocktests</h4>
          <a href="#" className="expand">
            See all
          </a>
        </div>
        <div className="row px-5">
          {tests.map((test, index) => {
            return (
              <div className="col-lg-3 col-md-6 gx-5 gy-3 mb-5" key={index}>
                <Link href="/pages/mocktest">  <CourseCard course={test} /></Link>
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

export default Mocktest;
