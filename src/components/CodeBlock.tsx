const React = require('react');
import Lowlight from 'react-lowlight';

import styled from '@emotion/styled';

/**
 * Can add new stylesheets by copying from
 * https://github.com/highlightjs/highlight.js/tree/master/src/styles
 */
import { useEffect } from 'react';

const StyledMarkdown = styled.div`
  ${okadia}

  .code-toolbar {
    position: relative;

    .toolbar {
      position: absolute;
      top: 5px;
      right: 7px;

      button {
        cursor: pointer;
        border: none;
        outline: none;
        background: rgba(255, 255, 255, 0.5);
      }
    }
  }
`;

import Prism from 'prismjs';
import { okadia } from 'src/style/markdown/okadia';

const CodeBlock = props => {
  useEffect(() => {
    Prism.highlightAll();

    document.getElementsByClassName('.');
  }, []);

  return (
    <StyledMarkdown>
      <pre className={`language-${props.language}`}>
        <code className={`language-${props.language}`}>{props.value}</code>
      </pre>
    </StyledMarkdown>
  );
};

export default CodeBlock;
