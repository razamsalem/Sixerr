import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import demoCards from '../../demoData/cardsGalleryDemoData.js';
import { CategoryCard } from "./CategoryCard.jsx";
import { NextBtn } from "./NextBtn.jsx";
import { PrevBtn } from "./PrevBtn.jsx";

export function SimpleSlider({ prevBtnRef }) {
  
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1290) {
        setSlidesToShow(5);
      } else if (windowWidth >= 1197) {
        setSlidesToShow(4);
      } else if (windowWidth >= 1027) {
        setSlidesToShow(3);
      }
      else if (windowWidth >= 780) {
        setSlidesToShow(2);
      }
      else if (windowWidth >= 577) {
        setSlidesToShow(1);
      } 
      else {
        setSlidesToShow(5); 
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
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
