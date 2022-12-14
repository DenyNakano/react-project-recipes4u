import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import imageAbout from "../images/bgcarouselabout1.jpg";
import imageSearch from "../images/bgcarouselrecipes.jpg";
import imageNewRecipe from "../images/bgcarouselshare.jpg";
export const Carrousel = (args) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const items = [
    {
      src: imageAbout,
      link: "about",
      key: 1,
    },
    {
      src: imageSearch,
      link: "search",
      key: 2,
    },
    {
      src: imageNewRecipe,
      link: "new-recipe",
      key: 3,
    },
  ];
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <Link to={`/${item.link}`}>
          <img
            src={item.src}
            alt={item.altText}
            style={{width: 900, height: 700}}
          />
        </Link>
      </CarouselItem>
    );
  });

  return (
    <div>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};
