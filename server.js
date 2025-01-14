const path = require("path");

const fastify = require("fastify")({
  logger: false,
});

fastify.register(require("@fastify/static"), {
  root: path.join(__dirname, "public"),
  prefix: "/",
});

fastify.register(require("@fastify/formbody"));

fastify.register(require("@fastify/view"), {
  engine: {
    handlebars: require("handlebars"),
  },
});

fastify.get("/", function (request, reply) {
  return reply.view("/src/pages/training.hbs");
});

fastify.get("/training.hbs", function (request, reply) {
  return reply.view("/src/pages/training.hbs");
});

fastify.get("/signup0.hbs", function (request, reply) {
  return reply.view("/src/pages/signup0.hbs");
});

fastify.get("/signup1.hbs", function (request, reply) {
  return reply.view("/src/pages/signup1.hbs");
});

fastify.get("/signup2.hbs", function (request, reply) {
  return reply.view("/src/pages/signup2.hbs");
});

fastify.get("/wifi.hbs", function (request, reply) {
  return reply.view("/src/pages/wifi.hbs");
});


fastify.listen(
  { port: process.env.PORT, host: "0.0.0.0" },
  function (err, address) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Your app is listening on ${address}`);
  }
);
