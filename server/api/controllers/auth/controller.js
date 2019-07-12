import authService from '../../services/authService'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class AuthController {
    Login(req, res) {
        const { username, password } = req.body; 
        authService.byUsername(username).then(userFound => {
            if (userFound) {
                // console.log(password);
                if (bcrypt.compareSync(password, userFound.password))
                {
                    // req.session.user = { username: username, id: userFound._id, name: userFound.name }
                    // res.json({ success: true, message: "Login success", name: userFound.name, id: userFound._id})
                    var options = {
                        'expiresIn': 60*60*24
                        };
<<<<<<< HEAD
                    var info = {
                        'username': userFound.username,
                        'name': userFound.name
                    }
                    let token = jwt.sign(info, 'sting', {expiresIn: 1000});
                    res.json({token});
=======
                    let token = jwt.sign(userFound, 'sting', {expiresIn: 60 * 60 * 60 * 24 * 10});
                    res.json({token: token, username: username});
>>>>>>> f5412fc427779586cd65eb87f86cba49645fdb69
                }
                else res.json({ success: false, message: "wrong password"})
                // res.json({test: userFound.password});
            }
            else res.json({ success: false, message: "username not found"})
        })
        // .catch(err => res.json({ success: false, err: "can't find username"}))
    }

    verify(req, res, next) {
         console.log(req.headers.token)
        var info = jwt.verify(req.headers.token, 'sting', function(err, decoded) {
            if (err)
                console.log(err)
            else
                res.json(decoded);            
            
          });

            // if (info) {
            //     req.user = decoded // bar
            //     res.json(decoded)
            // }
        next()
    }
}

export default new AuthController();