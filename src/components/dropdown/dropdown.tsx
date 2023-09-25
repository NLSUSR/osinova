import { useState } from "react";
import css from "./dropdown.module.sass";
import Dropdown from "react-bootstrap/Dropdown";

type TProps = {
  title: string;
  listing: string[];
  base: string;
};

export const BSDropdown = ({ title, listing, base }: TProps) => {
  const [state, setState] = useState(base);

  return (
    <section className={css.block__dropdown}>
      <p className={css.dropdown__title}>{title}</p>
      <Dropdown>
        <Dropdown.Toggle className={css.dropdown__button} variant="none" id={state}>
          <p className={css.button__text}>{state}</p>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <ul>
            {listing.map((e, i) => {
              return (
                <li key={i}>
                  <Dropdown.Item className={css.dropdown__item} href="#" onClick={() => setState(e)}>
                    {e}
                  </Dropdown.Item>
                </li>
              );
            })}
          </ul>
        </Dropdown.Menu>
      </Dropdown>
    </section>
  );
};
