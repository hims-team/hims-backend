
import server from './app';

server.listen({ port: 3000 }).then(({ url }) => {
  // console.log(`🚀  Server ready at ${url}`);
});
