import styles from '../../styles/components/PostCard.module.scss';
import Arrow from '../Arrow';
import {whiteColor} from '../../styles/variables.module.scss';

const PostCard = ({title, link, isSoon, isIntro, name}) => {

  return (
    <a
      className={styles.postCard}
      href={link}
      target={'_blank'}
      rel="noreferrer"
    >
      <p className={styles.title}>
        {isIntro ? 'INTRODUCTORY ARTICLE' : `HOW TO STAKE ${name.toUpperCase()}`}
        <Arrow
          className={styles.arrow}
          fillColor={whiteColor}
        />
      </p>
      <p className={styles.text}>{title}</p>
      <p className={styles.source}>
        {isSoon && <span>Soon </span>}
        medium.com
      </p>
    </a>
  );
};

export default PostCard;