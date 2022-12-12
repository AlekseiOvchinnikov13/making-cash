import {useEffect, useState} from 'react';
import Menu from '../Menu';
import Logo from '../Logo';
import {isMobile} from '../../utils';
import CalculatorButton from '../CalculatorButton';
import styles from '../../styles/components/Header.module.scss';

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