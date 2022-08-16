import SectionTitle from '../SectionTitle';
import Coordinates from '../Coordinates';
import {footerTitle} from '../../styles/components/Footer.module.scss';

const Footer = () =>
  <footer className={'container'}>
    <SectionTitle classNameTitle={footerTitle} title={'our coordinates'}/>
    <Coordinates/>
  </footer>;

export default Footer;