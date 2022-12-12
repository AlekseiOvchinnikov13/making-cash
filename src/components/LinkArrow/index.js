import Link from 'next/link';
import Arrow from '../Arrow';
import {aquamarineColor} from '../../styles/variables.module.scss';
import styles from '../../styles/components/LinkArrow.module.scss';

const LinkArrow = ({to, text, className, direction, isLong, ...other}) =>
  <Link href={to}>
    <a className={`${styles.linkArrow} ${className}`} target={'_blank'}>
      {text}
      <Arrow
        direction={direction ? direction : 'right'}
        isLong={isLong}
        fillColor={aquamarineColor}
        className={`${styles.arrow} ${isLong ? styles.longArrow : ''}`}
        {...other}
      />
    </a>
  </Link>;

export default LinkArrow;