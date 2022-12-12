import {Provider} from 'react-redux';
import {store} from '../store/store';
import Layout from '../components/Layout';
import '../styles/globals.scss';

const MyApp = ({Component, pageProps}) =>
  <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>;

export default MyApp;
