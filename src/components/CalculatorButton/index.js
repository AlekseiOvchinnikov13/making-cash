import {menuCalcItem} from '../../data/menu';
import Link from 'next/link';
import styles from '../../styles/components/CalculatorButton.module.scss';

const CalculatorButton = () =>
  <Link href={menuCalcItem.to}>
    <a className={`${styles.calculatorButton} buttonCommonStyle`}>
      {menuCalcItem.label}
    </a>
  </Link>;

export default CalculatorButton;