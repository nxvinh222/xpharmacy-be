import './common/env';
import Server from './common/server';
import routes from './routes';
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://divinevinh:ug6y6crKwUP0Fsv0@cluster0-scqka.mongodb.net/test?retryWrites=true&w=majority', err =>{
    if (err) console.log(err)
    else
    console.log("CONNECT SUCCESS!")
});

export default new Server().router(routes).listen(process.env.PORT);
