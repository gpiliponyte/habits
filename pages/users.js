import styles from "../styles/Home.module.scss";

const Users = ({ users, error }) => {
  return (
    <main className={styles.main}>
      {error ? (
        error
      ) : (
        <ul>
          {users.map((u) => (
            <li>{u.name}</li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Users;

export const getStaticProps = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  try {
    const resp = await fetch(url);
    const users = await resp.json();
  } catch {
    return {
      props: {
        error: "Something went wrong",
      },
    };
  }
  return {
    props: {
      users,
    },
  };
};
