import Subtitle from '../Subtitle';
import {aquamarineColor, grayColor} from '../../styles/variables.module.scss';
import {sectionTitle} from '../../styles/components/SectionTitle.module.scss';

const SectionTitle = ({title, subtitle, isGray, classNameTitle, classNameSubtitle}) => {
  return (
    <>
      <h6
        className={`${sectionTitle} ${classNameTitle}`}
        style={{color: isGray ? grayColor : aquamarineColor}}
      >
        {title}
      </h6>
      {subtitle && <Subtitle className={classNameSubtitle} label={subtitle}/>}
    </>
  );
};

export default SectionTitle;