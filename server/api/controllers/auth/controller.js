import authService from '../../services/authService'
import bcrypt from 'bcrypt';

class AuthController {
    Login(req, res) {
        const { username, password } = req.body; 
        authService.byUsername(username).then(userFound => {
            if (userFound) {
                // console.log(password);
                if (bcrypt.compareSync(password, userFound.password))
                {
                    req.session.user = { username: username, id: userFound._id, name: userFound.name }
                    res.json({ success: true, message: "Login success", name: userFound.name, id: userFound._id})
                }
                else res.json({ success: false, message: "wrong password"})
                // res.json({test: userFound.password});
            }
            else res.json({ success: false, message: "username not found"})
        })
        // .catch(err => res.json({ success: false, err: "can't find username"}))
    }

    GetInfo(req, res) {
        const { username } = req.body;
        authService.byUsername(username).then(r => {
            if (r) res.json(r);
            else res.status(404).end();
        })
    }
}

export default new AuthController();