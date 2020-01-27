import { Box, Heading, Text, Flex, Image } from 'rebass';
import { Link } from './NextLink';
import { TiArrowBack } from 'react-icons/ti';

import { FaToggleOff, FaToggleOn } from 'react-icons/fa';
import Theme from 'src/hooks/useTheme';
import { useState } from 'react';

const Nav = props => {
  const { toggle, isLight } = Theme.useContainer();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: ['column-reverse', 'row'],
        alignItems: ['flex-start'],
        justifyContent: 'space-between'
      }}
    >
      <Box m={4}>
        <Heading as='h1' fontSize={[6]}>
          {props.title ? props.title : <Link href='/'>{'Qwill'}</Link>}
        </Heading>
        {props.title && (
          <Heading as='span' fontSize={3}>
            <Link
              href='/'
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Box as={TiArrowBack} mr={1} /> Go Back
            </Link>
          </Heading>
        )}
      </Box>
      <Box
        m={[4]}
        mb={[-4, 4]}
        onClick={() => toggle()}
        sx={{
          fontSize: 5,
          color: 'primary'
        }}
      >
        {isLight() ? <FaToggleOff /> : <FaToggleOn />}
      </Box>
    </Box>
  );
};

export default Nav;
