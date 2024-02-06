import styles from './Header.module.css';
import Logo from '../logo/Logo';
import NavBar from '../navBar/NavBar';

const Header = () => {
  return (
    <div className={'width ' + styles.barScreenCont}>
      <header className={'margin ' + styles.barContainer}>
        <Logo fill={['#243A5A', '#2DF8BB']}
        letterFill='#243A5A' />
        <NavBar />
      </header>
    </div>
  );
};

export default Header;
