import styles from "../styles/Header.module.scss";

function Header({ children }) {
  return (
    <>
      <h1 className={styles.title}>Header</h1>
      <p className={styles.description}>description</p>
    </>
  );
}

export default Header;
