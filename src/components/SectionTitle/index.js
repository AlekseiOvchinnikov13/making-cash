import Subtitle from '../Subtitle';
import {aquamarineColor, grayColor} from '../../styles/variables.module.scss';
import styles from '../../styles/components/SectionTitle.module.scss';

const SectionTitle = ({title, subtitle, isGray, classNameTitle, classNameSubtitle}) => {
  return (
    <>
      <h6
        className={`${styles.sectionTitle} ${classNameTitle} ${!subtitle ? styles.SectionTitleAlone : ''}`}
        style={{color: isGray ? grayColor : aquamarineColor}}
      >
        {title}
      </h6>
      {subtitle && <Subtitle className={classNameSubtitle} label={subtitle}/>}
    </>
  );
};

export default SectionTitle;