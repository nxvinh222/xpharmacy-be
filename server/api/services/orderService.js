import Order from '../models/order';

class ProductService {

	all() {
		return new Promise((resolve, rejects) => {
			const orders = Order.find();
			resolve(orders);
		})
	}

	byId(id) {
		return new Promise((resolve, rejects) => {
			const order = Order.findById(id);
			resolve(order);
		})

	}

	create(info) {
		return new Promise((resolve, rejects) => {
			const order = Order.create(info);
			console.log(info);
			resolve(order);			
		})
	}

	delete(id){
		return new Promise ((resolve, rejects) =>{
			const order = Order.findByIdAndDelete(id);
			console.log(order);
			resolve(order);
		})
	}


}

export default new OrderService()