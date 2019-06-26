
import userService from '../../services/userService';

class UserController {
	all(req, res) {
		userService.all().then(r => {
			if (r) res.json(r);
			else res.status(404).end();
		})
	}

	create(req, res) {
		userService.create(req.body).then(r => {
			res.json(r)
		})
		.catch(err => res.json({ success: false, err}) )
	}
}

export default new UserController()