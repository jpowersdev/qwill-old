import React, { useEffect } from 'react';
import { Box, Text } from 'rebass';

import Nav from 'src/components/Navigation';
import Wrapper from 'src/components/Layout/Wrapper';
import { Link } from 'src/components/Navigation/NextLink';
import Head from 'src/components/Utility/Head';
import { client } from 'src/util/client';
const ReactMarkdown = require('react-markdown');
import styled from '@emotion/styled';
import CodeBlock from '../../components/CodeBlock';
import { markdown } from '../../style/markdown/markdown';

const Post = props => {
  return (
    <Wrapper>
      <Head title={props.title} {...props.seo} />
      <Nav title={props.title} />

      <Box my={2} mx={4}>
        <Text fontSize={2}>
          by{' '}
          <Link
            href='/author/[slug]'
            mask={`/author/${props.author.slug.current}`}
            sx={{
              ':hover': {
                textDecoration: 'underline'
              }
            }}
          >
            {props.author.name}
          </Link>
        </Text>
      </Box>

      <Box m={4}>
        <StyledMarkdown>
          <ReactMarkdown
            source={props.markdown}
            renderers={{ code: CodeBlock }}
          />
        </StyledMarkdown>
      </Box>
    </Wrapper>
  );
};

const StyledMarkdown = styled.div`
  ${markdown}
`;

Post.getInitialProps = async ctx => {
  const { slug } = ctx.query;
  const data = await client.fetch(`
    *[_type == 'post' && slug.current == '${slug}'][0]{
      ...,
      author->{
        name,
        slug
      }
    }
  `);
  return data;
};

export default Post;
