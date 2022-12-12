import {useEffect, useState} from 'react';
import Head from 'next/head';
import {isBrowser} from '../../utils';
import Header from '../Header';
import Footer from '../Footer';
import styles from '../../styles/components/Layout.module.scss';

const Layout = ({children}) => {
  const [, setSize] = useState([0, 0]);
  const updateSize = () => isBrowser() && setSize([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    isBrowser() && window.addEventListener('resize', updateSize);
    updateSize();
    return () => isBrowser() && window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <>
      <Head>
        <title>Making Cash</title>
        <meta name="description" content="Trusted and Secure Validator"/>
        <link rel="icon" href="/assets/favicon/favicon.ico"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/assets/favicon/site.webmanifest"/>
        <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#3398b5"/>
        <meta name="apple-mobile-web-app-title" content="Making.cash"/>
        <meta name="application-name" content="Making.cash"/>
        <meta name="msapplication-TileColor" content="#603cba"/>
        <meta name="theme-color" content="#000000"/>
      </Head>
      <Header/>
      <main className={styles.layout}>{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;