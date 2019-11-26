import React, { useState } from 'react';

import Nav from 'src/components/Navigation';
import Wrapper from 'src/components/Layout/Wrapper';
import BlogList from 'src/components/Blog/BlogList';
import BlogCard from 'src/components/Blog/BlogCard';
import Head from 'src/components/Utility/Head';

import { client } from 'src/util/client';

const Home = props => {
  return (
    <Wrapper>
      <Head metaTitle='Qwill Blog' />
      <Nav />

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
