const server = Bun.serve({
  port: 3000,
  fetch(_request) {
    return new Response('Welcome to Bun!');
  },
});

console.log(`Listening on localhost: ${server.port}`);
