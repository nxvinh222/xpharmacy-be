import './common/env';
import Server from './common/server';
import routes from './routes';
import mongoose from 'mongoose';
import session from 'express-session';
import express from 'express';
import bodyParser from 'body-parser';
const app = express();

app.use(session({
    secret: "worthy", 
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(function(req, res, next){
//     console.log(req.session);
//     console.log(req.sessionID);
//     next();
// })

mongoose.connect('mongodb+srv://divinevinh:ug6y6crKwUP0Fsv0@cluster0-scqka.mongodb.net/test?retryWrites=true&w=majority', err =>{
    if (err) console.log(err)
    else
    console.log("CONNECT SUCCESS!")
});

export default new Server().router(routes).listen(process.env.PORT);
