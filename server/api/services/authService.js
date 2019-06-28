import User from '../models/user'

class  AuthService {
    byUsername(username) {
        return new Promise((resolve, reject) => {
            const user = User.findOne({ username });
            resolve(user);
        })
    }
}

export default new AuthService();