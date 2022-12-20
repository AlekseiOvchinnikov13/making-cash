import {useState} from 'react';
import {uid} from 'uid';
import {useGetProjectsQuery} from '../../../store/projects/projectApi';
import Loader from '../../Loader';
import Arrow from '../../Arrow';
import {PROJECT_DATA} from '../../../data/projects';
import styles from '../../../styles/components/calculator/Selector.module.scss';

const Selector = ({activeCurrency, onClick, isProject}) => {
  const {data: dataArray, isLoading} = useGetProjectsQuery(PROJECT_DATA.map(item => item.id));
  const [isOpen, setIsOpen] = useState(false);
  const onClickHandler = e => {
    setIsOpen(!isOpen);
    const clickedCurrency = dataArray.find(currency => currency.id === e.target.value);
    onClick(clickedCurrency);
  };

  if (!activeCurrency || isLoading) return <Loader/>;

  return (
    <div className={`${styles.selector} ${isOpen ? styles.selectorOpen : ''}`}>
      <button
        className={`${styles.selectedValue} ${styles.value}`}
        onClick={() => setIsOpen(!isOpen)}
        disabled={isProject}
      >
        {activeCurrency.name}
        {!isProject &&
          <Arrow
            isLong={false}
            direction={'down'}
            className={styles.arrow}
          />}
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