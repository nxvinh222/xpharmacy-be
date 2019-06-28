import Product from '../models/product';

class ProductService {

	all() {
		return new Promise((resolve, rejects) => {
			const products = Product.find();
			resolve(products);
		})
	}

	byId(id) {
		return new Promise((resolve, rejects) => {
			const product = Product.findById(id);
			resolve(product);
		})

	}

	create(info) {
		return new Promise((resolve, rejects) => {
			const product = Product.create(info);
			console.log(info);
			resolve(product);			
		})
	}

	delete(id){
		return new Promise ((resolve, rejects) =>{
			const product = Product.findByIdAndDelete(id);
			console.log(product);
			resolve(product);
		})
	}


}

export default new ProductService()