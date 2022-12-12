import {useRef} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import {uid} from 'uid';
import {menu} from '../../data/menu';
import CalculatorButton from '../CalculatorButton';
import styles from '../../styles/components/Menu.module.scss';

const Menu = ({isMobile}) => {
  const router = useRouter();

  const menuRef = useRef(null);
  const menuClassToggle = () =>
    menuRef?.current && menuRef.current.classList.toggle(styles.menuMobileOpen);

  const burgerOnClick = () =>
    menuClassToggle();

  const menuClickHandler = e => {
    const node = e.target.classList.value;
    if (isMobile && node.includes(styles.link)) {
      menuClassToggle();
    }
  };

  return (
    <menu
      className={`${styles.menu} ${isMobile ? styles.menuMobile : ''}`}
      ref={menuRef}
      onClick={menuClickHandler}
    >
      {isMobile && (
        <button
          onClick={burgerOnClick}
          className={styles.burger}
        >
          <span className={`${styles.stick} ${styles.topStick}`}/>
          <span className={`${styles.stick} ${styles.middleStick}`}/>
          <span className={`${styles.stick} ${styles.bottomStick}`}/>
        </button>
      )}
      <nav className={styles.navigation}>
        <div className={styles.menuList}>
          {menu.map(menuItem =>
            <Link
              key={uid()}
              href={menuItem.to}
            >
              <a className={`${styles.link} ${router.asPath === menuItem.to ? styles.linkActive : ''}`}>
                {menuItem.label}
              </a>
            </Link>
          )}
          {isMobile && <CalculatorButton/>}
        </div>
      </nav>
    </menu>
  );
};

export default Menu;