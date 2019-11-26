import { Link } from '../Navigation/NextLink';
import { Box } from 'rebass';

const Avatar = props => {
  return props.link ? (
    <Link href='/author/[slug]' mask={`/author/${props.slug}`}>
      <Box
        mr={3}
        my={2}
        minWidth='initial'
        width={95}
        height={95}
        variant='avatar'
        sx={{
          backgroundImage: `url('${props.src}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          position: 'relative',
          zIndex: '0',
          '&:hover::before': {
            content: `"${props.name}"`,
            fontFamily: 'Roboto Slab',
            color: '#FFF',
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            background: 'rgba(30,30,30,0.7)',
            zIndex: '1'
          }
        }}
      />
    </Link>
  ) : (
    <Box
      mr={3}
      my={2}
      minWidth='initial'
      width={95}
      height={95}
      variant='avatar'
      sx={{
        backgroundImage: `url('${props.src}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    />
  );
};

export default Avatar;
