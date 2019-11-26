import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'emotion-theming';
import theme from 'src/style/theme';
import theme_old from 'src/style/theme_old';
import globalStyle from 'src/style/global';
import normalize from 'src/style/normalize';
import { Global } from '@emotion/core';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
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
  }
}

export default MyApp;
