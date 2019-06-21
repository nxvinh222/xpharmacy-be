import User from '../models/user';

class UserService {

	all() {
		return new Promise((resolve, rejects) => {
			const users = User.find();
			resolve(users)
		})
	}



}

export default new UserService()