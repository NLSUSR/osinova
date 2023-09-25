import css from "./text.module.sass";

export const Text = ({ bold, thin }: { bold: string; thin: string }) => {
  return (
    <section className={css.block__text}>
      <p className={css.text__bold}>{bold}</p>
      <p className={css.text__thin}>{thin}</p>
    </section>
  );
};
