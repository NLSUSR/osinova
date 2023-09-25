import { useState } from "react";
import css from "./rating.module.sass";
import star from "../../assets/images/stars.svg";

export const Rating = () => {
  const [stars, setStars] = useState(0);

  return (
    <section className={css.block__rating}>
      <ul className={css.rating__list}>
        {Array.from({ length: 5 }).map((_, index) => {
          return (
            <li className={css.rating__item} key={index} onClick={() => setStars(index + 1)}>
              <img
                style={{
                  filter: index >= stars ? "grayscale(100%)" : "none",
                }}
                src={star}
                alt={`${index} stars`}
              />
            </li>
          );
        })}
      </ul>
      <p className={css.rating__quantity}>(10)</p>
    </section>
  );
};
