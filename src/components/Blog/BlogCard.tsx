import { Box, Heading, Text } from 'rebass';

import { Link } from 'src/components/Navigation/NextLink';

const BlogCard = props => (
  <Box my={2}>
    <Link href='/post/[slug]' mask={`/post/${props.slug}`}>
      <Heading
        as='h2'
        color='secondary'
        fontSize={5}
        mb={3}
        sx={{
          ':hover': {
            textDecoration: 'underline'
          }
        }}
      >
        {props.title}
      </Heading>
    </Link>
    <Box my={2}>
      <Text color='text' fontSize={1}>
        by{' '}
        <Link
          href='/author/[slug]'
          mask={`/author/${props.author.slug}`}
          sx={{
            ':hover': {
              textDecoration: 'underline'
            }
          }}
        >
          {props.author.name}
        </Link>
      </Text>
    </Box>
    <Box my={2}>
      <Text color='text' fontFamily='body' fontSize={1}>
        {props.date} &#9679; {props.minutes} min read
      </Text>
    </Box>
    <Box my={3}>
      <Text fontFamily='body' color='text' lineHeight={1.5}>
        {props.excerpt}
      </Text>
    </Box>
  </Box>
);

export default BlogCard;
