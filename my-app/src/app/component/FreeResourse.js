import React from "react";
import "../style/home/freeresourse.css";
export const FreeResource = () => {
  return (
    <div className="px-4">
      <div className="text-center fluid-container free-resource-main">
        <h2 className="text-white free-resource-title">Free Resources</h2>
        <p className="free-resource-subtitle">
          Unlocking Potential: Access Free Resources for Career Advancement -
          YouTube videos, eBooks, and more await to empower your journey to
          success.
        </p>
        <div className="row pt-5 pb-3 mt-4 align-self-center">
          <div className="col-md-6 col-sm-12">
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                overflow: "hidden",
                borderRadius:"10px",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/V--1RruxJpA"
                title="YouTube video"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className=" text-white col-md-6 col-sm-12">
            <div className="pb-1">
              <h4 className="video-title">
                Deploying Node JS Microservices using AWS ECS and Loadbalancer
              </h4>
              <p className="video-desc pt-3">Node JS Microservices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
