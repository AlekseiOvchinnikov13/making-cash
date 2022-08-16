import styles from '../../styles/components/ProjectCircle.module.scss';
import ImageContainer from '../ImageContainer';
import {useEffect, useState} from 'react';
import {PROJECT_DATA} from '../../data/projects';
import Arrow from '../Arrow';
import {whiteColor} from '../../styles/variables.module.scss';

const ProjectCircle = ({
  data: {
    name,
    image,
    id
  }
}) => {
  const [projectStaticData, setProjectStaticData] = useState();

  useEffect(() => {
    setProjectStaticData(PROJECT_DATA.find(project => project.id === id));
  }, [id]);

  return (
    <div className={styles.projectCircle}>
      <ImageContainer
        className={styles.img}
        src={image}
        alt={name}
      />
      <p className={styles.projectTitle}>{name}</p>
      <p className={styles.apy}>{projectStaticData?.apy ? projectStaticData.apy : 'soon'}</p>
      {/*<Link >*/}
      <a href={projectStaticData?.link} className={styles.projectLink} target={'_blank'} rel="noreferrer">
        <Arrow isLong={false} direction={'down'} fillColor={whiteColor}/>
      </a>
      {/*</Link>*/}
    </div>
  );
};

export default ProjectCircle;