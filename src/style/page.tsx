import { Box } from 'rebass';

const Page = props => (
  <Box
    as='main'
    bg='background'
    color='text'
    padding='1px'
    minHeight='100vh'
    {...props}
  />
);

export default Page;
