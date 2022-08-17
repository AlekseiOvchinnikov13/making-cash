import SectionTitle from '../SectionTitle';
import Coordinates from '../Coordinates';
import ImageContainer from '../ImageContainer';
import BgDonutTop from '../../../public/assets/images/donut.svg';
import styles from '../../styles/components/Footer.module.scss';

const Footer = () =>
  <footer className={`${styles.footer} container`}>
    <ImageContainer
      className={styles.donut}
      src={BgDonutTop}
      alt={'donut'}
    />
    <SectionTitle classNameTitle={styles.footerTitle} title={'our coordinates'}/>
    <Coordinates/>
  </footer>;

export default Footer;