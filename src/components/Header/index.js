import Menu from '../Menu';
import Logo from '../Logo';
import {useEffect, useState} from 'react';
import {isMobile} from '../../utils';
import CalculatorButton from '../CalculatorButton';
import styles from '../../styles/Components/Header.module.scss';

const Header = () => {
  const [isMobileState, setIsMobileState] = useState(false);
  useEffect(() => {
    setIsMobileState(isMobile());
  }, [isMobile()]);

  return (
    <header className={styles.header}>
      <div className={`${styles.headerWrapper} container`}>
        <Menu isMobile={isMobileState}/>
        <Logo/>
        {!isMobileState && <CalculatorButton/>}
      </div>
    </header>
  );
};

export default Header;