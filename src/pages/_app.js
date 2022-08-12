import '../styles/globals.scss';
import Layout from '../components/Layout';
import {store} from '../store/store';
import {Provider} from 'react-redux';

const MyApp = ({Component, pageProps}) =>
  <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>;

export default MyApp;
