
import userService from '../../services/userService';

class UserController {
	all(req, res) {
		userService.all().then(r => {
			res.json(r);
		})
	}
}

export default new UserController()