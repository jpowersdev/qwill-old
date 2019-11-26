import { Box, Heading, Text, Flex, Image } from 'rebass';
import { Link } from './NextLink';
import Avatar from 'src/components/Images/Avatar';

const Nav = props => (
  <Box m={4}>
    <Heading as='h1' fontSize={[6]}>
      <Link href='/'>{props.title || 'Qwill'}</Link>
    </Heading>
  </Box>
);

export default Nav;
