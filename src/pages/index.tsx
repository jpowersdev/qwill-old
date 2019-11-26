import React, { useState } from 'react';

import Nav from 'src/components/Navigation';
import Wrapper from 'src/components/Layout/Wrapper';
import BlogList from 'src/components/Blog/BlogList';
import BlogCard from 'src/components/Blog/BlogCard';
import Head from 'src/components/Utility/Head';

import { client } from 'src/util/client';
import { Flex } from 'rebass';
import Avatar from 'src/components/Images/Avatar';
import { urlFor } from 'src/util/images';

const Home = props => {
  return (
    <Wrapper>
      <Head metaTitle='Qwill Blog' />
      <Nav />

      <Flex m={4} mb={5} flexWrap='wrap'>
        {props.authors.map(author => (
          <Avatar
            link
            src={urlFor(author.image)
              .auto('format')
              .width(150)
              .height(150)
              .url()}
            name={author.name.split(' ')[0]}
            slug={author.slug.current}
          />
        ))}
        {/* <Avatar link src='/static/slyons.jpg' name='Sean' slug='slyons' />
        <Avatar
          link
          src='/static/fmarasco.jpeg'
          name='Franchesca'
          slug='fmarasco'
        />
        <Avatar link src='/static/jpowers.jpeg' name='Jon' slug='jpowers' /> */}
      </Flex>

      <BlogList>
        {props.posts.map(post => (
          <BlogCard
            key={post._id}
            author={{ name: post.author.name, slug: post.author.slug.current }}
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

Home.getInitialProps = async () => {
  const q = `
  {
    "authors": *[_type == 'author'],
    "posts": *[_type == 'post']{
      ...,
      "author": author->{
        slug,
        name
      }
    }
  }
  `;
  return await client.fetch(q);
};

export default Home;
