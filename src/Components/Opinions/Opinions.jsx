import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import '../Opinions/opinions-style.css';

const opinions = [
  {
    id: 1,
    title: 'Carreras profesionales',
    text: 'Las reseñas de otros clientes suponen una forma estupenda de impulsar tus ventas. - Shameeka Taylor'
  },
  {
    id: 2,
    title: 'Luna nueva naciente',
    text: 'Las reseñas de otros clientes suponen una forma estupenda de impulsar tus ventas. - Shameeka Taylor'
  },
  {
    id: 3,
    title: 'Maestros del gran pinball',
    text: 'Las reseñas de otros clientes suponen una forma estupenda de impulsar tus ventas. - Shameeka Taylor'
  },
];

function Opinions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === opinions.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? opinions.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = opinions.map((opinion) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={opinion.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <div className="content-opinions">
          <h3 className='title-card-op'>{opinion.title}</h3>
          <p className='text-card-op'>{opinion.text}</p>
        </div>
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {`.custom-tag {
              max-width: 100%;
              height: 500px;
              background: black;
            }`}
      </style>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={opinions}
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
}

export default Opinions;
