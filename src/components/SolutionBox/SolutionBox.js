import styles from "./SolutionBox.module.scss";

const SolutionBox = (props) => {
  return (
    <div className={styles.solutionContainer}>
      <div className={styles.iconContainer}>
        <img src={props.icon} />
      </div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default SolutionBox;
