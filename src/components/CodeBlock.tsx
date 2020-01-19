const React = require('react');
import Lowlight from 'react-lowlight';

import styled from '@emotion/styled';

/**
 * Can add new stylesheets by copying from
 * https://github.com/highlightjs/highlight.js/tree/master/src/styles
 */
import { a11yLight } from 'src/style/markdown/a11y-light';
import { monokai } from 'src/style/markdown/monokai';
import { useEffect, useState } from 'react';

const StyledMarkdown = styled.div`
  ${okadia}
`;

import Prism from 'prismjs';
import { okadia } from 'src/style/markdown/okadia';

const CodeBlock = props => {
  // Map shorthand to package name
  const languages = {
    css: 'css',
    bash: 'bash'
  };

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <StyledMarkdown>
      <pre className={`language-${props.language}`}>
        <code className={`language-${props.language}`}>{props.value}</code>
      </pre>
    </StyledMarkdown>
  );

  // // Dynamic required based on language requested
  // const pkg = languages[props.language] || props.language;
  // // const lang = require(`highlight.js/lib/languages/${pkg}`);

  // // Fallback if package doesn't exist
  // if (!lang) {
  //   return (
  //     <StyledMarkdown>
  //       <Lowlight value={props.value} />
  //     </StyledMarkdown>
  //   );
  // }

  // // If not fallback, register the required language
  // Lowlight.registerLanguage(props.language, lang);

  // // Render that bad boy
  // return (
  //   <StyledMarkdown>
  //     <Lowlight language={props.language} value={props.value} />
  //   </StyledMarkdown>
  // );
};

export default CodeBlock;
