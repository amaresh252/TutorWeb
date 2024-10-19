// pages/playlist/[id].js
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../../../style/youtubevideo/youtubevideo.css";
import { Navbar } from "@/app/component/Navbar";
import { Footer } from "@/app/component/Footer";

const PlaylistDetail = (props) => {
  const YOUR_API_KEY = "AIzaSyCHoc9rpNRP5xeEJRpHmuxd7I__MfF6KwY";
  const router = useRouter();
  const { id } = props.params;
  const [videos, setVideos] = useState([]);
  const [singlevideo, setSingleVideo] = useState("");
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [prevIndex, setPrevIndex] = useState(-1);
  const [nextIndex, setNextIndex] = useState(-1);
  const [playlistTitle, setPlaylistTitle] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (id) {
      const fetchPlaylistVideos = async () => {
        try {
          const response = await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${id}&key=${YOUR_API_KEY}`
          );
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();

          if (data.items) {
            setVideos(data.items);
           
            if(data.items.length>1){
              setNextIndex(1);
            }
            setCurrentIndex(0);
            setSingleVideo(data.items[0]);
          } else {
            setError("No videos found in this playlist.");
          }

          // Fetch playlist title (optional)
          const playlistResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=${id}&key=${YOUR_API_KEY}`
          );
          if (!playlistResponse.ok) {
            throw new Error(`HTTP error! status: ${playlistResponse.status}`);
          }
          const playlistData = await playlistResponse.json();
          if (playlistData.items && playlistData.items.length > 0) {
            setPlaylistTitle(playlistData.items[0].snippet.title);
          } else {
            setError("Playlist not found.");
          }
        } catch (error) {
          console.error("Error fetching playlist videos:", error);
          setError("An error occurred while fetching data.");
        }
      };

      fetchPlaylistVideos();
    }
  }, [id]);

  function handleContent(e, index, video) {
    e.preventDefault();
    setCurrentIndex(index);
   
    if (index + 1 < videos.length) {
      setNextIndex(index + 1);
    } else {
      setNextIndex(-1);
    }
    if (index - 1 >= 0) {
      setPrevIndex(index - 1);
    } else {
      setPrevIndex(-1);
    }
    setSingleVideo(video);
  }

  function handlePrevButton() {
    setNextIndex(currentIndex);

    setSingleVideo(videos[prevIndex]);
    setCurrentIndex(prevIndex);

    if (prevIndex === 0) {
      setPrevIndex(-1);
    } else {
      setPrevIndex(prevIndex - 1);
    }
  }

  function handleNextButton() {
    setPrevIndex(currentIndex);
    setSingleVideo(videos[nextIndex]);
    setCurrentIndex(nextIndex);
    if (nextIndex + 1 < videos.length) {
      setNextIndex(nextIndex + 1);
    } else {
      setNextIndex(-1);
    }
  }
  

  

  return (
    <>
    
    <Navbar/>
   {!singlevideo && <div class="loader-container">
    <div class="loader"></div>
    </div>}

      <div className="fluid-container pt-5 px-2 pb-5 mt-4 text-white">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12">
            {singlevideo && (
               <div
               style={{
                 position: "relative",
                 paddingBottom: "56.25%",
                 height: 0,
                 overflow: "hidden",
                 
                 borderStyle:'solid',
                 borderWidth:'0.25px',
                 borderColor:'#FAFAFA'
               }} key={singlevideo.snippet.resourceId.videoId}
             >
               <iframe
                 src={`https://www.youtube.com/embed/${singlevideo.snippet.resourceId.videoId}`}
                 title={singlevideo.snippet.title}
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
              
            )}

          {singlevideo &&  <h1 className="youtube-video-heading">{singlevideo.snippet.title}</h1>}
          <div className="prev-next d-flex justify-content-between">
            {prevIndex != -1 ? (
              <div
                onClick={() => handlePrevButton()}
                className="prev-next-button  rounded py-2"
              >
                Prev
              </div>
            ) : (
              <div className="prev-next-button1 rounded py-2">Prev</div>
            )}

            {nextIndex != -1 ? (
              <div
                onClick={() => handleNextButton()}
                className="prev-next-button rounded py-2"
              >
                Next
              </div>
            ) : (
              <div className="prev-next-button1 rounded py-2">Next</div>
            )}

         </div>
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <div className="video-list mx-1  vh-100">
              {videos.length > 0
                ? videos.map((video, index) => (
                    <div
                      className="single-video my-2"
                      onClick={(e) => handleContent(e, index, video)}
                      key={video.snippet.resourceId.videoId}
                    >
                      <h2 className="single-video-title">{video.snippet.title}</h2>
                    </div>
                  ))
                : !error && <p>Loading videos...</p>}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default PlaylistDetail;
