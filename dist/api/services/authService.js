"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AuthService {
  byUsername(username) {
    return new Promise((resolve, reject) => {
      const user = _user.default.findOne({
        username
      });

      resolve(user);
    });
  }

}

var _default = new AuthService();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9hcGkvc2VydmljZXMvYXV0aFNlcnZpY2UuanMiXSwibmFtZXMiOlsiQXV0aFNlcnZpY2UiLCJieVVzZXJuYW1lIiwidXNlcm5hbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVzZXIiLCJVc2VyIiwiZmluZE9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUEsTUFBT0EsV0FBUCxDQUFtQjtBQUNmQyxFQUFBQSxVQUFVLENBQUNDLFFBQUQsRUFBVztBQUNqQixXQUFPLElBQUlDLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBcUI7QUFDcEMsWUFBTUMsSUFBSSxHQUFHQyxjQUFLQyxPQUFMLENBQWE7QUFBRU4sUUFBQUE7QUFBRixPQUFiLENBQWI7O0FBQ0FFLE1BQUFBLE9BQU8sQ0FBQ0UsSUFBRCxDQUFQO0FBQ0gsS0FITSxDQUFQO0FBSUg7O0FBTmM7O2VBU0osSUFBSU4sV0FBSixFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXIgZnJvbSAnLi4vbW9kZWxzL3VzZXInXHJcblxyXG5jbGFzcyAgQXV0aFNlcnZpY2Uge1xyXG4gICAgYnlVc2VybmFtZSh1c2VybmFtZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBVc2VyLmZpbmRPbmUoeyB1c2VybmFtZSB9KTtcclxuICAgICAgICAgICAgcmVzb2x2ZSh1c2VyKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQXV0aFNlcnZpY2UoKTsiXX0=