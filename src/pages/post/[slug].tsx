import React from 'react';
import { Box, Text } from 'rebass';

import Nav from 'src/components/Navigation';
import Wrapper from 'src/components/Layout/Wrapper';
import { Link } from 'src/components/Navigation/NextLink';

const Home = props => (
  <Wrapper>
    <Nav title={props.title} />

    <Box my={2} mx={4}>
      <Text fontSize={2}>
        by{' '}
        <Link
          href='/author/[slug]'
          mask={`/author/jpowers`}
          sx={{
            ':hover': {
              textDecoration: 'underline'
            }
          }}
        >
          Cthulu
        </Link>
      </Text>
    </Box>

    <Box m={4}>
      <Text as='p' my={3} fontSize={3} lineHeight={1.75}>
        Donec sed risus non purus laoreet commodo sed sed nulla. Donec elit dui,
        eleifend ut mi in, gravida vestibulum velit.
      </Text>

      <Text as='p' my={3} fontSize={3} lineHeight={1.75}>
        Praesent ac aliquam ante, consequat faucibus quam. Duis efficitur elit
        urna, nec ullamcorper ex iaculis ut. Praesent luctus felis ut eros
        pulvinar, a consequat eros elementum. Aliquam erat volutpat. Praesent
        eget dui posuere, efficitur felis non, volutpat erat.
      </Text>

      <Text as='p' my={3} fontSize={3} lineHeight={1.75}>
        Sed efficitur lacinia ligula eu iaculis. Donec finibus pulvinar
        pellentesque. In hac habitasse platea dictumst. Phasellus vestibulum
        vulputate velit elementum pellentesque. Proin lacinia sapien ut elit
        condimentum, vel eleifend urna accumsan. Praesent mollis congue rhoncus.
        Integer luctus est id felis cursus, id hendrerit velit porta.
      </Text>

      <Text as='p' my={3} fontSize={3} lineHeight={1.75}>
        Mauris gravida purus vitae purus posuere porttitor. In mollis eu est
        eget maximus. Cras sed justo vel ligula egestas tincidunt. Duis
        tristique tellus ac mauris porta, molestie sollicitudin leo venenatis.
        Fusce viverra, leo quis sodales congue, eros justo cursus leo, id cursus
        libero elit pretium massa. Vivamus congue mollis arcu non dapibus.
        Mauris egestas varius mattis. Nulla gravida iaculis purus, non pretium
        quam gravida et.
      </Text>

      <Text as='p' my={3} fontSize={3} lineHeight={1.75}>
        Praesent elementum facilisis libero, non vestibulum metus ultrices ut.
        Donec elementum est sit amet turpis finibus, vel lacinia tellus
        efficitur. Praesent tempus sem ligula, at maximus felis mollis vitae.
        Fusce at felis a eros rhoncus vestibulum a in massa. Vivamus gravida
        iaculis leo in scelerisque. Nam maximus et massa lacinia laoreet.
        Curabitur ultricies in orci vitae auctor. Nam commodo iaculis tellus sit
        amet tempor. Curabitur vitae velit tortor. Morbi suscipit faucibus nisl
        in condimentum.
      </Text>

      <Text as='p' my={3} fontSize={3} lineHeight={1.75}>
        Fusce mollis nec odio at tempor. Aenean quam est, cursus ac quam a,
        volutpat sodales lacus. Curabitur sed gravida ante. Aliquam finibus
        ipsum risus. Sed nec auctor ex. Suspendisse at tincidunt leo, non
        fringilla mauris. Cras mollis quam ac ipsum semper, ut fermentum est
        porttitor. Curabitur condimentum bibendum massa eu bibendum. Fusce
        pretium, augue ac scelerisque ornare, nunc ante blandit lorem, nec
        maximus risus purus eget lorem. Donec quam lectus, rhoncus vitae maximus
        non, dignissim et dui.
      </Text>

      <Text as='p' my={3} fontSize={3} lineHeight={1.75}>
        Integer varius, lectus nec tempor efficitur, nisl est posuere felis, a
        faucibus arcu lorem eget tortor. In hac habitasse platea dictumst. Morbi
        quis vestibulum dui, a pulvinar elit. Quisque maximus gravida tempor.
        Quisque malesuada enim at nunc dictum, a volutpat tortor porta. Vivamus
        pellentesque id est id volutpat. Nunc sit amet enim convallis,
        ullamcorper augue at, tempor nisl. Sed venenatis dignissim dolor ac
        malesuada. Aliquam id pharetra eros, eget aliquam mauris. Duis sit amet
        vehicula turpis, in pharetra elit.
      </Text>
    </Box>
  </Wrapper>
);

Home.getInitialProps = async ctx => {
  return {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  };
};

export default Home;
