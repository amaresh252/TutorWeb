import React from 'react'

export const AddvertisementCarousel = () => {
  return (
    <div className="container py-4">
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="card-wrapper">
            <img src="https://campusmonk.in/_next/image?url=https%3A%2F%2Fcdn.campusmonk.in%2Fstrapi%2FCM_Website_Course_Mini_Banner_3_6aadef224b.png&w=3840&q=75" className="d-block w-100" alt="First Slide" />
          </div>
        </div>

        <div className="carousel-item">
          <div className="card-wrapper">
            <img src="https://campusmonk.in/_next/image?url=https%3A%2F%2Fcdn.campusmonk.in%2Fstrapi%2FCM_Website_Course_Mini_Banner_4_25fd99ccf8.png&w=3840&q=75" className="d-block w-100" alt="Second Slide" />
          </div>
        </div>

        <div className="carousel-item">
          <div className="card-wrapper">
            <img src="https://campusmonk.in/_next/image?url=https%3A%2F%2Fcdn.campusmonk.in%2Fstrapi%2FCM_Website_Course_Mini_Banner_3_6aadef224b.png&w=3840&q=75" className="d-block w-100" alt="Third Slide" />
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  )
}
