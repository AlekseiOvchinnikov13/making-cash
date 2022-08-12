import LogoSvg from './images/logo.svg';
import Link from 'next/link';
import ImageContainer from '../ImageContainer';

const Logo = ({className}) => (

  <Link href="/">
    <a style={{width: '33%'}}>
      <div className={className}>
        <ImageContainer
          src={LogoSvg}
          alt="logo"
        />
      </div>
    </a>
  </Link>
);


export default Logo;