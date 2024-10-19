"use client"
import React, { useState } from 'react'
import '../style/navbar/navbar.css'
import Link from 'next/link'

export const Navbar = () => {
  const [lightMode,setLightMode]=useState(false)
  return (
    <nav className="navbar navbar-dark navbar-expand-lg px-4 fixed-top"  style={{background:'#09090B4C'}}>
  <div className="container-fluid   align-items-center">
    <a className="navbar-brand " href="/">Campusmonk</a>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body  "  id="offcanvas-body-id">
        <ul className="navbar-nav justify-content-center my-2  flex-grow-1 pe-3" id="nav-items-id">
          <li className="nav-item">
            <a className="nav-link active px-3 mx-lg-2 " id="nav-link-home"  aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active px-3 mx-lg-2" id="nav-link-course" href="/pages/courses">Courses</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active px-3 mx-lg-2" id="nav-link-mock" href="/pages/mocktest">Mocktest</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active px-3 mx-lg-2" id="nav-link-resource" href="/pages/freeresources">Free Resources</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active px-3 mx-lg-2" id="nav-link-blogs" href="/pages/blogs">Blogs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active px-3 py-2 mx-lg-2" id="nav-link-jobs" href="/pages/jobs">Jobs</a>
          </li>
         
        </ul>
        <ul className="navbar-nav nav-third-section" >
            <li>{!lightMode?<i onClick={(e)=>setLightMode(true)} className="bi bi-moon"></i>:<i onClick={(e)=>setLightMode(false)} className="bi bi-sun"></i>}</li>
          <li><Link href="/pages/login"><div className="rounded login-button py-2" type="submit">Login</div></Link></li>
        </ul>
        
      </div>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
  )
}
