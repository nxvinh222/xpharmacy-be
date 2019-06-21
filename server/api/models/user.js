import { Schema, model } from "mongoose";


const UserSchmema = new Schema({
	username: String,
	age: Number,
})


export default model('User', UserSchmema)