import styles from './SolutionBox.module.scss';

const SolutionBox = (props) => {
  return (
    <div data-aos="fade-up" className={styles.solutionContainer}>
      <div className={styles.iconContainer}>
        <img src={`/${props.icon}`} alt={`${'icon_' + props.icon}`} />
      </div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default SolutionBox;
