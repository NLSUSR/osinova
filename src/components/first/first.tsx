import { useState, useEffect } from "react";
import css from "./first.module.sass";

export const First = ({
  oldPrice = 250,
  newPrice = 160,
}: {
  oldPrice?: number;
  newPrice?: number;
}) => {
  let total = 4 * 3600 + 51 * 60 + 16;
  const [state, setState] = useState(total);

  useEffect(() => {
    const interval = setInterval(() => {
      if (total === 0) {
        clearInterval(interval);
      }
      total--;
      setState(total);
    }, 1000);
  }, [total, setState]);

  const format = (time: number): string => {
    return time.toString().padStart(2, "0");
  };

  const h = format(Math.floor(state / 3600));
  const m = format(Math.floor((state % 3600) / 60));
  const s = format(Math.floor(state % 60));

  return (
    <section className={css.block__first}>
      <div className={css.element__timer}>
        <p className={css.timer__title}>Limited offer</p>
        <p className={css.timer__time}>{`${h}:${m}:${s}`}</p>
      </div>
      <div className={css.element__price}>
        <p className={css.price__old}>R {oldPrice}.00</p>
        <p className={css.price__new}>R {newPrice}.00</p>
      </div>
    </section>
  );
};
