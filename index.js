const express = require('express')
const PORT = process.env.PORT || 3001
const entity = require('./routes/entities')
const requests = require('./routes/requests')
const handbook = require('./routes/handbook')
const groups = require('./routes/groups')
const mailing = require('./routes/mailing')
const mongoose = require('mongoose')
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Змініть '*' на конкретний домен, який може звертатися до вашого сервера
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use('/mailing', mailing)
app.use('/entities', entity);
app.use('/requests', requests);
app.use('/handbook', handbook);
app.use('/groups', groups);

const uri = "mongodb+srv://admin:admin@cluster0.spcdnnn.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function runMongoDB() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("You successfully connected to MongoDB!");
    } finally {
        await client.close();
    }
}

async function start() {
    try {
        runMongoDB().catch(console.dir);

        await mongoose.connect(uri, { useNewUrlParser: true })

        app.listen(PORT, () => {
            console.log(`Server starting on port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()
