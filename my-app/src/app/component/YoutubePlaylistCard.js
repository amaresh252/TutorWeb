import React from 'react'
import '../style/card/coursecard.css'

export const YoutubePlaylistCard = ({playlist}) => {

  return (
    <div className="card px-3  py-3 course-card">
    <img className="card-img-top course-card-img"  src={playlist.snippet.thumbnails.default.url} alt={playlist.snippet.title}/>
    <div className="pt-1">
      <h5 className={`card-title text-truncate course-card-title ${playlist.snippet.description?'':'course-card-without-desc'}`}>{playlist.snippet.title}</h5>
      <p className="card-text text-truncate course-card-description">{playlist.snippet.description}</p> 
    </div>
  </div>
  )
}
