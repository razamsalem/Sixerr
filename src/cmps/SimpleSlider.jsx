import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import demoCards from '../../demoData/cardsGalleryDemoData.js';
import { CategoryCard } from "./CategoryCard.jsx";
import { NextBtn } from "./NextBtn.jsx";
import { PrevBtn } from "./PrevBtn.jsx";

export function SimpleSlider() {


  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: <PrevBtn />,
    nextArrow: <NextBtn />,
    responsive: [
      {
        breakpoint: 1235,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className="slider-home">
      <Slider {...settings}>
        {demoCards.map((card) => (
          <div key={card.id} className="slide">
            <CategoryCard card={card} />
          </div>
        ))}
      </Slider>
     </section>

  )
}
