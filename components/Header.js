import styles from "../styles/Home.module.scss";
import Link from "next/Link";
import { PATHS } from "../paths";
import { useForm } from "react-hook-form";

const Header = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    console.log(errors);
  };

  return (
    <nav className={styles.nav}>
      <Link href={PATHS.HOME}>
        <h1>My Habits</h1>
      </Link>

      <div className={styles.loginContainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email", { required: true })}
            className={styles.input}
            id="email"
            placeholder="Email"
            type="email"
          />
          {errors.email && <span>Email is required</span>}
          <input
            {...register("password", { required: true })}
            className={styles.input}
            id="password"
            placeholder="Password"
            type="password"
          />
          {errors.password && <span>Password is required</span>}
          <input type="submit" className={`${styles.btn} ${styles.btnLogin}`} />
        </form>
      </div>
    </nav>
  );
};

export default Header;
