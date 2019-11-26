import { Box, Heading, Text, Flex, Image } from 'rebass';
import { Link } from './NextLink';
import Avatar from 'src/components/Images/Avatar';

const Nav = props => (
  <Box m={4}>
    <Heading as='h1' fontSize={[6]}>
      <Link href='/'>{props.title || 'Qwill'}</Link>
    </Heading>
    {!props.title && (
      <Flex mt={4} mb={5} flexWrap='wrap'>
        <Avatar link src='/static/ajardiah.jpg' name='AJ' slug='ajardiah' />
        <Avatar link src='/static/slyons.jpg' name='Sean' slug='slyons' />
        <Avatar
          link
          src='/static/fmarasco.jpeg'
          name='Franchesca'
          slug='fmarasco'
        />
        <Avatar link src='/static/jpowers.jpeg' name='Jon' slug='jpowers' />
      </Flex>
    )}
  </Box>
);

export default Nav;
