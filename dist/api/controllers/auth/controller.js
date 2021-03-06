"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _authService = _interopRequireDefault(require("../../services/authService"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AuthController {
  Login(req, res) {
    const {
      username,
      password
    } = req.body;

    _authService.default.byUsername(username).then(userFound => {
      if (userFound) {
        // console.log(password);
        if (_bcrypt.default.compareSync(password, userFound.password)) {
          req.session.user = {
            username: username,
            id: userFound._id,
            name: userFound.name
          };
          res.json({
            success: true,
            message: "Login success",
            name: userFound.name,
            id: userFound._id
          });
        } else res.json({
          success: false,
          message: "wrong password"
        }); // res.json({test: userFound.password});

      } else res.json({
        success: false,
        message: "username not found"
      });
    }); // .catch(err => res.json({ success: false, err: "can't find username"}))

  }

}

var _default = new AuthController();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZlci9hcGkvY29udHJvbGxlcnMvYXV0aC9jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIkF1dGhDb250cm9sbGVyIiwiTG9naW4iLCJyZXEiLCJyZXMiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiYm9keSIsImF1dGhTZXJ2aWNlIiwiYnlVc2VybmFtZSIsInRoZW4iLCJ1c2VyRm91bmQiLCJiY3J5cHQiLCJjb21wYXJlU3luYyIsInNlc3Npb24iLCJ1c2VyIiwiaWQiLCJfaWQiLCJuYW1lIiwianNvbiIsInN1Y2Nlc3MiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxjQUFOLENBQXFCO0FBQ2pCQyxFQUFBQSxLQUFLLENBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFXO0FBQ1osVUFBTTtBQUFFQyxNQUFBQSxRQUFGO0FBQVlDLE1BQUFBO0FBQVosUUFBeUJILEdBQUcsQ0FBQ0ksSUFBbkM7O0FBQ0FDLHlCQUFZQyxVQUFaLENBQXVCSixRQUF2QixFQUFpQ0ssSUFBakMsQ0FBc0NDLFNBQVMsSUFBSTtBQUMvQyxVQUFJQSxTQUFKLEVBQWU7QUFDWDtBQUNBLFlBQUlDLGdCQUFPQyxXQUFQLENBQW1CUCxRQUFuQixFQUE2QkssU0FBUyxDQUFDTCxRQUF2QyxDQUFKLEVBQ0E7QUFDSUgsVUFBQUEsR0FBRyxDQUFDVyxPQUFKLENBQVlDLElBQVosR0FBbUI7QUFBRVYsWUFBQUEsUUFBUSxFQUFFQSxRQUFaO0FBQXNCVyxZQUFBQSxFQUFFLEVBQUVMLFNBQVMsQ0FBQ00sR0FBcEM7QUFBeUNDLFlBQUFBLElBQUksRUFBRVAsU0FBUyxDQUFDTztBQUF6RCxXQUFuQjtBQUNBZCxVQUFBQSxHQUFHLENBQUNlLElBQUosQ0FBUztBQUFFQyxZQUFBQSxPQUFPLEVBQUUsSUFBWDtBQUFpQkMsWUFBQUEsT0FBTyxFQUFFLGVBQTFCO0FBQTJDSCxZQUFBQSxJQUFJLEVBQUVQLFNBQVMsQ0FBQ08sSUFBM0Q7QUFBaUVGLFlBQUFBLEVBQUUsRUFBRUwsU0FBUyxDQUFDTTtBQUEvRSxXQUFUO0FBQ0gsU0FKRCxNQUtLYixHQUFHLENBQUNlLElBQUosQ0FBUztBQUFFQyxVQUFBQSxPQUFPLEVBQUUsS0FBWDtBQUFrQkMsVUFBQUEsT0FBTyxFQUFFO0FBQTNCLFNBQVQsRUFQTSxDQVFYOztBQUNILE9BVEQsTUFVS2pCLEdBQUcsQ0FBQ2UsSUFBSixDQUFTO0FBQUVDLFFBQUFBLE9BQU8sRUFBRSxLQUFYO0FBQWtCQyxRQUFBQSxPQUFPLEVBQUU7QUFBM0IsT0FBVDtBQUNSLEtBWkQsRUFGWSxDQWVaOztBQUNIOztBQWpCZ0I7O2VBb0JOLElBQUlwQixjQUFKLEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXV0aFNlcnZpY2UgZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aFNlcnZpY2UnXHJcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0JztcclxuXHJcbmNsYXNzIEF1dGhDb250cm9sbGVyIHtcclxuICAgIExvZ2luKHJlcSwgcmVzKSB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5OyBcclxuICAgICAgICBhdXRoU2VydmljZS5ieVVzZXJuYW1lKHVzZXJuYW1lKS50aGVuKHVzZXJGb3VuZCA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyRm91bmQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBhc3N3b3JkKTtcclxuICAgICAgICAgICAgICAgIGlmIChiY3J5cHQuY29tcGFyZVN5bmMocGFzc3dvcmQsIHVzZXJGb3VuZC5wYXNzd29yZCkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxLnNlc3Npb24udXNlciA9IHsgdXNlcm5hbWU6IHVzZXJuYW1lLCBpZDogdXNlckZvdW5kLl9pZCwgbmFtZTogdXNlckZvdW5kLm5hbWUgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJMb2dpbiBzdWNjZXNzXCIsIG5hbWU6IHVzZXJGb3VuZC5uYW1lLCBpZDogdXNlckZvdW5kLl9pZH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHJlcy5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwid3JvbmcgcGFzc3dvcmRcIn0pXHJcbiAgICAgICAgICAgICAgICAvLyByZXMuanNvbih7dGVzdDogdXNlckZvdW5kLnBhc3N3b3JkfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSByZXMuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcInVzZXJuYW1lIG5vdCBmb3VuZFwifSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIC5jYXRjaChlcnIgPT4gcmVzLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZXJyOiBcImNhbid0IGZpbmQgdXNlcm5hbWVcIn0pKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQXV0aENvbnRyb2xsZXIoKTsiXX0=