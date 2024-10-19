import React from "react";
import '../style/footer/footer.css'
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="text-light footer px-5 pt-4 ">
      <div className="fluid-container mt-5">
        <div className="row">
          <div className="col-lg-6 mb-3">
            <h5 className='footer-title'>
              Campusmonk
            </h5>
            <p className="footer-description">
              Tons of resources and expert mentorship, with hands-on practice
              sets. Which will help you to crack your dream placement.
            </p>
          </div>
          
          <div className="col-lg-1"></div>
          <div className="col-lg-5 g-3 mb-3">
            <div className="row ">
              <h5 className="footer-link-title mb-4">Links</h5>
              <div className="footer-link-list">
                <div>
                <a
                  href="/"
                  className=" text-decoration-none footer-link"
                >
                  Home
                </a>
                </div>
                <div>
                <a
                  href="/pages/courses"
                  className=" text-decoration-none footer-link"
                >
                  Courses
                </a>
                </div>
                <div>
                <a
                  href="/pages/mocktest"
                  className="text-decoration-none footer-link"
                >
                  Mocktests
                </a>
                </div>
                <div>
                <a
                  href="/pages/freeresources"
                  className=" text-decoration-none footer-link"
                >
                  Free Resources
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 mb-5 pb-2">
          <div className="d-flex flex-row gap-3">
            <a
              href="#"
              className="text-light"
            >
              <i class="bi bi-youtube social-icon"></i>
            </a>
            <a
              href="#"
              className="text-light"
            >
              <i class="bi bi-instagram social-icon"></i>
            </a>
            <a
              href="#"
              className="text-light"
            >
              <i class="bi bi-linkedin social-icon"></i>
            </a>
          </div>
        </div>

        <div className=" pb-4">
        <div class='store-heading'>Download Our App</div>
          <div className="d-flex flex-row align-items-center gap-3">
            <a
              href="#"
              className="text-light"
            >
              <img className="img-fluid soci" src="/image/Play_Store.png" 
                height={50}
                width={110} />
            </a>
            <a
              href="#"
              className="text-light"
            >
              <img className="img-fluid"
                src="/image/App_Store.png"
                height={60}
                width={160}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
