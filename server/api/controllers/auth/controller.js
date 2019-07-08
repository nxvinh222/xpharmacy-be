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
                    let token = jwt.sign(userFound, 'sting', {expiresIn: 1000});
                    res.json({token});
                }
                else res.json({ success: false, message: "wrong password"})
                // res.json({test: userFound.password});
            }
            else res.json({ success: false, message: "username not found"})
        })
        // .catch(err => res.json({ success: false, err: "can't find username"}))
    }

    verify(req, res, next) {
        jwt.verify('eyJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ZDE1YmEzYjU2Y2NjNTQ2Nzg2YzgyNzMiLCJ1c2VybmFtZSI6Ikt1cm9Vc2FnaSIsInBhc3N3b3JkIjoiJDJiJDEyJGk3d056R3ZqWDNMTDU1U0JxTTZTZC5zWE1DNHlXUVN2c2Q2WFpCTTJHZWtDaHdQVXA5Q1hxIiwiYWdlIjozMDAwLCJwaG9uZSI6IjAxOTkyODU1OTEiLCJlbWFpbCI6InZpbmgxMjNAZ21haWwuY29tIiwibmFtZSI6InZpbmggbmd1eWVuIiwiX192IjowfQ.WFxk_9VC20NKgbM2XnQ5uZ4Zasv_g4o_TK3ls2nO9rA', 'sting', function(err, decoded) {
            console.log(decoded)
            req.user = decoded // bar
          });
        next()
    }
}

export default new AuthController();