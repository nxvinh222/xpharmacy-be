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
}

export default new AuthController();