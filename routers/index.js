const router = require("express-promise-router")();
const { graphiqlExpress } = require("apollo-server-express/dist/expressApollo");
const { graphqlExpress } = require("apollo-server-express");
const models = require("../models");
const services = require("../services");
const schema = require("../schema");

const buildOptions = (req, res) => ({
  context: {
    models,
    services,
  },
  schema,
});

router.all("/graphql", graphqlExpress(buildOptions));

router.all(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql",
  })
);

module.exports = router;
