import css from "./second.module.sass";
import trustpilot from "../../assets/images/trustpilot.svg";
import { BSCarousel } from "../carousel/carousel";
import { BSDropdown } from "../dropdown/dropdown";
import { Text } from "../text/text";
import { useState } from "react";
import { Rating } from "../rating/rating";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";

export const Second = () => {
  const [state, setState] = useState(NaN);

  const data = [
    { id: 1, image: img1, alt: "black slippers" },
    { id: 2, image: img2, alt: "orange slippers" },
    { id: 3, image: img3, alt: "pink slippers" },
    { id: 4, image: img4, alt: "yellow slippers" },
  ];

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
        <BSCarousel data={data} index={state} />
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
