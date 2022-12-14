import {cleanText} from '../../../utils';
import LinkArrow from '../../LinkArrow';
import {format} from 'date-fns';
import styles from '../../../styles/components/PostRaw.module.scss';

const PostRaw = ({data: {pubDate, title, description, link}}) =>
  <div className={styles.postRaw}>
    <p className={styles.datePub}>{format(new Date(pubDate), 'dd MMMM')}</p>
    <div className={styles.textWrapper}>
      <p className={styles.title}>{title}</p>
      <p className={styles.subTitle}>{cleanText(description)}</p>
    </div>
    <LinkArrow
      to={link}
      text={'Explore'}
      target={'_blank'}
      isLong
      className={styles.exploreLink}
    />
  </div>;

export default PostRaw;