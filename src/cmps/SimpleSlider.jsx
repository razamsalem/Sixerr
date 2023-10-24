import React from "react";
import Slider from "react-slick";
import demoCards from '../../demoData/cardsGalleryDemoData.js';
import { CategoryCard } from "./CategoryCard.jsx";
import { NextBtn } from "./NextBtn.jsx";
import { PrevBtn } from "./PrevBtn.jsx";

export function SimpleSlider({ prevBtnRef }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: <PrevBtn prevBtnRef={prevBtnRef} />,
    nextArrow: <NextBtn />,
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
