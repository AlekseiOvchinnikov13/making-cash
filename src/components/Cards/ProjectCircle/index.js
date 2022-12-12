import {useEffect, useState} from 'react';
import Link from 'next/link';
import {PROJECT_DATA} from '../../../data/projects';
import ImageContainer from '../../ImageContainer';
import Arrow from '../../Arrow';
import {whiteColor} from '../../../styles/variables.module.scss';
import styles from '../../../styles/components/ProjectCircle.module.scss';

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
      <Link href={`projects/${id}`}>
        <a className={styles.projectLink}>
          <Arrow isLong={false} direction={'down'} fillColor={whiteColor}/>
        </a>
      </Link>
    </div>
  );
};

export default ProjectCircle;