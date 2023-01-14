import styles from "../styles/Home.module.scss";

const Header = () => (
  <nav className={styles.nav}>
    <h1>My Habits</h1>
    <div className={styles.loginContainer}>
      <input
        className={styles.input}
        id="email"
        placeholder="Email"
        type="email"
      />
      <input
        className={styles.input}
        id="password"
        placeholder="Password"
        type="password"
      />
      <button className={`${styles.btn} ${styles.btnLogin}`}>Login</button>
    </div>
  </nav>
);

export default Header;
