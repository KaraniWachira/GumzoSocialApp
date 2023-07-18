const express = require('express');
require('dotenv').config();
const session = require("express-session");
const { v4 } = require("uuid")
const sql = require('mssql');
const config = require('./config/userConfig')
const RedisStore = require('connect-redis').default;
const {createClient} = require("redis")

const userRoutes = require('./routers/userRoutes');

const app = express();
app.use(express.json());

async function startApp(){
try {
    console.log(config)
    const pool = await sql.connect(config)
    console.log("App Connected to database");

    const redisClient =  createClient();
    redisClient.connect()
    console.log("Connected to Redis")
    
    const redisStore = new RedisStore({
        client: redisClient,
        prefix: ''
    })
    const oneDay = 60 * 60 * 1000 * 24;
app.use((req, res, next)=>{req.pool = pool; next()})
app.use(session({
    store: redisStore,
    secret: process.env.SECRET,
    saveUninitialized: true,
    genid: ()=>v4(),
    resave: true,
    rolling: true,
    unset: 'destroy',
    cookie:{
        httpOnly: false,
        maxAge: oneDay,
        secure: false,
        domain: 'localhost'
    }
}))

app.use(userRoutes)

app.get('/', (req, res) => {
  res.send('gumzo Social');
});

const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});


} catch (error) {
    console.log("Error connecting to database")
    console.log(error)
}
}

startApp();



