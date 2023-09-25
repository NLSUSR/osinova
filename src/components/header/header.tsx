import logo from "../../assets/images/logo.png";
import css from "./header.module.sass";

export const Header = () => {
  return (
    <header className={css.block__header}>
      <p className={css.header__text}>
        SPECIAL OFFER + FREE DELIVERY 2-4 DAYS IN SA
      </p>
      <div className={css.element__logo}>
        <img className={css.logo__image} src={logo} alt="CUSHION" />
        <p className={css.logo__text}>orthopedic slippers</p>
      </div>
    </header>
  );
};
