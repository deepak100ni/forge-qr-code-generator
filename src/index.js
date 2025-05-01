import Resolver from '@forge/resolver';

const resolver = new Resolver();

resolver.define('getText', async (req) => {
  console.log(req);

  return 'Hello, world! from local machine';
});

export const handler = resolver.getDefinitions();
