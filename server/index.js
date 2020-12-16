//Modified from https://medium.com/better-programming/a-simple-crud-app-using-graphql-nodejs-mongodb-78319908f563

const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const bodyParser = require("body-parser")
const cors = require("cors")
const { ApolloServer } = require("apollo-server-express")
const MONGODB_URI = process.env.REACT_APP_MONGODB_URI

const schema = require("./schema")

const url = MONGODB_URI

const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})

connect.then(
  db => {
    console.log("Connected to server!")
  },
  err => {
    console.log(err)
  }
)

const server = new ApolloServer({
  schema: schema,
  //context: ({ req }) => {
  // Note! This example uses the `req` object to access headers,
  // but the arguments received by `context` vary by integration.
  // This means they will vary for Express, Koa, Lambda, etc.!
  //
  // To find out the correct arguments for a specific integration,
  // see the `context` option in the API reference for `apollo-server`:
  // https://www.apollographql.com/docs/apollo-server/api/apollo-server/

  // Get the user token from the headers.
  //const token = req.headers.authorization || ""

  // try to retrieve a user with the token
  //const user = getUser(token)

  // add the user to the context
  //return { user }
  //},
})

const app = express()

app.use(express.static("public"))

app.use(bodyParser.json())
app.use("*", cors())
server.applyMiddleware({ app })
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
