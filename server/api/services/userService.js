import User from '../models/user';

class UserService {

	all() {
		return new Promise((resolve, rejects) => {
			const users = User.find();
			resolve(users);
		})
	}

	create(info) {
		return new Promise((resolve, rejects) => {
			const user = User.create(info);
			console.log(info);
			// if (err) rejects(err);
			resolve(user);			
		})
	}



}

export default new UserService()