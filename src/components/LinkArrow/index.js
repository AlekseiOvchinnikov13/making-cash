import Arrow from '../Arrow';
import Link from 'next/link';
import styles from '../../styles/components/LinkArrow.module.scss';
import {aquamarineColor} from '../../styles/variables.module.scss';

const LinkArrow = ({to, text, className, direction, isLong}) => {
  return (
    <Link href={to}>
      <a className={`${styles.linkArrow} ${className}`}>
        {text}
        <Arrow
          direction={direction ? direction : 'right'}
          isLong={isLong}
          fillColor={aquamarineColor}
          className={styles.arrow}
        />
      </a>
    </Link>
  );
};

export default LinkArrow;