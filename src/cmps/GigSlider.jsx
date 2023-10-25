import React from "react";
import Slider from "react-slick";
import { NextBtn } from "./NextBtn.jsx";
import { PrevBtn } from "./PrevBtn.jsx";
import { Link } from "react-router-dom";


export function GigSlider({ gig, isHovered }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: isHovered && <PrevBtn />,
    nextArrow: isHovered && <NextBtn />,
  };
  //   console.log(gig);
  return (

    <div className="img-container">
      <Slider {...settings}>
        {gig.imgUrls.map((imgUrl, i) => (
          <Link key={gig._id} to={`/gig/${gig._id}`}>
            <img className="gig-img" src={imgUrl} alt="gig-img" />
          </Link>
        ))}
      </Slider>
    </div>


  )
}