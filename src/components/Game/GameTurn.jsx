import styles from "./Game.module.css";

export function GameTurn({ children }) {
  console.log("render GameTurn component");
  return <div className={styles.turn}>{children}</div>;
}
