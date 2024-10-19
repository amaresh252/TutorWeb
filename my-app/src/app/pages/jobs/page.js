"use client";

import React from "react";
import "../../style/home/jobs.css";
import { Navbar } from "@/app/component/Navbar";
import { Footer } from "@/app/component/Footer";

const Jobs = () => {
  const jobs = [
    {
      company: "Tech Innovators",
      link: "https://www.techinnovators.com",
      date: "7-Nov-2024",
    },
    {
      company: "Creative Solutions",
      link: "https://www.creativesolutions.com",
      date: "30-Aug-2024",
    },
    {
      company: "Future Horizons",
      link: "https://www.futurehorizons.com",
      date: "23-Sep-2024",
    },
    {
      company: "Visionary Enterprises",
      link: "https://www.visionaryenterprises.com",
      date: "8-Sep-2024",
    },
    {
      company: "NextGen Technologies",
      link: "https://www.nextgentechnologies.com",
      date: "10-Oct-2024",
    },
  ];

  return (
  
    <>
    <Navbar/>
    <div className="jobs">
      <div className="px-5 mt-5 pt-5">
        <h1 className="jobs-first">Job Updates</h1>
      </div>
      <div className="mx-5 px-4 py-4 jobs-table-section">
        <table className="table table-dark table-hover jobs-table">
          <thead  >
            <tr >
              <th  scope="col-md-4" className="py-3" id="jobs-heading">Company</th>
              <th  scope="col-md-4" className="py-3" id="jobs-heading">Link</th>
              <th  scope="col-md-4" className="py-3" id="jobs-heading">Posted On</th>
            </tr>
          </thead>

          <tbody >
            {jobs.map((job,index) => {
              return (
                <tr key={index}>
                  <td className="py-4"  id="jobs-data">{job.company}</td>
                  <td className="py-4"  id="jobs-data">
                    <a className="job-link" href={job.link}>Link</a>
                  </td>
                  <td className="py-4"  id="jobs-data" >{job.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="row">
          <div className="col-md-6 job-len">{jobs.length} Results.</div>
          <div className="col-md-6 d-flex job-btn gap-3 justify-content-end"><p>Previous</p>  <p>Next</p></div>
          
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Jobs;
