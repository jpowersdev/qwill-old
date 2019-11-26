const sanityClient = require('@sanity/client');
const client = sanityClient({
  projectId: 'cow2pvg5',
  dataset: 'production',
  useCdn: true
});

export { client };
