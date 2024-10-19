"use client"

import React from 'react'
import "../../style/home/home.css";
import { VideoCard } from '@/app/component/VideoCard';
import { Navbar } from '@/app/component/Navbar';
import { Footer } from '@/app/component/Footer';
import Link from 'next/link';
 const  FreeResources = () => {
  const videos = [
    {
      name: "Google Careers: A Day in the Life",
      description:
        "Explore a day in the life of a Google employee, covering roles from software engineers to product managers. Get a glimpse into Google’s work culture and perks.",
    },
    {
      name: "Working at Microsoft: Employee Testimonials",
      description:
        "Hear directly from Microsoft employees as they share their experiences, challenges, and career growth while working at one of the largest tech companies in the world.",
    },
    {
      name: "Life at Tesla: Building the Future",
      description:
        "Learn what it’s like to work at Tesla, where employees push the boundaries of innovation in electric vehicles, renewable energy, and more.",
    },
    {
      name: "Amazon: Behind the Scenes of Innovation",
      description:
        "Discover what drives Amazon’s innovation through the lens of employees across various roles, from developers to logistics experts. Learn how they are revolutionizing the e-commerce industry.",
    },
    {
      name: "Meta Careers: Designing for the Metaverse",
      description:
        "Dive into the world of Meta and see how employees are working on groundbreaking technologies, from social networking to virtual reality and the metaverse.",
    },
    {
      name: "Working at Apple: Innovation and Passion",
      description:
        "Get an inside look at Apple’s work culture, where employees are passionate about creating products that improve people’s lives, from iPhones to cutting-edge software.",
    },
    {
      name: "Life at LinkedIn: Connecting the Workforce",
      description:
        "Discover how LinkedIn employees are creating a platform that connects professionals globally. Learn about the company’s collaborative culture and dedication to user success.",
    },
    {
      name: "Careers at IBM: The Future of AI and Cloud Computing",
      description:
        "Learn how IBM employees are pioneering advancements in AI, cloud computing, and quantum computing to shape the future of technology and business.",
    },
    {
      name: "Adobe Careers: Creativity in Action",
      description:
        "Explore Adobe’s creative work environment where employees are empowered to innovate across digital media, design software, and marketing solutions.",
    },
    {
      name: "Life at Uber: Driving the Future of Mobility",
      description:
        "Find out how Uber employees are working to redefine urban mobility, from ridesharing to food delivery, and how the company is shaping the future of transportation.",
    },
  ];
  return (
    <>
    <Navbar/>
    <div className="mb-4">
    <div className="course-page-heading" style={{background:'#F973161A'}}>
            <h4 className="text-white course-text">Free Resources</h4>
        </div>
        <div className="course-section  px-3">
        <div className="row px-5">
          {videos.map((video, index) => {
            return (
              <div className="col-lg-3 col-md-6 gx-5 gy-3 mb-5" key={index}>
                <Link href="/pages/freeresources">  <VideoCard course={video} /></Link>
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


export default FreeResources;
