"use client";

import Link from "next/link";
import { CourseCard } from "./component/CourseCard";
import { Navbar } from "./component/Navbar";
import "./style/home/home.css";
import { VideoCard } from "./component/VideoCard";
import { AddvertisementCarousel } from "./component/AddvertisementCarousel";
import { Footer } from "./component/Footer";
import { SocialMedia } from "./component/SocialMedia";
import { FreeResource } from "./component/FreeResourse";
import { SuccessStory } from "./component/SuccessStory";
import { useState,useEffect } from "react";
import { YoutubePlaylistCard } from "./component/YoutubePlaylistCard";


useState
export default function Home() {

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
  const images = [
    "https://campusmonk.in/_next/image?url=https%3A%2F%2Fcdn.campusmonk.in%2Fstrapi%2FCM_Website_Course_Mini_Banner_3_6aadef224b.png&w=3840&q=75",
    "https://campusmonk.in/_next/image?url=https%3A%2F%2Fcdn.campusmonk.in%2Fstrapi%2FCM_Website_Course_Mini_Banner_1_abc630a660.png&w=3840&q=75",
    "https://campusmonk.in/_next/image?url=https%3A%2F%2Fcdn.campusmonk.in%2Fstrapi%2FCM_Website_Course_Mini_Banner_4_25fd99ccf8.png&w=3840&q=75",
    "https://campusmonk.in/_next/image?url=https%3A%2F%2Fcdn.campusmonk.in%2Fstrapi%2FCM_Website_Course_Mini_Banner_3_6aadef224b.png&w=3840&q=75",
    "https://campusmonk.in/_next/image?url=https%3A%2F%2Fcdn.campusmonk.in%2Fstrapi%2FCM_Website_Course_Mini_Banner_1_abc630a660.png&w=3840&q=75",
    "https://campusmonk.in/_next/image?url=https%3A%2F%2Fcdn.campusmonk.in%2Fstrapi%2FCM_Website_Course_Mini_Banner_4_25fd99ccf8.png&w=3840&q=75",
    "https://campusmonk.in/_next/image?url=https%3A%2F%2Fcdn.campusmonk.in%2Fstrapi%2FCM_Website_Course_Mini_Banner_3_6aadef224b.png&w=3840&q=75",
    "https://campusmonk.in/_next/image?url=https%3A%2F%2Fcdn.campusmonk.in%2Fstrapi%2FCM_Website_Course_Mini_Banner_1_abc630a660.png&w=3840&q=75",
    "https://campusmonk.in/_next/image?url=https%3A%2F%2Fcdn.campusmonk.in%2Fstrapi%2FCM_Website_Course_Mini_Banner_4_25fd99ccf8.png&w=3840&q=75",
    
  ];

  const API_KEY = 'AIzaSyCHoc9rpNRP5xeEJRpHmuxd7I__MfF6KwY';
  const CHANNEL_ID = 'UCky03MonS3REdCXCvOfua2g';

  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      let allPlaylists = [];
      let nextPageToken = '';

      do {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${CHANNEL_ID}&key=${API_KEY}&pageToken=${nextPageToken}`);
        const data = await response.json();
        allPlaylists = allPlaylists.concat(data.items);
        nextPageToken = data.nextPageToken;
      } while (nextPageToken);

      setPlaylists(allPlaylists);
    };

    fetchPlaylists();
  }, []);




  return (
    <div className="home">
    
      <Navbar/>
      {playlists.length===0 &&<div className="loader-container position-fixed" style={{zIndex:'11'}} >
    <div className="loader"></div>
    </div>}
      <div className="landing-section mb-3">
      <div className="row ">
        <div className="col-lg-6 col-md-12 col-sm-12 text-white">
          <div>
            <h1 className="heading">Let&#39;s crack your next placement Exam</h1>
            <p className="description mt-3">Tons of resources and expert mentorship, with hands-on practice sets. Which will help you to crack your dream placement.</p>
            <div className="row ">
              <div className="col-md-6 col-sm-6 d-flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24"><path fill="#c8e6c9" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#4caf50" d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"></path></svg> 
              <p className="subject">Aptitude</p>
              </div>
              <div className="col-md-6 col-sm-6 d-flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24"><path fill="#c8e6c9" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#4caf50" d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"></path></svg> 
              <p className="subject">Data Structures & Algorithm</p>
              
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-6 d-flex gap-2 ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24"><path fill="#c8e6c9" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#4caf50" d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"></path></svg> 
              <p className="subject">Interview Preparation</p>
              
              </div>
              <div className="col-md-6 col-sm-6 d-flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24"><path fill="#c8e6c9" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#4caf50" d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"></path></svg> 
              <p className="subject">Mocktests</p>
              
              </div>
            </div>
            <div className="row mt-3 mb-4">
              <div className="col-md-6 col-sm-6" >
              <Link href='/pages/courses'><button className="mt-2 btn-getstart">Get Started</button></Link>
              </div>
              <div className="col-md-6 col-sm-6" >
              <Link href='/pages/freeresources'><button className="mt-2 btn-watch-video">Watch Videos</button></Link>
              </div>
            </div>
            <div className="d-flex align-items-center mt-2">
             <div className="position-relative">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp" className="img-fluid profile-icon " alt="description"/>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp" className="img-fluid profile-icon position-absolute" style={{top: '1px',left:' 28px'}} alt="description"/>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp" className="img-fluid profile-icon position-absolute" style={{top: '1px',left:' 58px'}} alt="description"/>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp" className="img-fluid profile-icon position-absolute" style={{top: '1px',left:' 88px'}} alt="description"/>
                </div>
                
               <p className="num-student-text">100,000+ Happy students!</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6  d-none d-lg-block text-end" >
          <img src="/image/image_front.png" className="img-fluid mt-5 pt-4 "  alt="Placement Preparation" height={400}  width={400}/>
        </div>

      </div>
      </div>

      <div className="sliding-section mb-5">
    <div id="carouselExample" className="carousel slide " data-bs-ride="carousel" data-bs-interval="2000">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
            <div className="row">
            
              <div className="col-lg-3 col-md-4 d-none d-lg-block">
               <Link href='#'> <img src={images[(index + images.length - 1) % images.length]} className="w-100 rounded  h-100 img-fluid" alt={`Slide ${index}`}  /></Link>
              </div>
             
              <div className="col-lg-6  col-md-12 col-sm-12">
              <Link href='#'><img src={image} className=" w-100 rounded h-100 img-fluid" alt={`Slide ${index}`} /></Link> 
              </div>
             
              <div className="col-lg-3 d-none d-lg-block">
              <Link href='#'> <img src={images[(index + 1) % images.length]} className=" w-100 h-100 rounded img-fluid" alt={`Slide ${index}`} /></Link> 
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <div className="icon-container"> <i className="bi bi-arrow-left-short"></i></div>
  <span className="visually-hidden">Previous</span>
</button>

<button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
<div className="icon-container"> <i className="bi bi-arrow-right-short"></i></div>
  <span className="visually-hidden">Next</span>
</button>

     </div>
     </div>


      <div className="course-section px-4 pt-5">
        <div className="text-center ">
          <h2 className="text-white course-title">Premium courses</h2>
          <p className="course-subtitle">
            Explore our courses targeting various exams
          </p>
        </div>
        <div className="d-flex justify-content-between align-items-center pt-5 px-3">
          <h4 className="text-white course-text">Courses</h4>
          <a href="#" className="expand">
            See all
          </a>
        </div>
        
        <div className="row">
          {courses.map((course, index) => {
            return (
              <div className="col-lg-3 col-md-6 gx-5 gy-3 mb-5" key={index}>
                <Link href='/pages/courses'> <CourseCard course={course} /></Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="test-section px-4 mb-5 pb-3">
        <div className="d-flex justify-content-between align-items-center px-3">
          <h4 className="text-white course-text">Mocktests</h4>
          <a href="#" className="expand">
            See all
          </a>
        </div>
        <div className="row ">
          {tests.map((test, index) => {
            return (
              <div className="col-lg-3 col-md-6 gx-5 gy-3 mb-5" key={index}>
                
             <Link href="/pages/mocktest">   <CourseCard course={test} /></Link> 
              </div>
            );
          })}
        </div>
      </div>

      <SuccessStory/>

      <FreeResource/>

      <div className="similar-video-section px-4 mb-5 pb-5">
        <div className="d-flex justify-content-between align-items-center px-3">
          <h4 className="text-white course-text">Similar Videos</h4>
          <a href="#" className="expand">
            See all
          </a>
        </div>
        <div className="row px-3">
          {videos.map((video, index) => {
            return (
              <div className="col-lg-2 col-md-4 col-sm-6 gx-3 gy-3" key={index}>
                <Link href="/pages/freeresources">  <VideoCard course={video} /></Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="youtube-video-section px-4 mb-5 pb-5">
        <div className="d-flex justify-content-between align-items-center px-3">
          <h4 className="text-white course-text">Youtube Playlist</h4>
          <a href="#" className="expand">
            See all
          </a>
        </div>
        <div className="row px-1">
          {playlists.map((playlist) => {
            return (
              <div className="col-lg-3 col-md-6 gx-5 gy-3 mb-5" key={playlist.id} >
                <Link key={playlist.id} href={`/pages/playlist/${playlist.id}`} passHref>  <YoutubePlaylistCard playlist={playlist} /></Link>
              </div>
            );
          })}
        </div>
      </div>

      <SocialMedia/>

      <Footer/>
    </div>
  );
}
