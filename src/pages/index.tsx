import React, { useState } from 'react';

import Nav from 'src/components/Navigation';
import Wrapper from 'src/components/Layout/Wrapper';
import BlogList from 'src/components/Blog/BlogList';
import BlogCard from 'src/components/Blog/BlogCard';

const Home = () => (
  <Wrapper>
    <Nav />

    <BlogList>
      <BlogCard
        author={{ name: 'AJ Jardiah', slug: 'ajardiah' }}
        title="If you haven't tried Laravel, your life is a joke"
        excerpt='By the way, check out my sass workflow.'
        date='August 21, 2019'
        minutes='10'
      />
      <BlogCard
        author={{ name: 'Sean Lyons', slug: 'slyons' }}
        title='Why Atom is the best editor in the whole world'
        excerpt="It's just so pretty. That's all that matters."
        date='October 15, 2012'
        minutes='101'
      />
      <BlogCard
        author={{ name: 'Franchesca Marasco', slug: 'fmarasco' }}
        title="What the hit podcast 'My Favorite Murder' can teach you about working with clients."
        excerpt="And it's not what you think!"
        date='November 17, 2019'
        minutes='10'
      />
      <BlogCard
        author={{ name: 'Jon Powers', slug: 'jpowers' }}
        title='Bacon, Eggs, and Coffee are all you need to be a great developer.'
        excerpt='Cholesterol is good for your brain.'
        date='November 20, 2019'
        minutes='10'
      />
    </BlogList>
  </Wrapper>
);

export default Home;
