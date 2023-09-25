import css from "./second.module.sass";
import trustpilot from "../../assets/images/trustpilot.svg";
import { BSCarousel } from "../carousel/carousel";
import data from "../../assets/data/data.json";
import { BSDropdown } from "../dropdown/dropdown";
import { Text } from "../text/text";
import { useState } from "react";
import { Rating } from "../rating/rating";

export const Second = () => {
  const [state, setState] = useState(NaN);

  return (
    <section className={css.block__second}>
      <div className={css.element__subtitle}>
        <p className={css.subtitle__rating}>Excellent 4.8/5</p>
        <img
          className={css.subtitle__image}
          src={trustpilot}
          alt="trustpilot"
        />
        <p className={css.subtitle__selling}>best selling</p>
      </div>
      <h2 className={css.element__title}>Orthopedic Slippers</h2>
      <div className={css.element__carousel}>
        <BSCarousel index={state} />
      </div>
      <ul className={css.element__list}>
        {data.map((e, i) => {
          return (
            <li key={i} onClick={() => setState(i)}>
              <img className={css.item__image} src={e.image} alt={e.alt} />
            </li>
          );
        })}
      </ul>
      <div className={css.element__texts}>
        <Text bold="Fast Delivery:" thin="2-4 days from SA" />
        <Text bold="In Stock:" thin="Shipping from Johannesburg" />
        <Rating />
      </div>
      <div className={css.element__dropdowns}>
        <BSDropdown
          title={"colors"}
          listing={["Black", "Orange", "Pink", "Yellow"]}
          base="black"
        />
        <BSDropdown title={"size"} listing={["2", "3", "4", "5"]} base="2" />
      </div>

      <a
        className={css.element__button}
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className={css.button__text}>buy now</p>
      </a>
    </section>
  );
};
