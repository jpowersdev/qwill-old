import React, { useState } from 'react';

import Nav from 'src/components/Navigation';
import Wrapper from 'src/components/Layout/Wrapper';
import BlogList from 'src/components/Blog/BlogList';
import BlogCard from 'src/components/Blog/BlogCard';
import Head from 'src/components/Utility/Head';

import { client } from 'src/util/client';
import { Flex, Box } from 'rebass';
import Avatar from 'src/components/Images/Avatar';
import { urlFor } from 'src/util/images';
import Page from 'src/style/page';

function sortAuthors(authors, posts) {
  let authorList = [];
  for (let i = 0; i < posts.length; i++) {
    if (!authorList.includes(posts[i].author._id)) {
      authorList.push(posts[i].author._id);
    }
  }
  if (authorList.length < authors.length) {
    for (let i = 0; i < authors.length; i++) {
      if (!authorList.includes(authors[i]._id)) {
        authorList.push(authors[i]._id);
      }
    }
  }
  return authorList.map(id => {
    let current;
    authors.forEach(author => {
      if (author._id === id) {
        current = author;
      }
    });
    return current;
  });
}

const Home = props => {
  const sorted = sortAuthors(props.authors, props.posts);
  console.log(sorted);
  return (
    <Page>
      <Wrapper>
        <Head metaTitle='Qwill Blog' />
        <Nav />

        <Box
          m={4}
          mb={4}
          sx={{
            display: 'grid',
            width: 'fit-content',
            gridTemplateColumns: ['repeat(2,auto)', 'repeat(4,auto)'],
            gridTemplateRows: ['repeat(2, 1fr)', '1fr']
          }}
        >
          {sorted.map(author => (
            <Avatar
              key={author._id}
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
        </Box>

        <BlogList>
          {props.posts.map(post => (
            <BlogCard
              key={post._id}
              author={{
                name: post.author.name,
                slug: post.author.slug.current
              }}
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
    </Page>
  );
};

Home.getInitialProps = async () => {
  const q = `
  {
    "authors": *[_type == 'author'],
    "posts": *[_type == 'post']|order(publishedAt desc){
      ...,
      "author": author->{
        _id,
        slug,
        name
      }
    }
  }
  `;
  return await client.fetch(q);
};

export default Home;
