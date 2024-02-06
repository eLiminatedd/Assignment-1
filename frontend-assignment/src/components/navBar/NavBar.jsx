import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navBarContainer}>
      <ul>
        <li>
          <a href="#" className={styles.link}>
            Home
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            Link 1
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            Link 2
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
