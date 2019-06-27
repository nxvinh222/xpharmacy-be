import { Schema, model } from "mongoose";


const ProductSchema = new Schema({
	name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    info: {
        type:String,
        required:true
    },
    image: {
        type: String,
        required:true
    },
    category: {
        type: String,
        required:true
    }
})


export default model('User', ProductSchema)