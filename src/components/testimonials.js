import { useState, useEffect } from "react";
import React from "react";
import "../css/testimonials.css"
import arrow from "../images/arrow.svg"
import { useSwipeable } from "react-swipeable";

export default function Testimonials({ carouselData }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [arrowOpacityLeft, setArrowOpacityLeft] = useState(true);
  const [arrowOpacityRight, setArrowOpacityRight] = useState(false);

//  Infinite carousel 

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex + 1 === carouselData.length ? 0 : prevIndex + 1
  //   );
  // };

  // const handlePrevious = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex - 1 < 0 ? carouselData.length - 1 : prevIndex - 1
  //   );
  // };

  useEffect(() => {
    currentIndex === 0 ? setArrowOpacityLeft(true) : setArrowOpacityLeft(false);
    currentIndex === carouselData.length - 1 ? setArrowOpacityRight(true) : setArrowOpacityRight(false);
  }, [currentIndex, carouselData]);

  const handleNext = () => {
    if (currentIndex === carouselData.length - 1) {
      return
    }

    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevious = () => {
    if (currentIndex === 0) {
      return
    }

    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handlersBox = useSwipeable({
    onTap: ({ event }) => {
      // NOTE: this stops the propagation of the event
      // from reaching the document swipe listeners
      event.stopPropagation();
      handleNext();
    },

    onSwipedLeft: () => {
      handleNext();
    },

    onSwipedRight: () => {
      handlePrevious();
    },

    onSwiping: ({ event }) => event.stopPropagation(),
    preventDefaultTouchmoveEvent: true
  });

  return(
      <section className="testimonials-section container">
        <div className="content column" {...handlersBox}>
          <div className="testimonial column">
            <h3 className="h3-caps">{carouselData[currentIndex].name}</h3>
            <p className="testimonial-txt">{carouselData[currentIndex].caption}</p>
          </div>
          <img className="testimonial-img" src={carouselData[currentIndex].img} alt="Testimonial"/>
        </div>
        <div className="slide-direction row">
            <div className={`left ${arrowOpacityLeft ? "arrow-opacity" : ""}`} onClick={handlePrevious}>
              <img className="arrow-left" src={arrow} alt="Arrow left"/>
            </div>
            <div className={`right ${arrowOpacityRight ? "arrow-opacity" : ""}`} onClick={handleNext}>
              <img className="arrow-right" src={arrow} alt="Arrow right"/>
            </div>
          </div>
        <div className="indicator row">
          {carouselData.map((_, index) => (
            <div
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </section>
  )
}
    