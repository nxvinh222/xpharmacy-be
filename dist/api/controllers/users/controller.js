"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _userService = _interopRequireDefault(require("../../services/userService"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserController {
  all(req, res) {
    _userService.default.all().then(r => {
      if (r) res.json(r);else res.json({
        success: false
      });
    });
  }

  byId(req, res) {
    _userService.default.byId(req.params.id).then(userFound => {
      if (userFound) res.json(userFound);else res.status(404).end();
    }).catch(err => res.json({
      success: false,
      err
    }));
  }

  update(req, res) {
    // res.json({ success: true })
    _userService.default.update(req.params.id).then(userFound => {
      if (userFound) {
        for (let key in req.body) {
          let value = req.body[key];
          if (value !== null) userFound[key] = value;
        }

        userFound.save();
        res.json(userFound);
      } else res.json({
        success: false
      });
    });
  }

  create(req, res) {
    const {
      password
    } = req.body;

    const hashPassword = _bcrypt.default.hashSync(password, 12);

    req.body.password = hashPassword;

    _userService.default.create(req.body).then(r => {
      res.json(r);
    }).catch(err => res.json({
      success: false,
      err
    }));
  }

}

var _default = new UserController();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZlci9hcGkvY29udHJvbGxlcnMvdXNlcnMvY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJVc2VyQ29udHJvbGxlciIsImFsbCIsInJlcSIsInJlcyIsInVzZXJTZXJ2aWNlIiwidGhlbiIsInIiLCJqc29uIiwic3VjY2VzcyIsImJ5SWQiLCJwYXJhbXMiLCJpZCIsInVzZXJGb3VuZCIsInN0YXR1cyIsImVuZCIsImNhdGNoIiwiZXJyIiwidXBkYXRlIiwia2V5IiwiYm9keSIsInZhbHVlIiwic2F2ZSIsImNyZWF0ZSIsInBhc3N3b3JkIiwiaGFzaFBhc3N3b3JkIiwiYmNyeXB0IiwiaGFzaFN5bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7OztBQUVBLE1BQU1BLGNBQU4sQ0FBcUI7QUFDcEJDLEVBQUFBLEdBQUcsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVc7QUFDYkMseUJBQVlILEdBQVosR0FBa0JJLElBQWxCLENBQXVCQyxDQUFDLElBQUk7QUFDM0IsVUFBSUEsQ0FBSixFQUFPSCxHQUFHLENBQUNJLElBQUosQ0FBU0QsQ0FBVCxFQUFQLEtBQ0tILEdBQUcsQ0FBQ0ksSUFBSixDQUFTO0FBQUVDLFFBQUFBLE9BQU8sRUFBRTtBQUFYLE9BQVQ7QUFDTCxLQUhEO0FBSUE7O0FBRURDLEVBQUFBLElBQUksQ0FBQ1AsR0FBRCxFQUFNQyxHQUFOLEVBQVc7QUFDZEMseUJBQVlLLElBQVosQ0FBaUJQLEdBQUcsQ0FBQ1EsTUFBSixDQUFXQyxFQUE1QixFQUFnQ04sSUFBaEMsQ0FBcUNPLFNBQVMsSUFBSTtBQUNqRCxVQUFJQSxTQUFKLEVBQWVULEdBQUcsQ0FBQ0ksSUFBSixDQUFTSyxTQUFULEVBQWYsS0FDS1QsR0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsR0FBaEI7QUFDTCxLQUhELEVBSUNDLEtBSkQsQ0FJT0MsR0FBRyxJQUFJYixHQUFHLENBQUNJLElBQUosQ0FBUztBQUFFQyxNQUFBQSxPQUFPLEVBQUUsS0FBWDtBQUFrQlEsTUFBQUE7QUFBbEIsS0FBVCxDQUpkO0FBS0E7O0FBRURDLEVBQUFBLE1BQU0sQ0FBQ2YsR0FBRCxFQUFNQyxHQUFOLEVBQVc7QUFDaEI7QUFDQUMseUJBQVlhLE1BQVosQ0FBbUJmLEdBQUcsQ0FBQ1EsTUFBSixDQUFXQyxFQUE5QixFQUFrQ04sSUFBbEMsQ0FBdUNPLFNBQVMsSUFBSTtBQUNuRCxVQUFJQSxTQUFKLEVBQWU7QUFDZCxhQUFLLElBQUlNLEdBQVQsSUFBZ0JoQixHQUFHLENBQUNpQixJQUFwQixFQUEwQjtBQUN6QixjQUFJQyxLQUFLLEdBQUdsQixHQUFHLENBQUNpQixJQUFKLENBQVNELEdBQVQsQ0FBWjtBQUNBLGNBQUlFLEtBQUssS0FBSyxJQUFkLEVBQ0NSLFNBQVMsQ0FBQ00sR0FBRCxDQUFULEdBQWlCRSxLQUFqQjtBQUNEOztBQUNEUixRQUFBQSxTQUFTLENBQUNTLElBQVY7QUFDQWxCLFFBQUFBLEdBQUcsQ0FBQ0ksSUFBSixDQUFTSyxTQUFUO0FBQ0EsT0FSRCxNQVNLVCxHQUFHLENBQUNJLElBQUosQ0FBUztBQUFFQyxRQUFBQSxPQUFPLEVBQUU7QUFBWCxPQUFUO0FBQ0wsS0FYRDtBQVlBOztBQUVEYyxFQUFBQSxNQUFNLENBQUNwQixHQUFELEVBQU1DLEdBQU4sRUFBVztBQUNoQixVQUFNO0FBQUVvQixNQUFBQTtBQUFGLFFBQWVyQixHQUFHLENBQUNpQixJQUF6Qjs7QUFDQSxVQUFNSyxZQUFZLEdBQUdDLGdCQUFPQyxRQUFQLENBQWdCSCxRQUFoQixFQUEwQixFQUExQixDQUFyQjs7QUFDQXJCLElBQUFBLEdBQUcsQ0FBQ2lCLElBQUosQ0FBU0ksUUFBVCxHQUFvQkMsWUFBcEI7O0FBQ0FwQix5QkFBWWtCLE1BQVosQ0FBbUJwQixHQUFHLENBQUNpQixJQUF2QixFQUE2QmQsSUFBN0IsQ0FBa0NDLENBQUMsSUFBSTtBQUN0Q0gsTUFBQUEsR0FBRyxDQUFDSSxJQUFKLENBQVNELENBQVQ7QUFDQSxLQUZELEVBR0NTLEtBSEQsQ0FHT0MsR0FBRyxJQUFJYixHQUFHLENBQUNJLElBQUosQ0FBUztBQUFFQyxNQUFBQSxPQUFPLEVBQUUsS0FBWDtBQUFrQlEsTUFBQUE7QUFBbEIsS0FBVCxDQUhkO0FBSUE7O0FBeENtQjs7ZUEyQ04sSUFBSWhCLGNBQUosRSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgdXNlclNlcnZpY2UgZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlclNlcnZpY2UnO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCc7XHJcblxyXG5jbGFzcyBVc2VyQ29udHJvbGxlciB7XHJcblx0YWxsKHJlcSwgcmVzKSB7XHJcblx0XHR1c2VyU2VydmljZS5hbGwoKS50aGVuKHIgPT4ge1xyXG5cdFx0XHRpZiAocikgcmVzLmpzb24ocik7XHJcblx0XHRcdGVsc2UgcmVzLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRieUlkKHJlcSwgcmVzKSB7XHJcblx0XHR1c2VyU2VydmljZS5ieUlkKHJlcS5wYXJhbXMuaWQpLnRoZW4odXNlckZvdW5kID0+IHtcclxuXHRcdFx0aWYgKHVzZXJGb3VuZCkgcmVzLmpzb24odXNlckZvdW5kKTtcclxuXHRcdFx0ZWxzZSByZXMuc3RhdHVzKDQwNCkuZW5kKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKGVyciA9PiByZXMuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBlcnIgfSkpXHJcblx0fVxyXG5cclxuXHR1cGRhdGUocmVxLCByZXMpIHtcclxuXHRcdC8vIHJlcy5qc29uKHsgc3VjY2VzczogdHJ1ZSB9KVxyXG5cdFx0dXNlclNlcnZpY2UudXBkYXRlKHJlcS5wYXJhbXMuaWQpLnRoZW4odXNlckZvdW5kID0+IHtcclxuXHRcdFx0aWYgKHVzZXJGb3VuZCkge1xyXG5cdFx0XHRcdGZvciAobGV0IGtleSBpbiByZXEuYm9keSkge1xyXG5cdFx0XHRcdFx0bGV0IHZhbHVlID0gcmVxLmJvZHlba2V5XTtcclxuXHRcdFx0XHRcdGlmICh2YWx1ZSAhPT0gbnVsbClcclxuXHRcdFx0XHRcdFx0dXNlckZvdW5kW2tleV0gPSB2YWx1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dXNlckZvdW5kLnNhdmUoKTtcclxuXHRcdFx0XHRyZXMuanNvbih1c2VyRm91bmQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgcmVzLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRjcmVhdGUocmVxLCByZXMpIHtcclxuXHRcdGNvbnN0IHsgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xyXG5cdFx0Y29uc3QgaGFzaFBhc3N3b3JkID0gYmNyeXB0Lmhhc2hTeW5jKHBhc3N3b3JkLCAxMik7XHJcblx0XHRyZXEuYm9keS5wYXNzd29yZCA9IGhhc2hQYXNzd29yZDtcclxuXHRcdHVzZXJTZXJ2aWNlLmNyZWF0ZShyZXEuYm9keSkudGhlbihyID0+IHtcclxuXHRcdFx0cmVzLmpzb24ocilcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goZXJyID0+IHJlcy5qc29uKHsgc3VjY2VzczogZmFsc2UsIGVyciB9KSApXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVXNlckNvbnRyb2xsZXIoKSJdfQ==