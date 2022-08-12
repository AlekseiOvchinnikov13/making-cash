import {subtitle} from '../../styles/components/Subtitle.module.scss';

const Subtitle = ({label, className}) =>
  <p
    className={`${subtitle} ${className}`}
    dangerouslySetInnerHTML={{
      __html: label
    }}
  />;

export default Subtitle;