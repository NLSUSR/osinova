import { Header } from "../header/header";
import { Main } from "../main/main";
import css from "./app.module.sass";

export const App = () => {
  return (
    <section className={css.app}>
      <Header />
      <Main />
    </section>
  );
};
