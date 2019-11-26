import { Box } from 'rebass';

const Wrapper = props => (
  <Box maxWidth={['80ch']} m='auto'>
    {props.children}
  </Box>
);

export default Wrapper;
