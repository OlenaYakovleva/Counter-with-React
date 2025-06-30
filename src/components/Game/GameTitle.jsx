import styles from "./Game.module.css";

export function GameTitle({ title }) {
  console.log("render GameTitle component");
  return <h1 className={styles.title}>{title}</h1>;
}
