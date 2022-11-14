const express = require('express');
const dotenv = require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const app = express();
const PORT = process.env.PORT || 5000;

const colors = require('colors');
const connectDB = require('./config/db');
const schema = require('./schema/schema');

const cors = require('cors');

connectDB();

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(PORT, () => {
    console.log('app is listening on port ', PORT);
});

