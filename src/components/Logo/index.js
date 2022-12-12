import Link from 'next/link';
import LogoSvg from './images/logo.svg';
import ImageContainer from '../ImageContainer';
import styles from '../../styles/components/Logo.module.scss';

const Logo = () =>
  <Link href="/">
    <a className={styles.linkLogo}>
      <div className={styles.logo}>
        <ImageContainer
          src={LogoSvg}
          alt="logo"
        />
      </div>
    </a>
  </Link>;

export default Logo;