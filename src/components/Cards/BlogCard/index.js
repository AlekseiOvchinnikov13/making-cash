import styles from '../../../styles/components/BlogCard.module.scss';
import ImageContainer from '../../ImageContainer';
import LinkArrow from '../../LinkArrow';
import {cleanText, isMobile, isSmallMobile} from '../../../utils';
import {format} from 'date-fns';

const BlogCard = ({data: {title, link, thumbnail, pubDate, description, categories}, isEven}) => {
  const text = `${cleanText(description)
    .slice(0, isMobile
      ? isSmallMobile
        ? 75
        : 250
      : isEven
        ? 250
        : 150)}...`;

  return (
    <div className={styles.blogCard}>
      <ImageContainer
        className={styles.image}
        alt={title}
        src={thumbnail}
        objectFit={'cover'}
        unoptimized
      />
      <div className={styles.textWrapper}>
        <h6 className={styles.title}>{title}</h6>
        <div className={styles.descrWrapper}>
          <p className={styles.description}>
            {text}
          </p>
          <span className={styles.pubDate}>{format(new Date(pubDate), 'dd.MM.yyyy')}</span>
          <span className={styles.tag}>{categories[0]}</span>
        </div>
        <LinkArrow
          className={styles.link}
          text={'Read more'}
          target={'_blank'}
          to={link}
        />
      </div>
    </div>
  );
};

export default BlogCard;