import {useState} from 'react';
import styles from '../../../styles/components/AccordionItem.module.scss';

const AccordionItem = ({data: {label, text}}) => {
  const [isActive, setIsActive] = useState(false);
  const onClickHandler = () => setIsActive(!isActive);

  return (
    <buton
      className={`${styles.accordionItem} ${isActive ? styles.accordionItemActive : ''}`}
      onClick={onClickHandler}
    >
      <div className={styles.header}>
        <p className={styles.title}>{label}</p>
        <div className={styles.arrowBtn}/>
      </div>
      <p
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: text
        }}
      />
    </buton>
  );
};

export default AccordionItem;