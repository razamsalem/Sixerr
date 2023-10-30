import React from "react";
import Slider from "react-slick";
import { NextBtn } from "./NextBtn.jsx";
import { PrevBtn } from "./PrevBtn.jsx";
import { Link } from "react-router-dom";
const defaultImg = 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698161431/sixxer-logo_vseimk.png'
const imgNotFound = 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698663092/defaultGigImg_vjtk9e.webp'

export function GigSlider({ gig }) {
  if (!gig.imgUrls.length) gig.imgUrls = [defaultImg]

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevBtn />,
    nextArrow: <NextBtn />,
  }


  return (

    <div className="img-container">
      <Slider {...settings}>
        {gig.imgUrls.map((imgUrl, i) => (
          <Link key={gig._id} to={`/gig/${gig._id}`}>
            <img className="gig-img" src={imgUrl} alt="gig-img" onError={e => e.currentTarget.src = imgNotFound} />
          </Link>
        ))}
      </Slider>
    </div>


  )
}