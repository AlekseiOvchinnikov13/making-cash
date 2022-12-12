import {useState} from 'react';
import styles from '../../../styles/components/AccordionItem.module.scss';

const AccordionItem = ({data: {label, text}}) => {
  const [isActive, setIsActive] = useState(false);
  const onClickHandler = () => setIsActive(!isActive);

  return (
    <div className={`${styles.accordionItem} ${isActive ? styles.accordionItemActive : ''}`}>
      <div className={styles.header}>
        <p className={styles.title}>{label}</p>
        <button
          className={styles.arrowBtn}
          onClick={onClickHandler}
        />
      </div>
      <p
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: text
        }}
      />
    </div>
  );
};

export default AccordionItem;