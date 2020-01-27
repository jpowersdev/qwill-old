import React, { useEffect } from 'react';
import App from 'next/app';
import { ThemeProvider } from 'emotion-theming';
import theme from 'src/style/theme';
import globalStyle from 'src/style/global';
import normalize from 'src/style/normalize';
import { Global } from '@emotion/core';

const test = {
  ...theme,
  colors: {
    text: '#FDFAFA',
    background: '#333',
    primary: '#E291D7',
    secondary: '#9933ff',
    muted: '#E5EEEC',
    gray: '#dddddf',
    highlight: 'hsla(205, 100%, 40%, 0.125)'
  }
};

import Theme from '../hooks/useTheme';

const Wrapper = ({ Component, pageProps }) => {
  const { theme } = Theme.useContainer();

  return (
    <ThemeProvider theme={theme}>
      <link
        href='https://fonts.googleapis.com/css?family=Roboto+Slab|Work+Sans:900&display=swap'
        rel='stylesheet'
      ></link>
      <React.Fragment>
        <Component {...pageProps} />
        <Global styles={normalize} />
        <Global styles={globalStyle} />
      </React.Fragment>
    </ThemeProvider>
  );
};

const MyApp = props => {
  return (
    <Theme.Provider>
      <Wrapper {...props} />
    </Theme.Provider>
  );
};

export default MyApp;
