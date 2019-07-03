import Express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import * as os from 'os';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import mongoose from 'mongoose';

import swaggerify from './swagger';

import l from './logger';

const app = new Express();

export default class ExpressServer {
  constructor() {
    app.use((req, res, next) => {
      res.setHeader("X-Frame-Options", "ALLOWALL");
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
      res.setHeader(
        "Access-Control-Allow-Methods",
        "POST, GET, PUT, DELETE, OPTIONS"
      );
      res.setHeader("Access-Control-Allow-Credentials", true);
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Authorization, Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
    });

    const root = path.normalize(`${__dirname}/../..`);
    app.set('appPath', `${root}client`);
    app.use(bodyParser.json({ limit: process.env.REQUEST_LIMIT || '100kb' }));
    app.use(
      bodyParser.urlencoded({
        extended: true,
        limit: process.env.REQUEST_LIMIT || '100kb',
      })
    );
    app.use(cookieParser(process.env.SESSION_SECRET));
    app.use(Express.static(`${root}/public`));
    //session
    app.use(session({
      secret: "worthy", 
      saveUninitialized: false,
      resave: false,
      cookie: {
          maxAge: 1000 * 60 * 60 * 24 * 7
      }
  }))
    //********* */
  
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    mongoose.connect('mongodb+srv://divinevinh:ug6y6crKwUP0Fsv0@cluster0-scqka.mongodb.net/test?retryWrites=true&w=majority', err =>{
    if (err) console.log(err)
    else
    console.log("CONNECT SUCCESS!")
});

  }

  router(routes) {
    swaggerify(app, routes);

    return this;
  }

  listen(port = process.env.PORT) {
    const welcome = p => () =>
      l.info(
        `up and running in ${process.env.NODE_ENV ||
          'development'} @: ${os.hostname()} on port: ${p}}`
      );
    http.createServer(app).listen(port, welcome(port));
    return app;
  }
}
