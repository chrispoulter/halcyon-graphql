const { ApolloServer } = require('apollo-server');
const { schema, resolvers, context, subscriptions } = require('./graphql');
const { openConnection } = require('./utils/mongo');

openConnection();

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context,
    subscriptions
});

server
    .listen({ port: process.env.PORT || 4000 })
    .then(({ url, subscriptionsUrl }) => {
        console.log(`Server ready at ${url}`);
        console.log(`Subscriptions ready at ${subscriptionsUrl}`);
    });
