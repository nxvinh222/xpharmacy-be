
import userService from '../../services/userService';
import bcrypt from 'bcrypt';

class UserController {
	all(req, res) {
		userService.all().then(r => {
			if (r) res.json(r);
			else res.json({ success: false });
		})
	}

	byId(req, res) {
		userService.byId(req.params.id).then(userFound => {
			if (userFound) res.json(userFound);
			else res.status(404).end();
		})
		.catch(err => res.json({ success: false, err }))
	}

	update(req, res) {
		// res.json({ success: true })
		userService.update(req.params.id).then(userFound => {
			if (userFound) {
				for (let key in req.body) {
					let value = req.body[key];
					if (value !== null)
						userFound[key] = value;
				}
				userFound.save();
				res.json(userFound);
			}
			else res.json({ success: false });
		})
	}

	create(req, res) {
		const { password } = req.body;
		const hashPassword = bcrypt.hashSync(password, 12);
		req.body.password = hashPassword;
		userService.create(req.body).then(r => {
			res.json(r)
		})
		.catch(err => res.json({ success: false, err }) )
	}
}

export default new UserController()