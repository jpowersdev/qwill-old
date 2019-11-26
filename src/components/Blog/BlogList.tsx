import { Box } from 'rebass';
import GridTiles from '../Layout/GridTiles';

const BlogList = props => (
  <Box m={3}>
    <GridTiles columns={1} gridGap={3} m={3}>
      {props.children}
    </GridTiles>
  </Box>
);

export default BlogList;
