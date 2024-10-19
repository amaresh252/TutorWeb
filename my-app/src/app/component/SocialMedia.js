import React from 'react'
import '../style/home/socialmedia.css'
import Link from 'next/link'
export const SocialMedia = () => {
  return (
    <div>
        <div className="text-center fluid-container social-media-main" >
          <h2 className="text-white social-media-title">Follow us on social networks!</h2>
          <p className="social-media-subtitle">
          Stay Connected, Stay Inspired: Follow Us on Twitter, YouTube, Instagram, and WhatsApp for exclusive content, updates, and invaluable insights on career advancement.
          </p>
          <div className="row align-self-center">
            <div className="row  social-media-list">
                <div className="col-lg-4 col-md-4  col-sm-6  ">
                <Link href="#">
                    <div className=" align-self-center pb-1 m-3 pt-3   rounded" style={{background:'#18181B'}}>
                        <img src='/image/youtube.png' className="img-fluid" height={40} width={40} alt="description"/>
                        <p className="text-white social-media-name pt-3">Youtube</p>
                    </div>
                </Link>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                <Link href="#">
                    <div className=" align-self-center pb-1 m-3 pt-3 rounded" style={{background:'#18181B'}}>
                        <img src='/image/Instagram_icon.png' className="img-fluid" height={40} width={40} alt="description"/>
                        <p className="text-white social-media-name pt-3">Instagram</p>
                    </div>
                </Link>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                <Link href="#">
                    <div className=" align-self-center pb-1 m-3 pt-3  rounded" style={{background:'#18181B'}}>
                        <img src='/image/whats_app_icon.png' className="img-fluid" height={40} width={40} alt="description"/>
                        <p className="text-white social-media-name pt-3">WhatsApp</p>
                    </div>
                </Link>
                </div>
                
                <div className="col-lg-4 col-md-4 col-sm-6">
                <Link href="#">
                    <div className=" align-self-center pb-1 m-3 pt-3 px-1 rounded" style={{background:'#18181B'}}>
                        <img src='/image/Telegram-icon.png' className="img-fluid" height={40} width={40} alt="description"/>
                        <p className="text-white social-media-name pt-3">Telegram</p>
                    </div>
                </Link>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                <Link href="#">
                    <div className=" align-self-center pb-1 m-3 pt-3 rounded" style={{background:'#18181B'}}>
                        <img src='/image/linkedin_icon.png' className="img-fluid" height={40} width={40} alt="description"/>
                        <p className="text-white social-media-name pt-3">LinkedIn</p>
                    </div>
                </Link>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                <Link href="#">
                    <div className=" align-self-center pb-1 m-3 pt-3  rounded" style={{background:'#18181B'}}>
                        <img src='/image/twitter_logo.png' className="img-fluid" height={40} width={40} alt="description"/>
                        <p className="text-white social-media-name pt-3">Twitter</p>
                    </div>
                </Link>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}
