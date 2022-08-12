import ImageContainer from '../../ImageContainer';
import styles from '../../../styles/components/Coordinates.module.scss';

const Contact = ({data}) =>
  <a href={data.link} className={styles.contactLink}>
    <ImageContainer src={data.img} alt={data.label} className={styles.icon}/>
    <p className={styles.contactText}>{data.label}</p>
  </a>;

export default Contact;