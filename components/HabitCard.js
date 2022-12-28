import styles from "../styles/Home.module.scss";
import Image from "next/image";

const HabitCard = ({ h }) => {
  return (
    <div className={styles.habit}>
      <strong className={styles.habitTitle}>{h.name}</strong>
      <p>
        <Image
          className={styles.flame}
          src="flame-icon.svg"
          width={20}
          height={20}
          alt="streak"
        />
        <strong>{h.streak}</strong> days
      </p>
    </div>
  );
};

export default HabitCard;
