import { Schema, model, SchemaTypes } from "mongoose";


const OrderSchema = new Schema({
	products: [{ type: Schema.Types.ObjectId, ref: 'product'}],
    name: {
        type: String,
        required: true
    },
    username: {
        type: String
    },
    phone: {
        type: String,
        required:true
    },
    address: {
        type: String,
        required:true
    },
    date: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required:true
    }
})


export default model('Order', OrderSchema)