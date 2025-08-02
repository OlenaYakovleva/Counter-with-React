import styles from "./Game.module.css";
import PropTypes from "prop-types";

export function GameTitle({ title }) {
  console.log("render GameTitle component");
  return <h1 className={styles.title}>{title}</h1>;
}
GameTitle.propTypes = {
  title: PropTypes.string
};

export default GameTitle;
