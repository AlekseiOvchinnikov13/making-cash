import {useState} from 'react';
import {uid} from 'uid';
import useProjects from '../../../hooks/useProjects';
import Loader from '../../Loader';
import Arrow from '../../Arrow';
import styles from '../../../styles/components/calculator/Selector.module.scss';

const Selector = ({activeCurrency, onClick}) => {
  const dataArray = useProjects();
  const [isOpen, setIsOpen] = useState(false);
  const onClickHandler = e => {
    setIsOpen(!isOpen);
    const clickedCurrency = dataArray.find(currency => currency.id === e.target.value);
    onClick(clickedCurrency);
  };

  if (!activeCurrency || !dataArray) return <Loader/>;

  return (
    <div className={`${styles.selector} ${isOpen ? styles.selectorOpen : ''}`}>
      <button
        className={`${styles.selectedValue} ${styles.value}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {activeCurrency.name}
        <Arrow
          isLong={false}
          direction={'down'}
          className={styles.arrow}
        />
      </button>
      <div className={styles.list}>
        {dataArray
          .filter(currency => currency.id !== activeCurrency.id)
          .map(currency =>
            <button
              key={uid()}
              className={styles.value}
              onClick={e => onClickHandler(e)}
              value={currency.id}
            >
              {currency.name}
            </button>
          )}
      </div>
    </div>
  );

};

export default Selector;