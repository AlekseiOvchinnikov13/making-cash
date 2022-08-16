import Arrow from '../Arrow';
import styles from '../../styles/components/ReadMore.module.scss';
import {aquamarineColor} from '../../styles/variables.module.scss';

const ReadMore = ({onClick, textOpen, isOpen, className}) => {
  return (
    <button
      className={`${styles.readMore} ${className} ${isOpen ? styles.readMoreOpen : ''}`}
      onClick={onClick}
    >
      {!isOpen && textOpen}
      {isOpen && 'Show less'}
      <Arrow
        isLong={false}
        direction={isOpen ? 'up' : 'down'}
        fillColor={aquamarineColor}
        className={styles.arrow}
      />
    </button>
  );
};

export default ReadMore;