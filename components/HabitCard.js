import styles from "../styles/Home.module.scss";

const HabitCard = ({h}) => {
    return (<div className={styles.habit}><strong>{h.name}</strong><p><strong>{h.streak}</strong> days streak</p></div>);
}

export default HabitCard;