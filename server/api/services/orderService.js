import Order from '../models/order';

class OrderService {

	all() {
		return Order.find().populate('products');
	}

	byId(id) {
		return Order.findById(id).populate('products');
	}

	create(info) {
		return Order.create(info);		
	}

	populate() {
		return Order.populate();
	}


	delete(id){
		return Order.findByIdAndDelete(id);
	}

}

export default new OrderService()