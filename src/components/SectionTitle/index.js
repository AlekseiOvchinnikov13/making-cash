import {sectionTitle} from '../../styles/components/SectionTitle.module.scss';
import Subtitle from '../Subtitle';

const SectionTitle = ({title, subtitle}) => {
  return (
    <>
      <h6 className={sectionTitle}>{title}</h6>
      {subtitle && <Subtitle label={subtitle}/>}
    </>
  );
};

export default SectionTitle;