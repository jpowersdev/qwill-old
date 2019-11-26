import React from 'react';
import { Box, Heading, Text, Flex } from 'rebass';
import Nav from 'src/components/Navigation';
import Wrapper from 'src/components/Layout/Wrapper';
import BlogList from 'src/components/Blog/BlogList';
import BlogCard from 'src/components/Blog/BlogCard';
import Avatar from 'src/components/Images/Avatar';
import Head from 'src/components/Utility/Head';
import { client } from 'src/util/client';
import { urlFor } from 'src/util/images';

const Author = props => {
  return (
    <Wrapper>
      <Head title={props.title} />
      <Nav title={props.name} />

      <Flex mx={4} mb={5} alignItems='center'>
        <Avatar
          src={urlFor(props.image)
            .auto('format')
            .width(95)
            .height(95)
            .url()}
          link={false}
        />
        <Box ml={3}>
          <Heading mb={2}>{props.catchphrase.title}</Heading>
          <Text>{props.catchphrase.subtitle}</Text>
        </Box>
      </Flex>
      <BlogList>
        {props.posts.map(post => (
          <BlogCard
            key={post._id}
            author={{ name: props.name, slug: props.slug.current }}
            title={post.title}
            excerpt={post.tagline}
            date={new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
            slug={post.slug.current}
            minutes={post.lengthInMinutes}
          />
        ))}
      </BlogList>
    </Wrapper>
  );
};

Author.getInitialProps = async ctx => {
  const { slug } = ctx.query;

  const data = await client.fetch(`
    *[_type == 'author' && slug.current == '${slug}'][0]{
      ...,
      "posts": *[_type == 'post' && references(^._id)]
    }
  `);
  return data;
};

export default Author;
