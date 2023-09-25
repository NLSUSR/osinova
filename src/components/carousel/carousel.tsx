import "bootstrap/dist/css/bootstrap.css";
import css from "./carousel.module.sass";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

type data = { id: number; image: string; alt: string };

export const BSCarousel = ({
  index,
  data,
}: {
  index?: number;
  data: data[];
}) => {
  const [current, setCurrent] = useState(0);

  const handleSelectImage = (selectedIndex: number) => {
    setCurrent(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index ? index : current}
      onSelect={handleSelectImage}
      interval={3000}
    >
      {data.map((e, i) => (
        <Carousel.Item key={i}>
          <img
            className={css.image}
            src={e.image}
            alt={`Carousel Image ${i + 1},${e.alt}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
