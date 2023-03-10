import Head from "next/head";
import styles from "../styles/Home.module.scss";
import HabitCard from "../components/HabitCard";

export default function Home() {
  const habits = [
    { id: 1, name: "Workout", streak: 256 },
    { id: 2, name: "Learning French", streak: 123 },
    { id: 3, name: "Water", streak: 65 },
  ];

  const habitElements = habits.map((h) => (
    <HabitCard key={h.id} h={h}></HabitCard>
  ));

  const checklistItems = habits.map((h) => (
    <div key={h.id}>
      <input id={h.id} type="checkbox" />
      <label htmlFor={h.id}>{h.name}</label>
    </div>
  ));
  return (
    <>
      <Head>
        <title>My Habits</title>
        <meta
          name="description"
          content="The App that Allows You to Form Habits"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.habits}>
          <h3>Your Habit Checklist</h3>
          <form>
            <div className={styles.checkList}>{checklistItems}</div>
            <div className={styles.btnWrapper}>
              <button className={`${styles.btn} ${styles.submitBtn}`}>
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className={styles.habitCards}>
          <h1>Your Streaks</h1>
          <div className={styles.cards}>{habitElements}</div>
        </div>
      </main>
    </>
  );
}
