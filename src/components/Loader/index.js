import ReactLoading from 'react-loading';
import {loader} from '../../styles/Components/Loader.module.scss';
import {aquamarineColor} from '../../styles/variables.module.scss';

const Loader = () => (
  <div className={loader}>
    <ReactLoading type="spin" color={aquamarineColor}/>
  </div>
);

export default Loader;