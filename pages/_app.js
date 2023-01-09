import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import Head from 'next/head';
import Script from 'next/script';
import {
  createContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Layout from '../components/Layout';
import FormProvider from '../context/FormContext';
import StudiIndependenPopupProvider from '../context/StudiIndependenPopupContext';
import '../styles/globals.css';

let theme = createTheme({
  typography: {
    fontFamily: ['Sora', 'Sans serif'].join(','),
  },
  palette: {
    sc_blue: {
      main: '#0056D2',
      dark: '#003B8F',
      contrastText: '#FFFF',
    },
    sc_sky: {
      main: '#80AAE8',
      contrastText: '#FFFF',
    },
    sc_yellow: {
      main: '#FDB72B',
      dark: '#DFA00E',
    },
    sc_black: {
      main: '#2B2C27',
    },
    sc_gray: {
      main: '#BDBDBD',
      dark: '#69686B',
    },
    sc_white: {
      main: '#FFFFFF',
    },
  },
});

theme = responsiveFontSizes(theme);

function MyApp({ Component, pageProps }) {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'UA-247990536-1');
  }, []);

  return (
    <FormProvider>
      <StudiIndependenPopupProvider>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-247990536-1"
        />
        <Script
          async
          data-watzapkey="b4Ua946"
          src="https://cdn.watzap.id/widget-api.js"
        />
        <ThemeProvider theme={theme}>
          {pageLoaded ? (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          ) : null}
        </ThemeProvider>
      </StudiIndependenPopupProvider>
    </FormProvider>
  );
}

export default MyApp;
