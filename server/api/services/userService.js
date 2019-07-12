import User from '../models/user';

class UserService {

	all() {
		return User.find();
	}

	byId(id) {
		return User.findById(id);
	}

	update(id) {
		return User.findById(id);
	}

	create(info) {
		return User.create(info);
	}

}

export default new UserService()