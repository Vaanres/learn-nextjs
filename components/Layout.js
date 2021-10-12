import Nav from "../components/Nav";
import Header from "../components/Header";
import Meta from "./Meta";
import styles from "../styles/Layout.module.css";

function Layout({ children, home }) {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <div className={styles.main}>
          <Header />
          {children}
        </div>
      </div>
    </>
  );
}

export default Layout;
