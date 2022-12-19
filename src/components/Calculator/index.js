import {useEffect, useState} from 'react';
import {uid} from 'uid';
import useProjects from '../../hooks/useProjects';
import ImageContainer from '../ImageContainer';
import Loader from '../Loader';
import Selector from './Selector';
import Toggle from './Toggle';
import Input from './Input';
import EarnCard from './EarnCard';
import Arrow from '../Arrow';
import {EARNING_CARDS_DATA} from '../../data/calculator';
import BgAboveTheFold from '../../../public/assets/images/bg-above-the-fold5.svg';
import {whiteColor} from '../../styles/variables.module.scss';
import styles from '../../styles/components/calculator/Calculator.module.scss';
import {PROJECT_DATA} from '../../data/projects';

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

  const [cryptoValue, setCryptoValue] = useState(1);
  const [usdValue, setUsdValue] = useState(1);

  const calcInputValues = value => {
    if (value < 0) return;
    if (isCrypto) {
      setCryptoValue(value);
      setUsdValue(value * activeCurrency?.current_price);
    } else {
      setUsdValue(value);
      setCryptoValue(value / activeCurrency?.current_price);
    }
  };

  const inputChangeHandler = e => {
    calcInputValues(e.target.value);
  };

  useEffect(() => {
    calcInputValues(cryptoValue);
  }, [isCrypto, activeCurrency]);

  const [stakeLink, setStakeLink] = useState();

  useEffect(() => {
    setStakeLink(PROJECT_DATA.find(project => project.id === activeCurrency.id)?.link);
  }, [activeCurrency?.id]);

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
      <Input
        activeCurrency={activeCurrency}
        isCrypto={isCrypto}
        onChange={inputChangeHandler}
        value={cryptoValue}
      />
      <Input
        activeCurrency={activeCurrency}
        isCrypto={isCrypto}
        onChange={inputChangeHandler}
        value={usdValue}
        isUSDInput
      />
      <div className={styles.earningStakeBlock}>
        <div className={styles.earningWrapper}>
          {EARNING_CARDS_DATA.map(item =>
            <EarnCard
              key={uid()}
              isCrypto={isCrypto}
              activeCurrency={activeCurrency}
              data={item}
              cryptoValue={cryptoValue}
              usdValue={usdValue}
            />
          )}
        </div>
        <a
          className={`${styles.stakeBtn} buttonCommonStyle`}
          target={'blank'}
          href={stakeLink}
        >
          stake now
          <Arrow
            className={styles.arrow}
            fillColor={whiteColor}
          />
        </a>
      </div>
    </div>
  );
};

export default Calculator;