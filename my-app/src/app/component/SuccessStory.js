import React from 'react'
import '../style/home/successstory.css'

export const SuccessStory = () => {
  const images = [
    "https://campusmonk.in/_next/image?url=https%3A%2F%2Fcdn.campusmonk.in%2Fstrapi%2F31_809378de1b.png&w=1920&q=75",
    "https://campusmonk.in/_next/image?url=https%3A%2F%2Fcdn.campusmonk.in%2Fstrapi%2F18_a0a40589d1.png&w=1920&q=75",
    "https://campusmonk.in/_next/image?url=https%3A%2F%2Fcdn.campusmonk.in%2Fstrapi%2F16_73c68897ff.png&w=1920&q=75",
    "https://campusmonk.in/_next/image?url=https%3A%2F%2Fcdn.campusmonk.in%2Fstrapi%2Frimex_ba91ba4ae4.png&w=1920&q=75"
  ];
  return (
    <div>
    <div className="text-center fluid-container success-story-main" >
      <h2 className="text-white success-story-title">Success Story</h2>
      <p className="success-story-subtitle">
      From aspirations to achievements, our Placement Prep Company empowers dreams. Through personalized guidance and innovative strategies, we navigate individuals toward career success. With tailored support and rigorous preparation, our success stories exemplify our commitment to transforming potential into palpable achievements.
      </p>
      <div className="carousel-row">
      <div id="carouselExample" className="carousel slide carousel-main" data-bs-ride="carousel" data-bs-interval="2000">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
            <div className="row">
              {/* Large screens: 4 images */}
              <div className="col-lg-3 d-none d-lg-block">
                <img src={images[(index + images.length - 2) % images.length]} className="d-block w-100 rounded" alt={`Slide ${index}`} />
              </div>
              {/* Medium screens: 3 images */}
              <div className="col-lg-3 col-md-4 d-none d-md-block">
                <img src={images[(index + images.length - 1) % images.length]} className="d-block w-100 rounded" alt={`Slide ${index}`} />
              </div>
              {/* Always visible (small screens: 1 image) */}
              <div className="col-lg-3 col-md-4 col-sm-12">
                <img src={image} className="d-block w-100 rounded" alt={`Slide ${index}`} />
              </div>
              {/* Medium and Large screens */}
              <div className="col-lg-3 col-md-4 d-none d-md-block">
                <img src={images[(index + 1) % images.length]} className="d-block w-100 rounded" alt={`Slide ${index}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <div className="icon-container"> <i class="bi bi-arrow-left-short"></i></div>
  <span className="visually-hidden">Previous</span>
</button>

<button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
<div className="icon-container"> <i class="bi bi-arrow-right-short"></i></div>
  <span className="visually-hidden">Next</span>
</button>

    </div>
    </div>
    </div>
</div>
  )
}
