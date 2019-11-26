import React from 'react';
import NextHead from 'next/head';

const defaultTitle = 'Qwill Blog';
const defaultDescription =
  'A place to share our thoughts about web development, digital marketing, and the future of technology | Qwill Blog';
const defaultOGURL = 'https://qwill.dev/';
const defaultOGImage = '';

const Head = props => {
  return (
    <NextHead>
      <meta charSet='UTF-8' />
      <title>
        {props.metaTitle
          ? props.metaTitle
          : props.title
          ? `${props.title} | Qwill Blog`
          : defaultTitle}
      </title>
      <meta
        name='description'
        content={props.description || defaultDescription}
      />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
      <meta property='og:url' content={props.ogUrl || defaultOGURL} />
      <meta property='og:title' content={props.ogTitle || defaultTitle} />
      <meta
        property='og:description'
        content={props.ogDescription || defaultDescription}
      />
      <meta name='twitter:site' content={props.ogUrl || defaultOGURL} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:image' content={props.ogImage || defaultOGImage} />
      <meta property='og:image' content={props.ogImage || defaultOGImage} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
    </NextHead>
  );
};

export default Head;
