import React, { useState } from 'react';
import { Box, Card, Heading, Text, Image, Flex } from 'rebass';
import Nav from 'src/components/Navigation';
import Wrapper from 'src/components/Layout/Wrapper';
import BlogList from 'src/components/Blog/BlogList';
import BlogCard from 'src/components/Blog/BlogCard';
import Avatar from 'src/components/Images/Avatar';

const Author = props => {
  console.log(props);
  let post;
  switch (props.slug) {
    case 'slyons':
      post = (
        <BlogCard
          author={{ name: 'Sean Lyons', slug: 'slyons' }}
          title='Why Atom is the best editor in the whole world'
          excerpt="It's just so pretty. That's all that matters."
          date='October 15, 2012'
          minutes='101'
        />
      );
      break;
    case 'ajardiah':
      post = (
        <BlogCard
          author={{ name: 'AJ Jardiah', slug: 'ajardiah' }}
          title="If you haven't tried Laravel, your life is a joke"
          excerpt='By the way, check out my sass workflow.'
          date='August 21, 2019'
          minutes='10'
        />
      );
      break;
    case 'fmarasco':
      post = (
        <BlogCard
          author={{ name: 'Franchesca Marasco', slug: 'fmarasco' }}
          title="What the hit podcast 'My Favorite Murder' can teach you about working with clients."
          excerpt="And it's not what you think!"
          date='November 17, 2019'
          minutes='10'
        />
      );
      break;
    case 'jpowers':
      post = (
        <BlogCard
          author={{ name: 'Jon Powers', slug: 'jpowers' }}
          title='Bacon, Eggs, and Coffee are all you need to be a great developer.'
          excerpt='Cholesterol is good for your brain.'
          date='November 20, 2019'
          minutes='10'
        />
      );
      break;
    default:
      break;
  }
  return (
    <Wrapper>
      <Nav title={props.title} />

      <Flex mx={4} mb={5} alignItems='center'>
        <Avatar src={props.image} link={false} />
        <Box ml={3}>
          <Heading mb={2}>{props.tagline}</Heading>
          <Text>{props.description}</Text>
        </Box>
      </Flex>
      <BlogList>
        {post || (
          <Box>
            <Heading color='primary'>Oh no... there's nothing here</Heading>
          </Box>
        )}
      </BlogList>
    </Wrapper>
  );
};

Author.getInitialProps = async ctx => {
  const { slug } = ctx.query;

  switch (slug) {
    case 'ajardiah':
      return {
        title: 'AJ Jardiah',
        tagline: 'King of Cool',
        description: 'Fan of all things dope',
        image: '/static/ajardiah.jpg',
        slug
      };
    case 'slyons':
      return {
        title: 'Sean Lyons',
        tagline: 'Huge fan of Skydiving',
        description: 'I love feeling the wind in my parachute',
        image: '/static/slyons.jpg',
        slug
      };
    case 'fmarasco':
      return {
        title: 'Franchesca Marasco',
        tagline: "Oh? You're Approaching Me?",
        description: "Instead of running away, you're coming right to me?",
        image: '/static/fmarasco.jpeg',
        slug
      };
    case 'jpowers':
      return {
        title: 'Jon Powers',
        tagline: 'Why is there never a sitemap?',
        description: 'And they wonder why 65 pages are missing.',
        image: '/static/jpowers.jpeg',
        slug
      };
    default:
      ctx.res.statusCode = 404;
      return {};
  }
};

export default Author;
