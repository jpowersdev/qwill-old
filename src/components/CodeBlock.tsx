const React = require('react');
import Lowlight from 'react-lowlight';

import styled from '@emotion/styled';

/**
 * Can add new stylesheets by copying from
 * https://github.com/highlightjs/highlight.js/tree/master/src/styles
 */
import { a11yLight } from 'src/style/markdown/a11y-light';
import { monokai } from 'src/style/markdown/monokai';

const StyledMarkdown = styled.div`
  ${a11yLight}
  /* ${monokai} */
  .hljs {
    background: #f5f5f5;
  }
`;

const CodeBlock = props => {
  // Map shorthand to package name
  const languages = {
    js: 'javascript',
    css: 'css'
  };

  // Dynamic required based on language requested
  const pkg = languages[props.language] || props.language;
  const lang = require(`highlight.js/lib/languages/${pkg}`);

  // Fallback if package doesn't exist
  if (!lang) {
    return (
      <StyledMarkdown>
        <Lowlight value={props.value} />
      </StyledMarkdown>
    );
  }

  // If not fallback, register the required language
  Lowlight.registerLanguage(props.language, lang);

  // Render that bad boy
  return (
    <StyledMarkdown>
      <Lowlight language={props.language} value={props.value} />
    </StyledMarkdown>
  );
};

export default CodeBlock;
