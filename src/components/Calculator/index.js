import useProjects from '../../hooks/useProjects';
import ImageContainer from '../ImageContainer';
import Loader from '../Loader';
import BgAboveTheFold from '../../../public/assets/images/bg-above-the-fold5.svg';
import styles from '../../styles/components/calculator/Calculator.module.scss';
import {useEffect, useState} from 'react';
import Selector from './Selector';
import Toggle from './Toggle';

const Calculator = ({projectId = 'solana'}) => {
  const dataArray = useProjects();
  const [activeCurrency, setActiveCurrency] = useState(false);

  const setActiveCurrencyHandler = currency =>
    setActiveCurrency(currency);

  useEffect(() => {
    setActiveCurrency(dataArray?.find(currency => currency.id === projectId));
  }, [dataArray, projectId]);

  const [isCrypto, setIsCrypto] = useState(true);
  const isCryptoHandler = () => setIsCrypto(!isCrypto);

  // console.log(dataArray);

  if (!dataArray || !activeCurrency) return <Loader/>;

  return (
    <div className={styles.calculator}>
      <ImageContainer
        src={BgAboveTheFold}
        alt={'shadow'}
        className={styles.bgAboveTheFold}
      />

      <Selector
        activeCurrency={activeCurrency}
        onClick={setActiveCurrencyHandler}
      />
      <Toggle
        activeCurrency={activeCurrency}
        isCrypto={isCrypto}
        onClick={isCryptoHandler}
      />
      <div></div>
      <div></div>
      <div className={styles.earningStakeBlock}>
        <div className={styles.earningWrapper}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Calculator;