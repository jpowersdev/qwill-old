import React, { useState } from 'react';
import { Box, Card, Heading, Text, Flex } from 'rebass';

import { Link } from 'src/components/Navigation/NextLink';

const Home = () => (
  <Flex
    height='100vh'
    width='100vw'
    flexDirection='column'
    alignItems='center'
    justifyContent='center'
  >
    <Heading as='h1' my={3}>
      Error - 404
    </Heading>
    <Link href='/'>Go Home</Link>
  </Flex>
);

export default Home;
