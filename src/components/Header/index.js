import Menu from '../Menu';
import Logo from '../Logo';
import {useEffect, useState} from 'react';
import CalculatorButton from '../CalculatorButton';
import styles from '../../styles/components/Header.module.scss';
import {isMobile} from '../../utils';

const Header = () => {
  const [isMobileState, setIsMobileState] = useState(false);
  useEffect(() => {
    setIsMobileState(isMobile);
  }, [setIsMobileState]);

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