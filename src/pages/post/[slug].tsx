import React from 'react';
import { Box, Text } from 'rebass';

import Nav from 'src/components/Navigation';
import Wrapper from 'src/components/Layout/Wrapper';
import { Link } from 'src/components/Navigation/NextLink';
import Head from 'src/components/Utility/Head';
import { client } from 'src/util/client';
import BlockContent from '@sanity/block-content-to-react';

const serializers = {
  types: {
    block: props => (
      <Text as='p' my={3} fontSize={3} lineHeight={1.75}>
        {props.children}
      </Text>
    )
  }
};

const Post = props => (
  <Wrapper>
    <Head title={props.title} />
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
      <BlockContent blocks={props.body} serializers={serializers} />
    </Box>
  </Wrapper>
);

Post.getInitialProps = async ctx => {
  const { slug } = ctx.query;
  const data = await client.fetch(`
    *[_type == 'post' && slug.current == '${slug}'][0]{
      ...,
      "author": author->{
        name,
        slug
      }
    }
  `);
  return data;
};

export default Post;
