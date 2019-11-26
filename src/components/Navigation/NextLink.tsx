import NextLink from 'next/link';
import { Link as StyledLink } from 'rebass';

const Link = ({ href, mask, ...props }: any) => (
  <NextLink href={href} as={mask} passHref>
    <StyledLink {...props} />
  </NextLink>
);

export { Link };
